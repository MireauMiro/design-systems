import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { cn } from '@/lib/utils'

const HoverCard = ({
  openDelay = 0,
  closeDelay = 150,
  ...props
}: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>) => (
  <HoverCardPrimitive.Root openDelay={openDelay} closeDelay={closeDelay} {...props} />
)
HoverCard.displayName = 'HoverCard'

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 6, children, ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn('rg-dialog-glitch cyber-panel z-50 w-64', className)}
      style={{ '--cyber-corner': '12px', fontFamily: 'JetBrains Mono' } as React.CSSProperties}
      {...props}
    >
      <div className="cyber-panel__frame w-full">
        <div className="cyber-panel__inner p-4">
          {children}
        </div>
      </div>
    </HoverCardPrimitive.Content>
  </HoverCardPrimitive.Portal>
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

/** Title with periodic RGB-split glitch — mirrors DialogTitle */
const HoverCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const text = typeof children === 'string' ? children : ''
  return (
    <p
      ref={ref}
      className={cn('relative cyber-heading text-base leading-tight mb-1', className)}
      {...props}
    >
      {children}
      {text && (
        <>
          <span aria-hidden="true" className="rg-glitch-ghost rg-glitch-ghost--r">{text}</span>
          <span aria-hidden="true" className="rg-glitch-ghost rg-glitch-ghost--c">{text}</span>
        </>
      )}
    </p>
  )
})
HoverCardTitle.displayName = 'HoverCardTitle'

/** Body text with a slower, offset glitch cycle */
const HoverCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const text = typeof children === 'string' ? children : ''
  return (
    <p
      ref={ref}
      className={cn('relative text-sm font-normal leading-[20px]', className)}
      style={{ color: 'hsl(133 35% 62%)' }}
      {...props}
    >
      {children}
      {text && (
        <>
          <span aria-hidden="true" className="rg-glitch-ghost rg-glitch-ghost--alt rg-glitch-ghost--r">{text}</span>
          <span aria-hidden="true" className="rg-glitch-ghost rg-glitch-ghost--alt rg-glitch-ghost--c">{text}</span>
        </>
      )}
    </p>
  )
})
HoverCardDescription.displayName = 'HoverCardDescription'

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardTitle, HoverCardDescription }
