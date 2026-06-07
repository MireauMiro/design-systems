import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const toggleVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[8px] font-extrabold text-base leading-6 transition-all border-3 border-[#333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9900ff] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:  'bg-white text-[#333] data-[state=on]:bg-[#9900ff] data-[state=on]:border-[#9900ff] data-[state=on]:text-white',
        outline:  'bg-transparent text-[#333] data-[state=on]:border-[#9900ff] data-[state=on]:text-[#9900ff]',
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
    style={{ fontFamily: 'Public Sans' }}
    {...props}
  />
))
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
