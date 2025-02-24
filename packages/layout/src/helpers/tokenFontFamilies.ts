import typography from '@quickchat.vn/fuselage-tokens/dist/typography.json';

const getTokenFontFamily = (
  name: keyof typeof typography.fontFamilies
): string =>
  typography.fontFamilies[name]
    .map((fontFace) => (fontFace.includes(' ') ? `'${fontFace}'` : fontFace))
    .join(', ');

export const sans = getTokenFontFamily('sans');

export const mono = getTokenFontFamily('mono');
