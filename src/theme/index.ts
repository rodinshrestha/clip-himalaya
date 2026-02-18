import { breakPoints } from './break-points';
import { color } from './color';
import { fonts } from './fonts';

export const theme = {
  color,
  breakPoints,
  fonts,
} as const;

export type ThemeType = typeof theme;
