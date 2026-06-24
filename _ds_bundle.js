/* @ds-bundle: {"format":3,"namespace":"PureMindsDesignSystem_f985d7","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"7e6f93406293","components/core/Badge.jsx":"3a165addf9f0","components/core/Button.jsx":"599c59967da3","components/core/Card.jsx":"96b6cf28a371","components/core/Input.jsx":"e03137d9222c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PureMindsDesignSystem_f985d7 = window.PureMindsDesignSystem_f985d7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  xs: {
    size: '24px',
    font: '9px',
    border: '1.5px'
  },
  sm: {
    size: '32px',
    font: '12px',
    border: '2px'
  },
  md: {
    size: '40px',
    font: '15px',
    border: '2px'
  },
  lg: {
    size: '48px',
    font: '18px',
    border: '2px'
  },
  xl: {
    size: '64px',
    font: '24px',
    border: '3px'
  }
};
const BG_COLORS = ['var(--color-navy-700)', 'var(--color-blue-500)', 'var(--color-teal-500)', 'var(--color-amber-500)', 'var(--color-coral-500)', 'var(--color-navy-500)'];
function getColorFromName(name) {
  if (!name) return BG_COLORS[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return BG_COLORS[Math.abs(hash) % BG_COLORS.length];
}
function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  name,
  src,
  size = 'md',
  shape = 'circle',
  status,
  style: extraStyle
}) {
  const [imgError, setImgError] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const containerStyle = {
    position: 'relative',
    display: 'inline-flex',
    flexShrink: 0,
    width: s.size,
    height: s.size,
    ...extraStyle
  };
  const avatarStyle = {
    width: s.size,
    height: s.size,
    borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? 'var(--radius-md)' : 'var(--radius-sm)',
    background: getColorFromName(name),
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: s.font,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--font-weight-medium)',
    overflow: 'hidden',
    border: `${s.border} solid rgba(255,255,255,0.15)`,
    flexShrink: 0,
    userSelect: 'none'
  };
  const STATUS_COLORS = {
    online: 'var(--color-teal-500)',
    offline: 'var(--color-gray-400)',
    busy: 'var(--color-coral-500)',
    away: 'var(--color-amber-500)'
  };
  const dotSize = parseInt(s.size) <= 32 ? '8px' : '10px';
  return React.createElement('div', {
    style: containerStyle
  }, React.createElement('div', {
    style: avatarStyle
  }, src && !imgError ? React.createElement('img', {
    src,
    alt: name || 'Avatar',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'inherit'
    },
    onError: () => setImgError(true)
  }) : React.createElement('span', null, getInitials(name))), status && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: '0',
      right: '0',
      width: dotSize,
      height: dotSize,
      borderRadius: '50%',
      background: STATUS_COLORS[status] || STATUS_COLORS.offline,
      border: '2px solid white'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const VARIANTS = {
  default: {
    bg: 'var(--color-gray-100)',
    color: 'var(--color-gray-700)'
  },
  primary: {
    bg: 'var(--color-navy-900)',
    color: '#fff'
  },
  blue: {
    bg: 'var(--color-blue-100)',
    color: 'var(--color-blue-600)'
  },
  success: {
    bg: 'var(--color-teal-100)',
    color: 'var(--color-teal-600)'
  },
  warning: {
    bg: 'var(--color-amber-100)',
    color: 'var(--color-amber-600)'
  },
  danger: {
    bg: 'var(--color-coral-100)',
    color: 'var(--color-coral-600)'
  },
  outline: {
    bg: 'transparent',
    color: 'var(--color-gray-600)',
    border: '1px solid var(--color-gray-300)'
  }
};
const SIZES = {
  sm: {
    fontSize: 'var(--text-xs)',
    padding: '2px 8px',
    height: '20px',
    radius: 'var(--radius-sm)'
  },
  md: {
    fontSize: 'var(--text-xs)',
    padding: '3px 10px',
    height: '24px',
    radius: 'var(--radius-sm)'
  },
  lg: {
    fontSize: 'var(--text-sm)',
    padding: '4px 12px',
    height: '28px',
    radius: 'var(--radius-md)'
  }
};
function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  style: extraStyle
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  const s = SIZES[size] || SIZES.md;
  return React.createElement('span', {
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
      ...extraStyle
    }
  }, dot && React.createElement('span', {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: v.color,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    background: 'var(--color-navy-900)',
    color: '#fff',
    border: 'none',
    hoverBg: 'var(--color-navy-800)',
    activeBg: 'var(--color-navy-950)'
  },
  secondary: {
    background: 'var(--color-blue-500)',
    color: '#fff',
    border: 'none',
    hoverBg: 'var(--color-blue-600)',
    activeBg: 'var(--color-blue-600)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-navy-900)',
    border: '1.5px solid var(--color-navy-900)',
    hoverBg: 'var(--color-navy-50)',
    activeBg: 'var(--color-navy-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-navy-900)',
    border: 'none',
    hoverBg: 'var(--color-gray-100)',
    activeBg: 'var(--color-gray-200)'
  },
  danger: {
    background: 'var(--color-coral-500)',
    color: '#fff',
    border: 'none',
    hoverBg: 'var(--color-coral-600)',
    activeBg: 'var(--color-coral-600)'
  }
};
const SIZES = {
  sm: {
    padding: '0 12px',
    height: '32px',
    fontSize: 'var(--text-sm)',
    gap: '6px',
    iconSize: '14px',
    radius: 'var(--radius-sm)'
  },
  md: {
    padding: '0 16px',
    height: '40px',
    fontSize: 'var(--text-base)',
    gap: '8px',
    iconSize: '16px',
    radius: 'var(--radius-md)'
  },
  lg: {
    padding: '0 24px',
    height: '48px',
    fontSize: 'var(--text-md)',
    gap: '10px',
    iconSize: '18px',
    radius: 'var(--radius-lg)'
  }
};
function Button({
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
  style: extraStyle
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
    border: disabled ? '1.5px solid var(--color-gray-200)' : v.border || 'none',
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
    ...extraStyle
  };
  if (hovered && !disabled && !active) {
    baseStyle.boxShadow = 'var(--shadow-sm)';
  }
  return React.createElement('button', {
    type,
    disabled: disabled || loading,
    style: baseStyle,
    onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, loading && React.createElement('span', {
    style: {
      width: s.iconSize,
      height: s.iconSize,
      border: `2px solid ${variant === 'outline' || variant === 'ghost' ? 'var(--color-navy-300)' : 'rgba(255,255,255,0.3)'}`,
      borderTopColor: variant === 'outline' || variant === 'ghost' ? 'var(--color-navy-900)' : '#fff',
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
      flexShrink: 0
    }
  }), !loading && iconLeft && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: s.iconSize,
      lineHeight: 1,
      flexShrink: 0
    }
  }, iconLeft), children, !loading && iconRight && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: s.iconSize,
      lineHeight: 1,
      flexShrink: 0
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  padding = 'md',
  radius = 'lg',
  shadow = 'md',
  hoverable = false,
  bordered = false,
  background = 'white',
  children,
  onClick,
  style: extraStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const PADDINGS = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const SHADOWS = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const RADII = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)'
  };
  const baseStyle = {
    background,
    borderRadius: RADII[radius] || RADII.lg,
    padding: PADDINGS[padding] || PADDINGS.md,
    boxShadow: hoverable && hovered ? 'var(--shadow-lg)' : SHADOWS[shadow] || SHADOWS.md,
    border: bordered ? '1px solid var(--color-border-default)' : 'none',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
    transform: hoverable && hovered ? 'translateY(-2px)' : 'translateY(0)',
    ...extraStyle
  };
  return React.createElement('div', {
    style: baseStyle,
    onClick,
    onMouseEnter: hoverable ? () => setHovered(true) : undefined,
    onMouseLeave: hoverable ? () => setHovered(false) : undefined
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
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
  style: extraStyle
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const SIZES = {
    sm: {
      height: '32px',
      fontSize: 'var(--text-sm)',
      padding: '0 10px',
      radius: 'var(--radius-sm)'
    },
    md: {
      height: '40px',
      fontSize: 'var(--text-base)',
      padding: '0 12px',
      radius: 'var(--radius-md)'
    },
    lg: {
      height: '48px',
      fontSize: 'var(--text-md)',
      padding: '0 14px',
      radius: 'var(--radius-lg)'
    }
  };
  const s = SIZES[size] || SIZES.md;
  const borderColor = error ? 'var(--color-coral-500)' : focused ? 'var(--color-blue-500)' : 'var(--color-gray-200)';
  const boxShadow = focused ? error ? '0 0 0 3px rgba(247,82,38,0.15)' : 'var(--focus-ring)' : 'none';
  const wrapStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
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
    boxSizing: 'border-box'
  };
  const iconStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: focused ? 'var(--color-blue-500)' : 'var(--color-gray-400)',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    fontSize: '16px'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      ...extraStyle
    }
  }, label && React.createElement('label', {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--font-weight-medium)',
      color: error ? 'var(--color-coral-600)' : 'var(--color-text-primary)',
      display: 'flex',
      gap: '3px'
    }
  }, label, required && React.createElement('span', {
    style: {
      color: 'var(--color-coral-500)'
    }
  }, '*')), React.createElement('div', {
    style: wrapStyle
  }, iconLeft && React.createElement('span', {
    style: {
      ...iconStyle,
      left: '10px'
    }
  }, iconLeft), React.createElement('input', {
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
    onBlur: () => setFocused(false)
  }), iconRight && React.createElement('span', {
    style: {
      ...iconStyle,
      right: '10px'
    }
  }, iconRight)), (error || hint) && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      color: error ? 'var(--color-coral-600)' : 'var(--color-text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
