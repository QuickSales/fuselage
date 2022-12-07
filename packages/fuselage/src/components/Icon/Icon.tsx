import type { Keys } from '@quickchat.vn/icons';
import nameToCharacterMapping from '@quickchat.vn/icons';
import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

export type IconProps = Omit<ComponentProps<typeof Box>, 'name' | 'size'> & {
  name: Keys;
  size?: ComponentProps<typeof Box>['width'];
};

export const Icon = forwardRef(function Icon(
  { name, size, ...props }: IconProps,
  ref: Ref<HTMLElement>
) {
  return (
    <Box
      is='i'
      rcx-icon
      rcx-icon--name={name}
      children={nameToCharacterMapping[name]}
      aria-hidden='true'
      fontSize={size}
      ref={ref}
      {...props}
    />
  );
});
