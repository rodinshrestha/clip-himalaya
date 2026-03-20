'use client';

import { useEffect, useState, useCallback } from 'react';
import { useClient } from 'sanity';

const badgeStyle: React.CSSProperties = {
  backgroundColor: '#e53e3e',
  color: '#fff',
  borderRadius: '10px',
  padding: '1px 7px',
  fontSize: '12px',
  fontWeight: 700,
  minWidth: '20px',
  textAlign: 'center',
  lineHeight: '18px',
  display: 'inline-block',
};

function useUnreadCount() {
  const client = useClient({ apiVersion: '2024-01-01' });
  const [count, setCount] = useState<number>(0);

  const fetchCount = useCallback(() => {
    client
      .fetch(`count(*[_type == "contactSubmission" && isRead != true])`)
      .then(setCount)
      .catch(() => {});
  }, [client]);

  useEffect(() => {
    fetchCount();

    // Listen for real-time changes to contactSubmission documents
    const subscription = client
      .listen('*[_type == "contactSubmission"]')
      .subscribe(() => {
        fetchCount();
      });

    return () => subscription.unsubscribe();
  }, [client, fetchCount]);

  return count;
}

export function InquiryBadgeItem() {
  const count = useUnreadCount();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>User Inquiry</span>
      {count > 0 && <span style={badgeStyle}>{count}</span>}
    </div>
  );
}

export function UnreadBadgeItem() {
  const count = useUnreadCount();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>Unread Inquiries</span>
      {count > 0 && <span style={badgeStyle}>{count}</span>}
    </div>
  );
}
