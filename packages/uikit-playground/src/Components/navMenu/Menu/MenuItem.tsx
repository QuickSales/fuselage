import { css } from '@quickchat.vn/css-in-js';
import { Box, Label } from '@quickchat.vn/fuselage';
import type { FC } from 'react';
import React from 'react';

const MenuItem: FC<{ name: string }> = ({ name }) => {
  const pointer = css`
    cursor: pointer;
  `;

  const style = css`
    &:hover {
      background-color: #1f2329;
    }
    &:active {
      background-color: #6c727a;
      opacity: 0.3;
    }
  `;
  return (
    <Box
      width='100%'
      height='28px'
      paddingBlock='4px'
      display='flex'
      alignItems='center'
      className={[pointer, style]}
    >
      <Label className={pointer} color='hint' fontSize={'x14'}>
        {name}
      </Label>
    </Box>
  );
};

export default MenuItem;
