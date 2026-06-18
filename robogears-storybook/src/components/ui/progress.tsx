import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-4 w-full overflow-hidden rounded-full border-2 border-[hsl(191_100%_50%/0.5)] bg-[hsl(130_14%_8%)]', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full transition-all duration-300 rounded-full"
      data-rg-progress
      style={{ transform: `translateX(-${100 - (value || 0)}%)`, background: 'hsl(var(--cyber-accent, 191 100% 50%))', boxShadow: '0 0 10px hsl(var(--cyber-accent, 191 100% 50%) / 0.5)' }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
