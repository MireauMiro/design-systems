import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

// Returns host class for plain nav links — wrap children in rg-nav-frame > rg-nav-inner for full styling
export const navigationMenuTriggerStyle = () => 'rg-nav-host'

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & { viewport?: boolean }
>(({ className, children, viewport = true, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    delayDuration={100}
    skipDelayDuration={500}
    className={cn('relative flex max-w-max flex-1 items-center justify-center', className)}
    style={{ fontFamily: 'JetBrains Mono' }}
    {...props}
  >
    {children}
    {viewport && <NavigationMenuViewport />}
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn('group flex flex-1 list-none items-center justify-center gap-2', className)}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

// Diagonal-clipped trigger with pulsating glow, scan-line sweep, targeting brackets,
// and RGB-jitter glitch. All effects driven by CSS in index.css (.rg-nav-host / .rg-nav-frame / .rg-nav-inner).
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn('rg-nav-host group', className)}
    {...props}
  >
    <span className="rg-nav-frame">
      <span className="rg-nav-inner">
        {children}
        <ChevronDownIcon
          className="size-3 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </span>
    </span>
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full md:absolute md:w-auto',
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out',
      'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out',
      'data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52',
      'data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

// Viewport wrapped in cyber-panel (diagonal cut, full border).
// Entrance: RGB-split glitch + scaleY via .rg-nav-viewport[data-state="open"] in index.css.
// Exit: Tailwind zoom-out + fade.
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className="absolute left-0 top-full flex justify-center pt-3">
    <div
      className="cyber-panel"
      style={{ '--cyber-corner': '14px' } as React.CSSProperties}
    >
      <div className="cyber-panel__frame">
        <NavigationMenuPrimitive.Viewport
          ref={ref}
          className={cn(
            'rg-nav-viewport cyber-panel__inner',
            'relative origin-top overflow-hidden',
            'h-[var(--radix-navigation-menu-viewport-height)]',
            'w-full md:w-[var(--radix-navigation-menu-viewport-width)]',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
            'data-[state=closed]:zoom-out-95 data-[state=closed]:duration-150',
            className
          )}
          {...props}
        />
      </div>
    </div>
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
}
