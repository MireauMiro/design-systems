import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from 'cmdk'
import { CheckIcon, ChevronDownIcon, XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export type ComboboxOption = { value: string; label: string }

// ─── Shared dropdown panel styles ───────────────────────────────────────────

const dropdownContentClass = [
  'z-50 w-[var(--radix-popover-trigger-width)] overflow-hidden',
  'rounded-[12px] border-3 border-[#333] bg-white shadow-lg',
].join(' ')

const itemClass = [
  'relative flex cursor-pointer select-none items-center rounded-[8px]',
  'py-2 px-3 text-base font-medium text-[#333] outline-none',
  'data-[selected=true]:bg-[#9900ff]/10',
].join(' ')

// ─── Trigger button ──────────────────────────────────────────────────────────

const TriggerButton = React.forwardRef<
  HTMLButtonElement,
  { open: boolean; hasValue: boolean; label: string; placeholder: string }
>(({ open, hasValue, label, placeholder, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      'flex h-14 w-full items-center justify-between gap-2 bg-white border-3 border-[#333] rounded-2xl px-4 py-3',
      'font-medium text-base leading-6 focus:outline-none focus:ring-2 focus:ring-[#9900ff] transition-shadow cursor-pointer',
      open && 'ring-2 ring-[#9900ff]'
    )}
    style={{ fontFamily: 'Public Sans' }}
    {...props}
  >
    <span className={hasValue ? 'text-[#333]' : 'text-[#bbb]'}>{hasValue ? label : placeholder}</span>
    <ChevronDownIcon className={cn('size-5 shrink-0 text-[#333] transition-transform duration-200', open && 'rotate-180')} />
  </button>
))
TriggerButton.displayName = 'TriggerButton'

// ─── Search input row ────────────────────────────────────────────────────────

const SearchInput = ({ value, onValueChange }: { value: string; onValueChange: (v: string) => void }) => (
  <div className="border-b border-[#333]/20 px-3 py-2">
    <CommandInput
      value={value}
      onValueChange={onValueChange}
      placeholder="Type to search…"
      className="w-full bg-transparent text-base text-[#333] placeholder:text-[#bbb] outline-none"
      style={{ fontFamily: 'Public Sans' }}
    />
  </div>
)

// ─── Single-select Combobox ───────────────────────────────────────────────────

interface ComboboxProps {
  options: ComboboxOption[]
  placeholder?: string
  label?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

const Combobox = ({ options, placeholder = 'Select an option…', label, value, onChange, className }: ComboboxProps) => {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const selected = options.find(o => o.value === value)
  const filtered = search
    ? options.filter(o => o.label.toLowerCase().includes(search.toLowerCase()))
    : options

  return (
    <div className={cn('flex flex-col gap-2', className)} style={{ fontFamily: 'Public Sans' }}>
      {label && <label className="font-bold text-base leading-6 text-[#333]">{label}</label>}
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <TriggerButton open={open} hasValue={!!selected} label={selected?.label ?? ''} placeholder={placeholder} />
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content className={dropdownContentClass} align="start" sideOffset={4}>
            <Command shouldFilter={false}>
              <SearchInput value={search} onValueChange={setSearch} />
              <CommandList className="max-h-60 overflow-y-auto p-1">
                <CommandEmpty className="py-6 text-center text-sm text-[#999]" style={{ fontFamily: 'Public Sans' }}>
                  No results found.
                </CommandEmpty>
                {filtered.map(option => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => {
                      onChange?.(option.value)
                      setOpen(false)
                      setSearch('')
                    }}
                    className={cn(itemClass, value === option.value && 'text-[#9900ff] font-bold')}
                    style={{ fontFamily: 'Public Sans' }}
                  >
                    <span className="flex size-4 shrink-0 items-center justify-center mr-2">
                      {value === option.value && <CheckIcon className="size-4 text-[#9900ff]" />}
                    </span>
                    {option.label}
                  </CommandItem>
                ))}
              </CommandList>
            </Command>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}

// ─── Multi-select Combobox ────────────────────────────────────────────────────

interface MultiComboboxProps {
  options: ComboboxOption[]
  placeholder?: string
  label?: string
  value?: string[]
  onChange?: (value: string[]) => void
  className?: string
}

const MultiCombobox = ({ options, placeholder = 'Select options…', label, value = [], onChange, className }: MultiComboboxProps) => {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const filtered = search
    ? options.filter(o => o.label.toLowerCase().includes(search.toLowerCase()))
    : options

  const toggle = (optValue: string) => {
    onChange?.(
      value.includes(optValue) ? value.filter(v => v !== optValue) : [...value, optValue]
    )
  }

  const triggerLabel =
    value.length === 0 ? '' :
    value.length === 1 ? (options.find(o => o.value === value[0])?.label ?? '') :
    `${value.length} selected`

  return (
    <div className={cn('flex flex-col gap-2', className)} style={{ fontFamily: 'Public Sans' }}>
      {label && <label className="font-bold text-base leading-6 text-[#333]">{label}</label>}
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <TriggerButton open={open} hasValue={value.length > 0} label={triggerLabel} placeholder={placeholder} />
        </PopoverPrimitive.Trigger>
        {value.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {value.map(v => {
              const opt = options.find(o => o.value === v)
              if (!opt) return null
              return (
                <Badge key={v} variant="outline" className="gap-1.5 pr-1.5">
                  {opt.label}
                  <button
                    type="button"
                    onClick={() => toggle(v)}
                    className="rounded-full hover:bg-[#333]/10 p-0.5 transition-colors cursor-pointer"
                    aria-label={`Remove ${opt.label}`}
                  >
                    <XIcon className="size-3" />
                  </button>
                </Badge>
              )
            })}
          </div>
        )}
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content className={dropdownContentClass} align="start" sideOffset={4}>
            <Command shouldFilter={false}>
              <SearchInput value={search} onValueChange={setSearch} />
              <CommandList className="max-h-60 overflow-y-auto p-1">
                <CommandEmpty className="py-6 text-center text-sm text-[#999]" style={{ fontFamily: 'Public Sans' }}>
                  No results found.
                </CommandEmpty>
                {filtered.map(option => {
                  const checked = value.includes(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => toggle(option.value)}
                      className={itemClass}
                      style={{ fontFamily: 'Public Sans' }}
                    >
                      <div className={cn(
                        'flex size-4 shrink-0 items-center justify-center rounded-[4px] border-2 mr-2 transition-colors',
                        checked ? 'bg-[#9900ff] border-[#9900ff]' : 'border-[#333]'
                      )}>
                        {checked && <CheckIcon className="size-3 text-white" />}
                      </div>
                      <span className={checked ? 'font-semibold text-[#9900ff]' : ''}>{option.label}</span>
                    </CommandItem>
                  )
                })}
              </CommandList>
              {value.length > 0 && (
                <div className="border-t border-[#333]/20 px-3 py-2 flex justify-between items-center">
                  <span className="text-sm text-[#999]" style={{ fontFamily: 'Public Sans' }}>{value.length} selected</span>
                  <button
                    onClick={() => onChange?.([])}
                    className="text-sm text-[#999] hover:text-[#333] transition-colors cursor-pointer underline"
                    style={{ fontFamily: 'Public Sans' }}
                  >
                    Clear all
                  </button>
                </div>
              )}
            </Command>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}

export { Combobox, MultiCombobox }
