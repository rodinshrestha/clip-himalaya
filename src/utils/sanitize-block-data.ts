import { BlockType } from '@/types/block.type';

export const sanitizeBlockData = (data: BlockType[]) => {
  return data.reduce((acc, iterator) => {
    const { text = '' } = iterator?.children?.[0] || {};

    if (!text) return acc;

    return [...acc, text];
  }, [] as any);
};
