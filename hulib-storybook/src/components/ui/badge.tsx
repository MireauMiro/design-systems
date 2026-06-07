import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-bold text-xs leading-none px-3 pt-[5px] pb-[6px] rounded-full border-3 select-none transition-colors',
  {
    variants: {
      variant: {
        default:     'bg-[#9900ff] border-[#6a00b1] text-white',
        blue:        'bg-[#0066ff] border-[#0044bb] text-white',
        green:       'bg-[#00cc55] border-[#009940] text-white',
        orange:      'bg-[#ff8800] border-[#cc6600] text-white',
        'sky-blue':  'bg-[#38b6ff] border-[#0088cc] text-white',
        outline:     'bg-transparent border-[#333] text-[#333]',
        info:        'bg-[#98d4ff] border-[#98d4ff] text-black',
        success:     'bg-[#98ffb2] border-[#98ffb2] text-black',
        warning:     'bg-[#ffe098] border-[#ffe098] text-black',
        destructive: 'bg-[#ff9898] border-[#ff9898] text-black',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      style={{ fontFamily: 'Public Sans' }}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
