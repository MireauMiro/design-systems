import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & { label?: string }
>(({ className, children, label, ...props }, ref) => (
  <div className="flex flex-col gap-2">
    {label && <label className="cyber-label">{label}</label>}
    <div className="cyber-trigger-wrap">
      <div className="cyber-trigger-frame">
        <SelectPrimitive.Trigger
          ref={ref}
          className={cn(
            'cyber-trigger-inner flex h-12 w-full items-center justify-between gap-2 px-4',
            'font-medium text-base leading-6',
            'focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            '[&>span]:line-clamp-1',
            className
          )}
          style={{ fontFamily: 'JetBrains Mono', color: 'hsl(133 100% 50%)' }}
          {...props}
        >
          {children}
          <SelectPrimitive.Icon asChild>
            <ChevronDownIcon className="size-5 shrink-0" style={{ color: 'hsl(var(--cyber-accent, 191 100% 50%) / 0.8)' }} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
      </div>
    </div>
  </div>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUpIcon className="size-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDownIcon className="size-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'cyber-panel relative z-50 min-w-[8rem]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      style={{ '--cyber-corner': '12px', width: 'calc(var(--radix-select-trigger-width) + 4px)' } as React.CSSProperties}
      position={position}
      align="start"
      alignOffset={-2}
      {...props}
    >
      <div className="cyber-panel__frame w-full">
        <div className="cyber-panel__inner overflow-hidden">
          <SelectPrimitive.Viewport className="p-1 max-h-60 overflow-y-auto w-full">
            {children}
          </SelectPrimitive.Viewport>
        </div>
      </div>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('cyber-label py-1.5 pl-8 pr-2 text-sm', className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'cyber-item relative flex w-full cursor-default select-none items-center rounded-[8px] py-2 pl-8 pr-2',
      'text-base font-medium outline-none data-[state=checked]:font-bold',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    style={{ fontFamily: 'JetBrains Mono' }}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="size-4" style={{ color: 'hsl(var(--cyber-accent, 191 100% 50%))' }} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px', className)} style={{ background: 'hsl(var(--cyber-accent, 191 100% 50%) / 0.45)' }} {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
