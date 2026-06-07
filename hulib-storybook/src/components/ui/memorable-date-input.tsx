import * as React from 'react'
import { cn } from '@/lib/utils'

interface MemorableDateValue {
  month: string
  day: string
  year: string
}

interface MemorableDateInputProps {
  value?: MemorableDateValue
  onChange?: (value: MemorableDateValue) => void
  label?: string
  className?: string
}

function MemorableDateInput({ value, onChange, label, className }: MemorableDateInputProps) {
  const [internal, setInternal] = React.useState<MemorableDateValue>(
    value ?? { month: '', day: '', year: '' }
  )
  const state = value ?? internal

  const monthRef = React.useRef<HTMLInputElement>(null)
  const dayRef   = React.useRef<HTMLInputElement>(null)
  const yearRef  = React.useRef<HTMLInputElement>(null)

  const update = (field: keyof MemorableDateValue, val: string) => {
    const next = { ...state, [field]: val }
    setInternal(next)
    onChange?.(next)
  }

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 2)
    update('month', digits)
    if (digits.length === 2) dayRef.current?.focus()
  }

  const handleDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 2)
    update('day', digits)
    if (digits.length === 2) yearRef.current?.focus()
  }

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 4)
    update('year', digits)
  }

  const handleKeyDown = (
    field: keyof MemorableDateValue,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && state[field] === '') {
      if (field === 'day')  monthRef.current?.focus()
      if (field === 'year') dayRef.current?.focus()
    }
  }

  const fieldBase =
    'bg-transparent outline-none font-medium text-[#333] placeholder:text-[#bbb] text-center'

  return (
    <div className={cn('flex flex-col gap-2', className)} style={{ fontFamily: 'Public Sans' }}>
      {label && (
        <label className="font-bold text-base leading-6 text-[#333]">{label}</label>
      )}
      <div className="flex h-14 items-center bg-white border-3 border-[#333] rounded-2xl px-4 focus-within:ring-2 focus-within:ring-[#9900ff] transition-shadow">
        <input
          ref={monthRef}
          type="text"
          inputMode="numeric"
          maxLength={2}
          placeholder="MM"
          value={state.month}
          onChange={handleMonth}
          onKeyDown={(e) => handleKeyDown('month', e)}
          className={cn(fieldBase, 'w-8')}
        />
        <span className="text-[#999] select-none px-1">/</span>
        <input
          ref={dayRef}
          type="text"
          inputMode="numeric"
          maxLength={2}
          placeholder="DD"
          value={state.day}
          onChange={handleDay}
          onKeyDown={(e) => handleKeyDown('day', e)}
          className={cn(fieldBase, 'w-8')}
        />
        <span className="text-[#999] select-none px-1">/</span>
        <input
          ref={yearRef}
          type="text"
          inputMode="numeric"
          maxLength={4}
          placeholder="YYYY"
          value={state.year}
          onChange={handleYear}
          onKeyDown={(e) => handleKeyDown('year', e)}
          className={cn(fieldBase, 'w-14')}
        />
      </div>
    </div>
  )
}

export { MemorableDateInput }
export type { MemorableDateInputProps, MemorableDateValue }
