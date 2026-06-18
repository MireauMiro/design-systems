import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from 'cmdk'
import { CheckIcon, ChevronDownIcon, XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export type ComboboxOption = { value: string; label: string }

// ─── Trigger button ──────────────────────────────────────────────────────────

const TriggerButton = React.forwardRef<
  HTMLButtonElement,
  { open: boolean; hasValue: boolean; label: string; placeholder: string }
>(({ open, hasValue, label, placeholder, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className="cyber-trigger-inner flex h-12 w-full items-center justify-between gap-2 px-4 font-medium text-base leading-6 focus:outline-none cursor-pointer"
    style={{ fontFamily: 'JetBrains Mono' }}
    {...props}
  >
    <span className={hasValue ? 'text-[hsl(133_70%_58%)]' : 'text-[hsl(133_22%_36%)]'}>
      {hasValue ? label : placeholder}
    </span>
    <ChevronDownIcon className={cn('size-5 shrink-0 text-[hsl(191_100%_50%/0.8)] transition-transform duration-200', open && 'rotate-180')} />
  </button>
))
TriggerButton.displayName = 'TriggerButton'

// ─── Search input row ────────────────────────────────────────────────────────

const SearchInput = ({ value, onValueChange }: { value: string; onValueChange: (v: string) => void }) => (
  <div className="border-b border-[hsl(191_100%_50%/0.18)] px-3 py-2">
    <CommandInput
      value={value}
      onValueChange={onValueChange}
      placeholder="Type to search…"
      className="w-full bg-transparent text-base text-[hsl(133_70%_58%)] placeholder:text-[hsl(133_22%_36%)] outline-none"
      style={{ fontFamily: 'JetBrains Mono' }}
    />
  </div>
)

// ─── Dropdown content panel ──────────────────────────────────────────────────

const DropdownPanel = ({ children }: { children: React.ReactNode }) => (
  <div className="cyber-panel__frame w-full">
    <div className="cyber-panel__inner overflow-hidden">
      {children}
    </div>
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
    <div className={cn('flex flex-col gap-2', className)} style={{ fontFamily: 'JetBrains Mono' }}>
      {label && <label className="cyber-label">{label}</label>}
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <div className="cyber-trigger-wrap w-full">
          <div className="cyber-trigger-frame">
            <PopoverPrimitive.Trigger asChild>
              <TriggerButton open={open} hasValue={!!selected} label={selected?.label ?? ''} placeholder={placeholder} />
            </PopoverPrimitive.Trigger>
          </div>
        </div>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className="cyber-panel z-50"
            style={{ '--cyber-corner': '12px', width: 'calc(var(--radix-popover-trigger-width) + 4px)' } as React.CSSProperties}
            align="start"
            alignOffset={-2}
            sideOffset={4}
          >
            <DropdownPanel>
              <Command shouldFilter={false}>
                <SearchInput value={search} onValueChange={setSearch} />
                <CommandList className="max-h-60 overflow-y-auto p-1">
                  <CommandEmpty className="py-6 text-center text-sm text-[hsl(133_30%_45%)]" style={{ fontFamily: 'JetBrains Mono' }}>
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
                      className={cn(
                        'relative flex cursor-pointer select-none items-center rounded-[8px] py-2 px-3',
                        'text-base font-medium text-[hsl(133_70%_58%)] outline-none',
                        'data-[selected=true]:bg-[#00D4FF]/10',
                        value === option.value && 'text-[#00D4FF] font-bold'
                      )}
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      <span className="flex size-4 shrink-0 items-center justify-center mr-2">
                        {value === option.value && <CheckIcon className="size-4 text-[#00D4FF]" />}
                      </span>
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </DropdownPanel>
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
    <div className={cn('flex flex-col gap-2', className)} style={{ fontFamily: 'JetBrains Mono' }}>
      {label && <label className="cyber-label">{label}</label>}
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <div className="cyber-trigger-wrap w-full">
          <div className="cyber-trigger-frame">
            <PopoverPrimitive.Trigger asChild>
              <TriggerButton open={open} hasValue={value.length > 0} label={triggerLabel} placeholder={placeholder} />
            </PopoverPrimitive.Trigger>
          </div>
        </div>
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
                    className="rounded-full hover:bg-[hsl(191_100%_50%/0.12)] p-0.5 transition-colors cursor-pointer"
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
          <PopoverPrimitive.Content
            className="cyber-panel z-50"
            style={{ '--cyber-corner': '12px', width: 'calc(var(--radix-popover-trigger-width) + 4px)' } as React.CSSProperties}
            align="start"
            alignOffset={-2}
            sideOffset={4}
          >
            <DropdownPanel>
              <Command shouldFilter={false}>
                <SearchInput value={search} onValueChange={setSearch} />
                <CommandList className="max-h-60 overflow-y-auto p-1">
                  <CommandEmpty className="py-6 text-center text-sm text-[hsl(133_30%_45%)]" style={{ fontFamily: 'JetBrains Mono' }}>
                    No results found.
                  </CommandEmpty>
                  {filtered.map(option => {
                    const checked = value.includes(option.value)
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={() => toggle(option.value)}
                        className="relative flex cursor-pointer select-none items-center rounded-[8px] py-2 px-3 text-base font-medium text-[hsl(133_70%_58%)] outline-none data-[selected=true]:bg-[#00D4FF]/10"
                        style={{ fontFamily: 'JetBrains Mono' }}
                      >
                        <div className={cn(
                          'flex size-4 shrink-0 items-center justify-center rounded-[4px] border-2 mr-2 transition-colors',
                          checked ? 'bg-[#00D4FF] border-[#00D4FF]' : 'border-[hsl(191_100%_50%/0.5)]'
                        )}>
                          {checked && <CheckIcon className="size-3 text-[#05121a]" />}
                        </div>
                        <span className={checked ? 'font-semibold text-[#00D4FF]' : ''}>{option.label}</span>
                      </CommandItem>
                    )
                  })}
                </CommandList>
                {value.length > 0 && (
                  <div className="border-t border-[hsl(191_100%_50%/0.18)] px-3 py-2 flex justify-between items-center">
                    <span className="text-sm text-[hsl(133_30%_45%)]" style={{ fontFamily: 'JetBrains Mono' }}>{value.length} selected</span>
                    <button
                      onClick={() => onChange?.([])}
                      className="text-sm text-[hsl(133_30%_45%)] hover:text-[hsl(133_70%_58%)] transition-colors cursor-pointer underline"
                      style={{ fontFamily: 'JetBrains Mono' }}
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </Command>
            </DropdownPanel>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  )
}

export { Combobox, MultiCombobox }
