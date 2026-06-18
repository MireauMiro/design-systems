import * as React from 'react'
import { cn } from '@/lib/utils'

// Per-variant neon accent (H S L triplet for --cyber-accent)
const alertAccent = {
  info:        '191 100% 50%',
  success:     '133 100% 50%',
  warning:     '45 100% 55%',
  destructive: '346 100% 58%',
  default:     '191 100% 50%',
}

type AlertVariant = keyof typeof alertAccent

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn('cyber-panel', className)}
      style={{ '--cyber-accent': alertAccent[variant], '--cyber-corner': '12px' } as React.CSSProperties}
      {...props}
    >
      <div className="cyber-panel__frame">
        <div className="cyber-panel__inner relative flex flex-col gap-1.5 p-4">{children}</div>
      </div>
    </div>
  )
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('flex items-center gap-2 text-base font-bold uppercase tracking-wider', className)}
      style={{ fontFamily: 'JetBrains Mono', color: 'hsl(var(--cyber-accent))', textShadow: '0 0 10px hsl(var(--cyber-accent) / 0.5)' }}
      {...props}
    />
  )
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-xs font-normal leading-[18px]', className)}
      style={{ fontFamily: 'JetBrains Mono', color: 'hsl(133 35% 62%)' }}
      {...props}
    />
  )
)
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
