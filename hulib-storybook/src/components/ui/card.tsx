import * as React from 'react'
import { cn } from '@/lib/utils'

// Outer wrapper: 4px black border frame + bg-black (shows as 3D strip + corner fill)
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col rounded-[12px] border-4 border-black bg-black',
        className
      )}
      style={{ fontFamily: 'Public Sans' }}
      {...props}
    />
  )
)
Card.displayName = 'Card'

// Inner white panel: contains all visible content, border-b-4 creates the separator above the strip
const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('bg-white border-b-4 border-black rounded-t-[8px] rounded-b-[12px] flex flex-col gap-6 p-8', className)}
      {...props}
    />
  )
)
CardBody.displayName = 'CardBody'

// Cropped image section — sits inside CardBody, negative margin breaks out of the padding
const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string; alt?: string }
>(({ className, src, alt = '', ...props }, ref) => (
  <div
    ref={ref}
    className={cn('relative h-[231px] overflow-hidden -mx-8', className)}
    {...props}
  >
    <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
  </div>
))
CardImage.displayName = 'CardImage'

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-semibold text-2xl leading-6 text-black', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-xs font-normal leading-[18px] text-black', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

// CTA row — no extra padding, CardBody's gap-6 handles spacing
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

// 8px strip — bg-black from Card shows through; this just reserves the height
const CardShadow = () => <div className="h-2 shrink-0" />

export { Card, CardBody, CardImage, CardTitle, CardDescription, CardFooter, CardShadow }
