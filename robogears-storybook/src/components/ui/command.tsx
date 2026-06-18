import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & { version?: string }
>(({ className, children, version = 'v2.4.1 · BUILD 7720', ...props }, ref) => (
  // cyber-panel frame/inner = the accent border traces EVERY edge incl. the
  // diagonal notch (a plain border can't follow a clip-path).
  <CommandPrimitive
    ref={ref}
    className={cn('cyber-panel', className)}
    style={{ '--cyber-corner': '18px', fontFamily: 'JetBrains Mono' } as React.CSSProperties}
    {...props}
  >
    <div className="cyber-panel__frame w-full">
      <div className="cyber-panel__inner flex w-full flex-col overflow-hidden">
        {children}
        {/* Bottom-left version tag — pads the base so the diagonal notch clears
            the last list item instead of clipping it. */}
        <div
          className="flex items-center px-3 pt-2 pb-2.5 select-none"
          style={{ borderTop: '1px solid hsl(var(--cyber-accent, 191 100% 50%) / 0.14)' }}
        >
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'hsl(var(--cyber-accent, 191 100% 50%) / 0.5)',
            }}
          >
            {version}
          </span>
        </div>
      </div>
    </div>
  </CommandPrimitive>
))
Command.displayName = 'Command'

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <>
    <div className="flex h-12 items-center gap-2 px-3 shrink-0">
      <SearchIcon className="size-4 shrink-0 text-[hsl(133_30%_45%)]" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'flex-1 min-w-0 bg-transparent outline-none text-base font-medium placeholder:text-[hsl(133_22%_36%)] text-[hsl(133_70%_58%)]',
          className
        )}
        style={{ fontFamily: 'JetBrains Mono' }}
        {...props}
      />
    </div>
    <div className="-mx-0 h-px bg-[hsl(191_100%_50%)] shrink-0" />
  </>
))
CommandInput.displayName = 'CommandInput'

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('overflow-x-hidden p-1', className)}
    {...props}
  />
))
CommandList.displayName = 'CommandList'

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-10 text-center text-base font-medium text-[hsl(133_22%_36%)]"
    style={{ fontFamily: 'JetBrains Mono' }}
    {...props}
  />
))
CommandEmpty.displayName = 'CommandEmpty'

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn('overflow-hidden', className)}
    style={{ fontFamily: 'JetBrains Mono' }}
    {...props}
  />
))
CommandGroup.displayName = 'CommandGroup'

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-[hsl(191_100%_50%)]', className)}
    {...props}
  />
))
CommandSeparator.displayName = 'CommandSeparator'

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center gap-2 rounded-[8px] px-3 py-2 text-base font-medium text-[hsl(133_70%_58%)] outline-none transition-colors',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      'data-[selected=true]:bg-[#00D4FF]/10 data-[selected=true]:text-[#00D4FF]',
      className
    )}
    style={{ fontFamily: 'JetBrains Mono' }}
    {...props}
  />
))
CommandItem.displayName = 'CommandItem'

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn('ml-auto text-xs tracking-widest text-[hsl(133_22%_36%)]', className)}
    {...props}
  />
)
CommandShortcut.displayName = 'CommandShortcut'

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
}
