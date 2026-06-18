import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider leading-none px-3 pt-[6px] pb-[6px] rounded-full border-2 select-none transition-colors',
  {
    variants: {
      variant: {
        default:     'bg-[#00D4FF] border-[#00D4FF] text-[#05121a]',
        blue:        'bg-[#2E8BFF] border-[#2E8BFF] text-[#04101f]',
        green:       'bg-[#00FF41] border-[#00FF41] text-[#03140a]',
        orange:      'bg-[#FF8C00] border-[#FF8C00] text-[#1a0e00]',
        'sky-blue':  'bg-[#38B6FF] border-[#38B6FF] text-[#04121f]',
        outline:     'bg-transparent border-[#00D4FF] text-[#00D4FF]',
        info:        'bg-[#00D4FF] border-[#00D4FF] text-[#05121a]',
        success:     'bg-[#00FF41] border-[#00FF41] text-[#03140a]',
        warning:     'bg-[#F9E900] border-[#F9E900] text-[#1a1800]',
        destructive: 'bg-[#FF2244] border-[#FF2244] text-[#1a0008]',
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
      style={{ fontFamily: 'JetBrains Mono' }}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
