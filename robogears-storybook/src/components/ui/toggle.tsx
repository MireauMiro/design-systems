import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const toggleVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[8px] font-extrabold text-base leading-6 transition-all border-2 border-[hsl(191_100%_50%/0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:  'bg-[hsl(130_14%_7%)] text-[hsl(133_55%_55%)] data-[state=on]:bg-[#00D4FF] data-[state=on]:border-[#00D4FF] data-[state=on]:text-[#05121a]',
        outline:  'bg-transparent text-[hsl(133_55%_55%)] data-[state=on]:border-[#00D4FF] data-[state=on]:text-[#00D4FF]',
      },
      size: {
        default: 'h-14 px-6',
        sm:      'h-[44px] px-4 text-sm',
        lg:      'h-14 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    style={{ fontFamily: 'JetBrains Mono' }}
    {...props}
  />
))
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
