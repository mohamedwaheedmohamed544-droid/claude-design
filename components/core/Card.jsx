import React from 'react';

export function Card({
  padding = 'md',
  radius = 'lg',
  shadow = 'md',
  hoverable = false,
  bordered = false,
  background = 'white',
  children,
  onClick,
  style: extraStyle,
}) {
  const [hovered, setHovered] = React.useState(false);

  const PADDINGS = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
  };

  const SHADOWS = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  };

  const RADII = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
  };

  const baseStyle = {
    background,
    borderRadius: RADII[radius] || RADII.lg,
    padding: PADDINGS[padding] || PADDINGS.md,
    boxShadow: hoverable && hovered
      ? 'var(--shadow-lg)'
      : SHADOWS[shadow] || SHADOWS.md,
    border: bordered ? '1px solid var(--color-border-default)' : 'none',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
    transform: hoverable && hovered ? 'translateY(-2px)' : 'translateY(0)',
    ...extraStyle,
  };

  return React.createElement(
    'div',
    {
      style: baseStyle,
      onClick,
      onMouseEnter: hoverable ? () => setHovered(true) : undefined,
      onMouseLeave: hoverable ? () => setHovered(false) : undefined,
    },
    children
  );
}
