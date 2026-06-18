import * as React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  leftIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, leftIcon, id, disabled, ...props }, ref) => {
    const inputId = id || React.useId()
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={inputId} className="cyber-label">
            {label}
          </label>
        )}
        <div className={cn('cyber-trigger-wrap', disabled && 'opacity-50 pointer-events-none')}>
          <div className="cyber-trigger-frame">
            <div className="cyber-trigger-inner flex h-12 items-center gap-2 px-4">
              {leftIcon && (
                <span className="shrink-0" style={{ color: 'hsl(var(--cyber-accent, 191 100% 50%) / 0.8)' }}>
                  {leftIcon}
                </span>
              )}
              <input
                id={inputId}
                type={type}
                ref={ref}
                disabled={disabled}
                className={cn(
                  'flex-1 min-w-0 bg-transparent outline-none text-base leading-6 font-medium',
                  'placeholder:text-[hsl(133_22%_36%)]',
                  disabled && 'cursor-not-allowed',
                  className
                )}
                style={{ fontFamily: 'JetBrains Mono', color: 'hsl(133 100% 50%)' }}
                {...props}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
