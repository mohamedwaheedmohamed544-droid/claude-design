import React from 'react';

const VARIANTS = {
  primary: {
    background: 'var(--color-navy-900)',
    color: '#fff',
    border: 'none',
    hoverBg: 'var(--color-navy-800)',
    activeBg: 'var(--color-navy-950)',
  },
  secondary: {
    background: 'var(--color-blue-500)',
    color: '#fff',
    border: 'none',
    hoverBg: 'var(--color-blue-600)',
    activeBg: 'var(--color-blue-600)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-navy-900)',
    border: '1.5px solid var(--color-navy-900)',
    hoverBg: 'var(--color-navy-50)',
    activeBg: 'var(--color-navy-100)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-navy-900)',
    border: 'none',
    hoverBg: 'var(--color-gray-100)',
    activeBg: 'var(--color-gray-200)',
  },
  danger: {
    background: 'var(--color-coral-500)',
    color: '#fff',
    border: 'none',
    hoverBg: 'var(--color-coral-600)',
    activeBg: 'var(--color-coral-600)',
  },
};

const SIZES = {
  sm: { padding: '0 12px', height: '32px', fontSize: 'var(--text-sm)', gap: '6px', iconSize: '14px', radius: 'var(--radius-sm)' },
  md: { padding: '0 16px', height: '40px', fontSize: 'var(--text-base)', gap: '8px', iconSize: '16px', radius: 'var(--radius-md)' },
  lg: { padding: '0 24px', height: '48px', fontSize: 'var(--text-md)', gap: '10px', iconSize: '18px', radius: 'var(--radius-lg)' },
};

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  onClick,
  children,
  type = 'button',
  style: extraStyle,
}) {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;

  const bg = active ? v.activeBg : hovered ? v.hoverBg : v.background;

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    height: s.height,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--font-weight-medium)',
    color: v.color,
    background: disabled ? 'var(--color-gray-100)' : bg,
    border: disabled ? '1.5px solid var(--color-gray-200)' : (v.border || 'none'),
    borderRadius: s.radius,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'background var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast)',
    transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
    opacity: disabled ? 0.55 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    outline: 'none',
    boxSizing: 'border-box',
    ...extraStyle,
  };

  if (hovered && !disabled && !active) {
    baseStyle.boxShadow = 'var(--shadow-sm)';
  }

  return React.createElement(
    'button',
    {
      type,
      disabled: disabled || loading,
      style: baseStyle,
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => { setHovered(false); setActive(false); },
      onMouseDown: () => setActive(true),
      onMouseUp: () => setActive(false),
    },
    loading && React.createElement('span', {
      style: {
        width: s.iconSize,
        height: s.iconSize,
        border: `2px solid ${variant === 'outline' || variant === 'ghost' ? 'var(--color-navy-300)' : 'rgba(255,255,255,0.3)'}`,
        borderTopColor: variant === 'outline' || variant === 'ghost' ? 'var(--color-navy-900)' : '#fff',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite',
        flexShrink: 0,
      }
    }),
    !loading && iconLeft && React.createElement('span', {
      style: { display: 'flex', alignItems: 'center', fontSize: s.iconSize, lineHeight: 1, flexShrink: 0 }
    }, iconLeft),
    children,
    !loading && iconRight && React.createElement('span', {
      style: { display: 'flex', alignItems: 'center', fontSize: s.iconSize, lineHeight: 1, flexShrink: 0 }
    }, iconRight)
  );
}
