import { useDocumentOperation } from 'sanity';
import { useEffect, useRef } from 'react';

export function AutoMarkAsReadAction(props: any) {
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const hasMarked = useRef(false);
  const isRead = props.published?.isRead;

  useEffect(() => {
    if (!isRead && !hasMarked.current && props.published) {
      hasMarked.current = true;
      patch.execute([{ set: { isRead: true } }]);
      publish.execute();
    }
  }, [isRead, props.published, patch, publish]);

  // Return null to hide this action from the UI — it runs automatically
  return null;
}
