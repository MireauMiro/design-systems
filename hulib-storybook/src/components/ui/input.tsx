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
          <label
            htmlFor={inputId}
            className={cn(
              'font-bold text-base leading-6 transition-colors',
              disabled ? 'text-[#bbb]' : 'text-[#333]'
            )}
            style={{ fontFamily: 'Public Sans' }}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            'flex items-center gap-2 rounded-2xl px-4 py-3 h-14 transition-shadow',
            disabled
              ? 'bg-[#f5f5f5] border-3 border-[#ddd] cursor-not-allowed'
              : 'bg-white border-3 border-[#333] focus-within:ring-2 focus-within:ring-[#9900ff] focus-within:ring-offset-0'
          )}
        >
          {leftIcon && (
            <span className={cn('shrink-0', disabled ? 'text-[#ccc]' : 'text-[#333]')}>
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            type={type}
            ref={ref}
            disabled={disabled}
            className={cn(
              'flex-1 min-w-0 bg-transparent outline-none text-base leading-6 font-medium placeholder:text-[#bbb]',
              disabled ? 'text-[#bbb] cursor-not-allowed' : 'text-[#333]',
              className
            )}
            style={{ fontFamily: 'Public Sans' }}
            {...props}
          />
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
