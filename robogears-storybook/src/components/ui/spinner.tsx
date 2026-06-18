import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const spinnerVariants = cva('inline-block rounded-full shrink-0', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-10',
      xl: 'size-16',
    },
  },
  defaultVariants: { size: 'md' },
})

const BORDER: Record<string, number> = { sm: 2, md: 3, lg: 4, xl: 5 }

const TRACK: Record<string, string> = {
  purple: 'rgba(0,212,255,0.15)',
  black:  'rgba(0,255,65,0.15)',
  white:  'rgba(255,255,255,0.25)',
}

const ACTIVE: Record<string, string> = {
  purple: '#00D4FF',
  black:  '#00FF41',
  white:  '#fff',
}

interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  color?: 'purple' | 'black' | 'white'
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', color = 'purple', className, ...props }, ref) => {
    const s = size ?? 'md'
    const c = color ?? 'purple'
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(spinnerVariants({ size }), className)}
        style={{
          border: `${BORDER[s]}px solid ${TRACK[c]}`,
          borderTopColor: ACTIVE[c],
          animation: 'robogears-spin 1.125s linear infinite',
        }}
        {...props}
      >
        <span className="sr-only">Loading…</span>
      </div>
    )
  }
)
Spinner.displayName = 'Spinner'

export { Spinner }
export type { SpinnerProps }
