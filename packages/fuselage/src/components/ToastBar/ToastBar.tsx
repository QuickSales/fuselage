import { css, keyframes } from '@quickchat.vn/css-in-js';
import { useUniqueId } from '@quickchat.vn/fuselage-hooks';
import type { ReactNode } from 'react';
import React from 'react';

import Box from '../Box';
import { IconButton } from '../Button';
import { Icon } from '../Icon';

export type ToastBarProps = {
  variant?: 'info' | 'success' | 'error';
  className?: string;
  children?: ReactNode;
  time?: number;
  id?: string;
  onClose?: (id: string) => void;
};

export function ToastBar({
  children,
  className = '',
  variant = 'info',
  time = 5,
  id,
  onClose,
}: ToastBarProps) {
  const iconName =
    (variant === 'success' && 'check') ||
    (variant === 'error' && 'warning') ||
    'info';

  const sideOpen = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const progressBar = keyframes`
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  `;

  const toastBarAnimation = css`
    animation: ${sideOpen} 0.5s;
  `;

  const progressBarAnimation = css`
    &::after {
      width: 0%;
      animation: ${progressBar} ${time}s;
    }
  `;

  const uniqueId = useUniqueId();
  const toastId = id || uniqueId;

  return (
    <Box
      className={['rcx-toastbar-wrapper', toastBarAnimation]}
      role='alert'
      aria-labelledby={toastId}
    >
      <Box
        className={`rcx-toastbar rcx-toastbar--${variant} ${className}`}
        elevation='2nb'
        borderRadius='x4'
      >
        <div className='rcx-toastbar-inner'>
          <Icon size='x20' name={iconName} />
          <div className='rcx-toastbar-content' id={toastId}>
            {children}
          </div>
          {onClose && (
            <div className='rcx-toastbar-close'>
              <IconButton
                tiny
                {...{
                  success: variant === 'success',
                  danger: variant === 'error',
                }}
                onClick={() => onClose(toastId)}
                icon='cross'
              />
            </div>
          )}
        </div>
        <Box className={[progressBarAnimation, 'rcx-toastbar-progressbar']} />
      </Box>
    </Box>
  );
}
