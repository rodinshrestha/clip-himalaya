export const truncate = (str: string, length = 200) => {
  if (str.length <= length) return str;
  return str.slice(0, str.lastIndexOf(' ', length)) + '...';
};
