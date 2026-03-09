import { useEffect } from 'react';
import { set } from 'sanity';
import { SlugInput } from 'sanity';

export function AutoSlugInput(props: any) {
  const { value, onChange, document: doc } = props;

  useEffect(() => {
    if (doc?.title) {
      const slug = doc.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .slice(0, 96);

      onChange(set({ _type: 'slug', current: slug }));
    }
  }, [doc?.title]); // 👈 fires every time title changes

  return <SlugInput {...props} />;
}
