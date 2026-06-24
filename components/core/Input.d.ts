/**
 * Input — single-line text input with label, hint, and error state.
 *
 * @example
 * ```jsx
 * <Input label="Email" type="email" placeholder="you@example.com" required />
 * <Input label="Amount" size="lg" iconLeft="﷼" hint="Enter amount in SAR" />
 * <Input label="Phone" error="Invalid phone number" value={phone} onChange={e => setPhone(e.target.value)} />
 * ```
 */
export interface InputProps {
  /** Field label displayed above the input */
  label?: string;
  /** Hint text below the input */
  hint?: string;
  /** Error message — replaces hint and applies error styling */
  error?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  readOnly?: boolean;
  /** Icon rendered inside the left edge */
  iconLeft?: React.ReactNode;
  /** Icon rendered inside the right edge */
  iconRight?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  id?: string;
  name?: string;
  style?: React.CSSProperties;
}
