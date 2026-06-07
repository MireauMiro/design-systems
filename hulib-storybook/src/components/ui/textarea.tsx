import * as React from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    const textareaId = id || React.useId()
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="font-bold text-base leading-6 text-[#333]"
            style={{ fontFamily: 'Public Sans' }}
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            'bg-white border-3 border-[#333] rounded-2xl px-4 py-3 text-base font-medium text-[#333] placeholder:text-[#bbb] leading-6 outline-none min-h-[120px] resize-y focus:ring-2 focus:ring-[#9900ff] transition-shadow',
            className
          )}
          style={{ fontFamily: 'Public Sans' }}
          {...props}
        />
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
