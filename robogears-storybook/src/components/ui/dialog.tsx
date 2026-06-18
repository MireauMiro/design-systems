import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50 backdrop-blur-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    style={{ animationDuration: '250ms', animationTimingFunction: 'ease-in-out' }}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    {/* Flex wrapper centers the modal via layout (not transforms), so the
        zoom/fade animation can't knock it off-centre or below the viewport. */}
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 pointer-events-none">
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'rg-dialog-glitch cyber-panel pointer-events-auto w-full max-w-lg my-auto',
          className
        )}
        {...props}
      >
        <div className="cyber-panel__frame">
          <div className="cyber-panel__inner relative p-8">
            <span className="cyber-version">sys.dialog</span>
            {children}
            <DialogPrimitive.Close
              className="absolute right-6 top-6 p-1 opacity-70 hover:opacity-100 focus:outline-none transition-opacity"
              style={{ color: 'hsl(var(--cyber-accent))' }}
            >
              <XIcon className="size-5" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </div>
        </div>
      </DialogPrimitive.Content>
    </div>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-2 mb-4', className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse gap-2 mt-6 sm:flex-row sm:justify-end', className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, children, ...props }, ref) => {
  const text = typeof children === 'string' ? children : ''
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn('cyber-heading text-2xl leading-tight', className)}
      {...props}
    >
      {children}
      {text && (
        <>
          <span aria-hidden="true" className="rg-glitch-ghost rg-glitch-ghost--r">{text}</span>
          <span aria-hidden="true" className="rg-glitch-ghost rg-glitch-ghost--c">{text}</span>
        </>
      )}
    </DialogPrimitive.Title>
  )
})
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, children, ...props }, ref) => {
  const text = typeof children === 'string' ? children : ''
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn('relative text-sm font-normal leading-[20px]', className)}
      style={{ fontFamily: 'JetBrains Mono', color: 'hsl(133 35% 62%)' }}
      {...props}
    >
      {children}
      {text && (
        <>
          <span aria-hidden="true" className="rg-glitch-ghost rg-glitch-ghost--alt rg-glitch-ghost--r">{text}</span>
          <span aria-hidden="true" className="rg-glitch-ghost rg-glitch-ghost--alt rg-glitch-ghost--c">{text}</span>
        </>
      )}
    </DialogPrimitive.Description>
  )
})
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger,
  DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
}
