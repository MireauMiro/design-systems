import * as React from 'react'
import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-[4px] bg-[hsl(130_12%_12%)]', className)}
      {...props}
    />
  )
}

export { Skeleton }
