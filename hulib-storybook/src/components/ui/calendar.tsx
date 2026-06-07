import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'
import { cn } from '@/lib/utils'

function HulibDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <button
      ref={ref}
      className={cn(
        'flex w-full h-full items-center justify-center rounded-full text-sm font-medium transition-colors cursor-pointer',
        modifiers.selected
          ? 'bg-[#9900ff] text-white hover:bg-[#8800e0]'
          : modifiers.today
          ? 'text-[#9900ff] font-bold hover:bg-[#9900ff]/10'
          : 'text-[#333] hover:bg-[#9900ff]/10',
        (modifiers.outside) && !modifiers.selected && 'text-[#ccc]',
        modifiers.disabled && 'opacity-30 cursor-not-allowed pointer-events-none',
        className
      )}
      {...props}
    />
  )
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-4 [--cell-size:2.25rem]', className)}
      style={{ fontFamily: 'Public Sans' }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('relative flex flex-col gap-4', defaultClassNames.months),
        month: cn('flex flex-col gap-3', defaultClassNames.month),
        nav: cn(
          'absolute inset-x-0 top-0 flex items-center justify-between',
          defaultClassNames.nav
        ),
        button_previous: cn(
          'size-[--cell-size] inline-flex items-center justify-center rounded-full',
          'hover:bg-[#9900ff]/10 text-[#333] transition-colors cursor-pointer',
          'disabled:opacity-30 disabled:cursor-not-allowed',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          'size-[--cell-size] inline-flex items-center justify-center rounded-full',
          'hover:bg-[#9900ff]/10 text-[#333] transition-colors cursor-pointer',
          'disabled:opacity-30 disabled:cursor-not-allowed',
          defaultClassNames.button_next
        ),
        month_caption: cn(
          'flex h-[--cell-size] items-center justify-center',
          defaultClassNames.month_caption
        ),
        caption_label: cn('text-sm font-bold text-[#333]', defaultClassNames.caption_label),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'w-[--cell-size] text-xs text-center font-medium text-[#999] pb-1',
          defaultClassNames.weekday
        ),
        week: cn('flex mt-1', defaultClassNames.week),
        day: cn(
          'relative size-[--cell-size] p-0',
          defaultClassNames.day
        ),
        outside: defaultClassNames.outside,
        disabled: defaultClassNames.disabled,
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          if (orientation === 'left')  return <ChevronLeftIcon className="size-4" />
          if (orientation === 'right') return <ChevronRightIcon className="size-4" />
          return null
        },
        DayButton: HulibDayButton,
      }}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'
export { Calendar }
