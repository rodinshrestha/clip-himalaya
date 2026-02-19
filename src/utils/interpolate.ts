type InMinMAx = Array<number>;
type OutMaxMax = Array<number>;

export const interpolate = (
  current: number,
  [in_min, in_max]: InMinMAx,
  [out_min, out_max]: OutMaxMax,
) => ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
