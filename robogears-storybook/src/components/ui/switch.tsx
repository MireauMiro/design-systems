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
      'robogears-switch peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF41] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none relative z-10 block size-4 rounded-full ring-0 transition-transform duration-200',
        'bg-[#4a7c5a] data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-[#00FF41]',
        'data-[state=unchecked]:translate-x-[3px]'
      )}
      style={{ boxShadow: '0 0 6px rgba(0,255,65,0.4)' }}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
