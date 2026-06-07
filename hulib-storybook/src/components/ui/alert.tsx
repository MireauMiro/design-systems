import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertConfig = {
  info:        { bg: '#98d4ff', light: '#def1ff', border: '#98d4ff' },
  success:     { bg: '#98ffb2', light: '#e4ffde', border: '#98ffb2' },
  warning:     { bg: '#ffe098', light: '#fffede', border: '#ffe098' },
  destructive: { bg: '#ff9898', light: '#ffdede', border: '#ff9898' },
  default:     { bg: '#98d4ff', light: '#def1ff', border: '#98d4ff' },
}

type AlertVariant = keyof typeof alertConfig

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const c = alertConfig[variant]
    return (
      <div
        ref={ref}
        role="alert"
        className={cn('relative flex flex-col overflow-hidden rounded-[12px] border-4', className)}
        style={{ background: c.bg, borderColor: c.bg, fontFamily: 'Public Sans' }}
        {...props}
      >
        {/* Light inner section */}
        <div
          className="flex flex-col gap-2 p-4 rounded-[12px] border-b-4"
          style={{ background: c.light, borderColor: c.border }}
        >
          {children}
        </div>
        {/* Bottom shadow strip */}
        <div className="h-2 shrink-0" style={{ background: c.bg }} />
      </div>
    )
  }
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('font-semibold text-2xl leading-6 text-black flex items-center gap-2', className)}
      style={{ fontFamily: 'Public Sans' }}
      {...props}
    />
  )
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-xs font-normal leading-[18px] text-black pl-8', className)}
      style={{ fontFamily: 'Public Sans' }}
      {...props}
    />
  )
)
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
