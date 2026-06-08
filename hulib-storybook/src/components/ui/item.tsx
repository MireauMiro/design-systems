import * as React from 'react'
import { cn } from '@/lib/utils'

const ItemGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-[12px] border-3 border-[#333] bg-white', className)}
      style={{ fontFamily: 'Public Sans' }}
      {...props}
    />
  )
)
ItemGroup.displayName = 'ItemGroup'

const ItemSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('h-px bg-[#333]/20 mx-4', className)} {...props} />
  )
)
ItemSeparator.displayName = 'ItemSeparator'

const Item = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-3 p-4', className)}
      style={{ fontFamily: 'Public Sans' }}
      {...props}
    />
  )
)
Item.displayName = 'Item'

const ItemHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-4 pt-4 pb-2 text-xs font-bold uppercase tracking-wide text-[#999]', className)}
      style={{ fontFamily: 'Public Sans' }}
      {...props}
    />
  )
)
ItemHeader.displayName = 'ItemHeader'

const ItemFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-4', className)}
      style={{ fontFamily: 'Public Sans' }}
      {...props}
    />
  )
)
ItemFooter.displayName = 'ItemFooter'

interface ItemMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'icon' | 'image'
}

const ItemMedia = React.forwardRef<HTMLDivElement, ItemMediaProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'shrink-0',
        variant === 'icon' && 'flex size-10 items-center justify-center rounded-[8px] bg-[#9900ff]/10 text-[#9900ff] [&>svg]:size-5',
        variant === 'image' && 'size-10 overflow-hidden rounded-[8px]',
        className
      )}
      {...props}
    />
  )
)
ItemMedia.displayName = 'ItemMedia'

const ItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-1 min-w-0 flex-col gap-0.5', className)} {...props} />
  )
)
ItemContent.displayName = 'ItemContent'

const ItemTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-base font-bold text-[#333] truncate', className)} {...props} />
  )
)
ItemTitle.displayName = 'ItemTitle'

const ItemDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm font-medium text-[#999] truncate', className)} {...props} />
  )
)
ItemDescription.displayName = 'ItemDescription'

const ItemActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-item-actions="" className={cn('flex shrink-0 items-center gap-2', className)} style={{ paddingLeft: '12px' }} {...props} />
  )
)
ItemActions.displayName = 'ItemActions'

export {
  ItemGroup,
  ItemSeparator,
  Item,
  ItemHeader,
  ItemFooter,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
}
