import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { ArrowRight } from './Icons'

type Variant = 'green' | 'black' | 'secondary'
type Size = 'sm' | 'md'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  children: ReactNode
}

export function Button({
  variant = 'green',
  size = 'sm',
  icon,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`act-btn act-btn--${variant} act-btn--${size}`}
      {...rest}
    >
      <span className="act-btn__label">{children}</span>
      <span className="act-btn__icon" aria-hidden="true">
        {icon ?? <ArrowRight />}
      </span>
    </button>
  )
}
