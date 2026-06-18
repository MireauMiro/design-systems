import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  label?: string
  className?: string
}

function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  label,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={cn('flex flex-col gap-2', className)} style={{ fontFamily: 'JetBrains Mono' }}>
      {label && (
        <label className="cyber-label">{label}</label>
      )}
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <div className="cyber-trigger-wrap">
          <div className="cyber-trigger-frame">
            <PopoverPrimitive.Trigger asChild>
              <button
                type="button"
                className="cyber-trigger-inner flex h-12 w-full items-center gap-3 px-4 font-medium text-base leading-6 focus:outline-none cursor-pointer"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                <CalendarIcon className="size-5 shrink-0" style={{ color: 'hsl(var(--cyber-accent, 191 100% 50%) / 0.8)' }} />
                <span className={value ? 'text-[hsl(133_70%_58%)]' : 'text-[hsl(133_22%_36%)]'}>
                  {value ? format(value, 'MMMM d, yyyy') : placeholder}
                </span>
              </button>
            </PopoverPrimitive.Trigger>
          </div>
        </div>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            alignOffset={-2}
            sideOffset={4}
            className="cyber-panel z-50 outline-none"
            style={{ '--cyber-corner': '12px' } as React.CSSProperties}
          >
            <div className="cyber-panel__frame">
              <div className="cyber-panel__inner">
                <Calendar
                  mode="single"
                  selected={value}
                  onSelect={(date) => {
                    onChange?.(date)
                    setOpen(false)
                  }}
                  defaultMonth={value ?? new Date()}
                />
              </div>
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}

export { DatePicker }
export type { DatePickerProps }
