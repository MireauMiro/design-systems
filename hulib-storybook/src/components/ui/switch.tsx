import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      'peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-3 border-[#333] bg-white transition-all',
      'data-[state=checked]:bg-[#9900ff] data-[state=checked]:border-[#9900ff]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9900ff]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block size-4 rounded-full bg-[#333] shadow-sm ring-0 transition-transform',
        'data-[state=checked]:translate-x-5 data-[state=checked]:bg-white',
        'data-[state=unchecked]:translate-x-1'
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
