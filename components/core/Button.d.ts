/**
 * Button — primary interactive action trigger.
 * Use for all CTA, submit, and action elements.
 *
 * @example
 * ```jsx
 * <Button variant="primary" size="md" onClick={() => {}}>Get started</Button>
 * <Button variant="outline" size="sm" iconLeft={<ArrowLeft />}>Back</Button>
 * <Button variant="secondary" loading>Saving…</Button>
 * ```
 *
 * Variants: primary · secondary · outline · ghost · danger
 * Sizes: sm (32px) · md (40px) · lg (48px)
 * @startingPoint section="Components" subtitle="5 variants · 3 sizes · icon support · loading state" viewport="700x280"
 */
export interface ButtonProps {
  /** Visual treatment */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Height and padding */
  size?: 'sm' | 'md' | 'lg';
  /** Disables interaction and dims the button */
  disabled?: boolean;
  /** Shows a spinner and disables interaction */
  loading?: boolean;
  /** Icon element rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label */
  iconRight?: React.ReactNode;
  /** Stretches to full container width */
  fullWidth?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
