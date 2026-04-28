import {
  useDocumentOperation,
  useClient,
  type DocumentActionComponent,
} from 'sanity';
import {TrashIcon} from '@sanity/icons';
import {useCallback, useState} from 'react';
import {apiVersion} from '../env';

/**
 * Recursively finds all field paths in a document that contain a reference
 * to the given target ID, including nested objects and arrays.
 */
function findRefPaths(obj: unknown, targetId: string, currentPath = ''): string[] {
  const paths: string[] = [];

  if (!obj || typeof obj !== 'object') return paths;

  if ('_ref' in (obj as Record<string, unknown>)) {
    if ((obj as {_ref: string})._ref === targetId) {
      return [currentPath];
    }
    return paths;
  }

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const item = obj[i];
      // For array items with _key (Sanity portable text / arrays), unset by _key
      if (item && typeof item === 'object' && '_key' in item) {
        if ('_ref' in item && item._ref === targetId) {
          // This array item IS a reference — remove the whole item
          paths.push(`${currentPath}[_key=="${item._key}"]`);
        } else {
          // Check nested fields inside array items
          paths.push(...findRefPaths(item, targetId, `${currentPath}[_key=="${item._key}"]`));
        }
      }
    }
  } else {
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      if (key.startsWith('_')) continue; // skip internal Sanity fields
      const fieldPath = currentPath ? `${currentPath}.${key}` : key;
      paths.push(...findRefPaths(value, targetId, fieldPath));
    }
  }

  return paths;
}

export const ForceDeleteAction: DocumentActionComponent = (props) => {
  const {del} = useDocumentOperation(props.id, props.type);
  const client = useClient({apiVersion});
  const [isDeleting, setIsDeleting] = useState(false);

  const onHandle = useCallback(async () => {
    // The published ID without "drafts." prefix
    const publishedId = props.id.replace(/^drafts\./, '');

    // First check how many documents reference this one
    const referringDocs = await client.fetch<{_id: string; _type: string}[]>(
      `*[references($id) || references($draftId)]{ _id, _type }`,
      {id: publishedId, draftId: `drafts.${publishedId}`},
    );

    const message =
      referringDocs.length > 0
        ? `${referringDocs.length} document(s) reference this. Force delete will remove those references and delete this document. Continue?`
        : 'Delete this document?';

    if (!window.confirm(message)) return;

    setIsDeleting(true);

    try {
      if (referringDocs.length > 0) {
        // Fetch all referring documents in a single query
        const ids = referringDocs.map((d) => d._id);
        const fullDocs = await client.fetch<Record<string, unknown>[]>(
          `*[_id in $ids]`,
          {ids},
        );

        const transaction = client.transaction();

        for (const fullDoc of fullDocs) {
          if (!fullDoc?._id) continue;

          const unsetPaths = findRefPaths(fullDoc, publishedId);
          // Also check for draft references
          unsetPaths.push(...findRefPaths(fullDoc, `drafts.${publishedId}`));

          if (unsetPaths.length > 0) {
            transaction.patch(fullDoc._id as string, (patch) =>
              patch.unset(unsetPaths),
            );
          }
        }

        await transaction.commit();
      }

      del.execute();
      props.onComplete();
    } catch (error) {
      console.error('Failed to delete document:', error);
      window.alert(
        `Failed to delete: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      setIsDeleting(false);
    }
  }, [client, del, props]);

  return {
    label: isDeleting ? 'Deleting...' : 'Force Delete',
    tone: 'critical' as const,
    icon: TrashIcon,
    disabled: isDeleting,
    onHandle,
  };
};
