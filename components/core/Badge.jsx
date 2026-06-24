import React from 'react';

const VARIANTS = {
  default:  { bg: 'var(--color-gray-100)',   color: 'var(--color-gray-700)' },
  primary:  { bg: 'var(--color-navy-900)',   color: '#fff' },
  blue:     { bg: 'var(--color-blue-100)',   color: 'var(--color-blue-600)' },
  success:  { bg: 'var(--color-teal-100)',   color: 'var(--color-teal-600)' },
  warning:  { bg: 'var(--color-amber-100)',  color: 'var(--color-amber-600)' },
  danger:   { bg: 'var(--color-coral-100)',  color: 'var(--color-coral-600)' },
  outline:  { bg: 'transparent',            color: 'var(--color-gray-600)', border: '1px solid var(--color-gray-300)' },
};

const SIZES = {
  sm: { fontSize: 'var(--text-xs)', padding: '2px 8px', height: '20px', radius: 'var(--radius-sm)' },
  md: { fontSize: 'var(--text-xs)', padding: '3px 10px', height: '24px', radius: 'var(--radius-sm)' },
  lg: { fontSize: 'var(--text-sm)', padding: '4px 12px', height: '28px', radius: 'var(--radius-md)' },
};

export function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  style: extraStyle,
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  const s = SIZES[size] || SIZES.md;

  return React.createElement(
    'span',
    {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: s.fontSize,
        padding: s.padding,
        height: s.height,
        background: v.bg,
        color: v.color,
        border: v.border || 'none',
        borderRadius: 'var(--radius-full)',
        whiteSpace: 'nowrap',
        lineHeight: 1,
        ...extraStyle,
      }
    },
    dot && React.createElement('span', {
      style: {
        width: '5px', height: '5px',
        borderRadius: '50%',
        background: v.color,
        flexShrink: 0,
      }
    }),
    children
  );
}
