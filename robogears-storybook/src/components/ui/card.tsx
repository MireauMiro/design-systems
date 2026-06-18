import * as React from 'react'
import { cn } from '@/lib/utils'

// ── Cyber panel card ─────────────────────────────────────────────────────────
// Glow host → accent frame → dark translucent inner surface (clipped notch corner)
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('cyber-panel', className)} {...props}>
      <div className="cyber-panel__frame">
        <div className="cyber-panel__inner flex flex-col">{children}</div>
      </div>
    </div>
  )
)
Card.displayName = 'Card'

// Tiny technical label, top-right
const CardVersion = ({ children = 'v001.e1349', className }: { children?: React.ReactNode; className?: string }) => (
  <span className={cn('cyber-version', className)}>{children}</span>
)
CardVersion.displayName = 'CardVersion'

// Content padding container (transparent — the inner surface owns the bg)
const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative flex flex-col gap-5 p-6', className)} {...props} />
  )
)
CardBody.displayName = 'CardBody'

// Cropped image — breaks out of the body padding, accent edge top & bottom
const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string; alt?: string }
>(({ className, src, alt = '', ...props }, ref) => (
  <div
    ref={ref}
    className={cn('relative h-[200px] overflow-hidden -mx-6', className)}
    style={{ borderTop: '2px solid hsl(var(--cyber-accent) / 0.7)', borderBottom: '2px solid hsl(var(--cyber-accent) / 0.7)' }}
    {...props}
  >
    <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'saturate(1.1) contrast(1.05)' }} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, hsl(130 14% 5% / 0.15), hsl(130 14% 5% / 0.55))' }} />
  </div>
))
CardImage.displayName = 'CardImage'

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('cyber-heading text-xl leading-tight', className)} {...props} />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-[13px] font-normal leading-[20px]', className)}
      style={{ color: 'hsl(133 35% 62%)' }}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

// Deprecated (old RoboGears drop-shadow strip) — kept as a no-op for compatibility
const CardShadow = () => null

export { Card, CardBody, CardImage, CardTitle, CardDescription, CardFooter, CardShadow, CardVersion }
