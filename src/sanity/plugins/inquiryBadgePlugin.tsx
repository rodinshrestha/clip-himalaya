'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useClient, definePlugin } from 'sanity';

const BADGE_CLASS = 'inquiry-unread-badge';

function InquiryBadgeWidget() {
  const client = useClient({ apiVersion: '2024-01-01' });
  const [count, setCount] = useState<number>(0);
  const isUpdating = useRef(false);

  const fetchCount = useCallback(() => {
    client
      .fetch(`count(*[_type == "contactSubmission" && isRead != true])`)
      .then(setCount)
      .catch(() => {});
  }, [client]);

  useEffect(() => {
    fetchCount();

    const subscription = client
      .listen('*[_type == "contactSubmission"]')
      .subscribe(() => fetchCount());

    return () => subscription.unsubscribe();
  }, [client, fetchCount]);

  useEffect(() => {
    const updateBadge = () => {
      if (isUpdating.current) return;
      isUpdating.current = true;

      // Remove old badges
      document
        .querySelectorAll(`.${BADGE_CLASS}`)
        .forEach((el) => el.remove());

      if (count > 0) {
        const allLinks = Array.from(document.querySelectorAll('a'));
        const target = allLinks.find((el) => {
          const text = el.textContent?.replace(/\d+$/, '').trim();
          return text === 'User Inquiry';
        });

        if (target) {
          const badge = document.createElement('span');
          badge.className = BADGE_CLASS;
          badge.textContent = String(count);
          badge.style.cssText =
            'background:#e53e3e;color:#fff;border-radius:10px;padding:1px 7px;font-size:11px;font-weight:700;min-width:18px;text-align:center;line-height:18px;display:inline-block;margin-left:6px;';
          target.appendChild(badge);
        }
      }

      isUpdating.current = false;
    };

    // Run once after a short delay to let Sanity render the sidebar
    const timeout = setTimeout(updateBadge, 1000);

    // Re-check periodically instead of MutationObserver to avoid loops
    const interval = setInterval(updateBadge, 3000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [count]);

  return null;
}

export const inquiryBadgePlugin = definePlugin({
  name: 'inquiry-badge',
  studio: {
    components: {
      layout: (props: any) => {
        const { renderDefault } = props;
        return (
          <>
            {renderDefault(props)}
            <InquiryBadgeWidget />
          </>
        );
      },
    },
  },
});
