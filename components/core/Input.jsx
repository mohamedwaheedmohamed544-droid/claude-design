import React from 'react';

export function Input({
  label,
  hint,
  error,
  size = 'md',
  disabled = false,
  readOnly = false,
  iconLeft = null,
  iconRight = null,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  id,
  name,
  style: extraStyle,
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const SIZES = {
    sm: { height: '32px', fontSize: 'var(--text-sm)', padding: '0 10px', radius: 'var(--radius-sm)' },
    md: { height: '40px', fontSize: 'var(--text-base)', padding: '0 12px', radius: 'var(--radius-md)' },
    lg: { height: '48px', fontSize: 'var(--text-md)', padding: '0 14px', radius: 'var(--radius-lg)' },
  };
  const s = SIZES[size] || SIZES.md;

  const borderColor = error
    ? 'var(--color-coral-500)'
    : focused
    ? 'var(--color-blue-500)'
    : 'var(--color-gray-200)';

  const boxShadow = focused
    ? error
      ? '0 0 0 3px rgba(247,82,38,0.15)'
      : 'var(--focus-ring)'
    : 'none';

  const wrapStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const iconPad = '36px';

  const inputStyle = {
    width: '100%',
    height: s.height,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--font-weight-regular)',
    color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
    background: disabled ? 'var(--color-gray-50)' : readOnly ? 'var(--color-gray-50)' : 'white',
    border: `1px solid ${borderColor}`,
    borderRadius: s.radius,
    padding: s.padding,
    paddingLeft: iconLeft ? iconPad : s.padding.split(' ')[1],
    paddingRight: iconRight ? iconPad : s.padding.split(' ')[1],
    outline: 'none',
    boxShadow,
    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
    cursor: disabled ? 'not-allowed' : 'text',
    boxSizing: 'border-box',
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: focused ? 'var(--color-blue-500)' : 'var(--color-gray-400)',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    fontSize: '16px',
  };

  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '5px', ...extraStyle } },
    label && React.createElement('label', {
      htmlFor: inputId,
      style: {
        fontSize: 'var(--text-sm)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--font-weight-medium)',
        color: error ? 'var(--color-coral-600)' : 'var(--color-text-primary)',
        display: 'flex',
        gap: '3px',
      }
    },
      label,
      required && React.createElement('span', { style: { color: 'var(--color-coral-500)' } }, '*')
    ),
    React.createElement('div', { style: wrapStyle },
      iconLeft && React.createElement('span', { style: { ...iconStyle, left: '10px' } }, iconLeft),
      React.createElement('input', {
        id: inputId,
        name,
        type,
        value,
        onChange,
        placeholder,
        disabled,
        readOnly,
        required,
        style: inputStyle,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
      }),
      iconRight && React.createElement('span', { style: { ...iconStyle, right: '10px' } }, iconRight)
    ),
    (error || hint) && React.createElement('span', {
      style: {
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-sans)',
        color: error ? 'var(--color-coral-600)' : 'var(--color-text-tertiary)',
      }
    }, error || hint)
  );
}
