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
    <div className={cn('flex flex-col gap-2', className)} style={{ fontFamily: 'Public Sans' }}>
      {label && (
        <label className="font-bold text-base leading-6 text-[#333]">{label}</label>
      )}
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            type="button"
            className={cn(
              'flex h-14 w-full items-center gap-3 bg-white border-3 border-[#333] rounded-2xl px-4',
              'font-medium text-base leading-6 outline-none transition-shadow cursor-pointer',
              'focus:ring-2 focus:ring-[#9900ff]',
              open && 'ring-2 ring-[#9900ff]'
            )}
            style={{ fontFamily: 'Public Sans' }}
          >
            <CalendarIcon className="size-5 shrink-0 text-[#333]" />
            <span className={value ? 'text-[#333]' : 'text-[#bbb]'}>
              {value ? format(value, 'MMMM d, yyyy') : placeholder}
            </span>
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={4}
            className="z-50 rounded-[12px] border-3 border-[#333] bg-white shadow-lg outline-none"
          >
            <Calendar
              mode="single"
              selected={value}
              onSelect={(date) => {
                onChange?.(date)
                setOpen(false)
              }}
              defaultMonth={value ?? new Date()}
            />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}

export { DatePicker }
export type { DatePickerProps }
