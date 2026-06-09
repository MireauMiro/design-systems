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
      'hulib-switch peer inline-flex h-11 w-16 shrink-0 cursor-pointer items-center rounded-full pb-2',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9900ff] focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none relative z-10 block size-6 rounded-full bg-[#333] ring-0 transition-transform duration-200 -translate-y-px',
        'data-[state=checked]:translate-x-[33px] data-[state=checked]:bg-white',
        'data-[state=unchecked]:translate-x-[5px]'
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
