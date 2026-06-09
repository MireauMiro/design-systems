import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { PanelLeftIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const SIDEBAR_WIDTH = '272px'
const SIDEBAR_WIDTH_COLLAPSED = '64px'

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface SidebarContextValue {
  isOpen: boolean
  toggle: () => void
  setOpen: (v: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextValue>({
  isOpen: true,
  toggle: () => {},
  setOpen: () => {},
})

export function useSidebar() {
  return React.useContext(SidebarContext)
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface SidebarProviderProps {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const SidebarProvider = React.forwardRef<HTMLDivElement, SidebarProviderProps>(
  ({ defaultOpen = true, open: controlledOpen, onOpenChange, children, className, style, ...props }, ref) => {
    const [_open, _setOpen] = React.useState(defaultOpen)
    const isOpen = controlledOpen ?? _open

    const setOpen = React.useCallback((v: boolean) => {
      _setOpen(v)
      onOpenChange?.(v)
    }, [onOpenChange])

    const toggle = React.useCallback(() => setOpen(!isOpen), [isOpen, setOpen])

    React.useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          toggle()
        }
      }
      window.addEventListener('keydown', handler)
      return () => window.removeEventListener('keydown', handler)
    }, [toggle])

    return (
      <SidebarContext.Provider value={{ isOpen, toggle, setOpen }}>
        <div
          ref={ref}
          className={cn('flex h-full w-full', className)}
          style={{ '--sidebar-width': SIDEBAR_WIDTH, '--sidebar-width-collapsed': SIDEBAR_WIDTH_COLLAPSED, ...style } as React.CSSProperties}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = 'SidebarProvider'

// ---------------------------------------------------------------------------
// Sidebar shell
// ---------------------------------------------------------------------------

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right'
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ side = 'left', className, children, ...props }, ref) => {
    const { isOpen } = useSidebar()
    return (
      <div
        ref={ref}
        data-open={isOpen}
        data-side={side}
        className={cn('relative flex flex-col shrink-0 bg-white overflow-hidden transition-[width] duration-300 ease-in-out', className)}
        style={{
          width: isOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED,
          borderRight: side === 'left' ? '3px solid #333' : undefined,
          borderLeft: side === 'right' ? '3px solid #333' : undefined,
          fontFamily: 'Public Sans',
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Sidebar.displayName = 'Sidebar'

// ---------------------------------------------------------------------------
// Trigger
// ---------------------------------------------------------------------------

const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggle } = useSidebar()
    return (
      <button
        ref={ref}
        aria-label="Toggle sidebar"
        onClick={(e) => { toggle(); onClick?.(e) }}
        className={cn(
          'flex size-9 items-center justify-center rounded-[8px] shrink-0',
          'text-[#333] hover:bg-[#9900ff]/10 hover:text-[#9900ff]',
          'transition-colors cursor-pointer outline-none',
          className
        )}
        {...props}
      >
        <PanelLeftIcon className="size-5" />
        <span className="sr-only">Toggle sidebar</span>
      </button>
    )
  }
)
SidebarTrigger.displayName = 'SidebarTrigger'

// ---------------------------------------------------------------------------
// Layout sections
// ---------------------------------------------------------------------------

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col justify-center shrink-0 h-14 border-b border-[#333]/15', className)} {...props} />
  )
)
SidebarHeader.displayName = 'SidebarHeader'

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-2 gap-1', className)} {...props} />
  )
)
SidebarContent.displayName = 'SidebarContent'

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col shrink-0 border-t border-[#333]/15', className)} {...props} />
  )
)
SidebarFooter.displayName = 'SidebarFooter'

const SidebarSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mx-3 my-1 h-px bg-[#333]/15 shrink-0', className)} {...props} />
  )
)
SidebarSeparator.displayName = 'SidebarSeparator'

// ---------------------------------------------------------------------------
// Groups
// ---------------------------------------------------------------------------

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-0.5 px-2', className)} {...props} />
  )
)
SidebarGroup.displayName = 'SidebarGroup'

const SidebarGroupLabel = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()
    return (
      <p
        ref={ref}
        className={cn('px-3 text-xs font-bold uppercase tracking-wide text-[#999] whitespace-nowrap', className)}
        style={{
          fontFamily: 'Public Sans',
          overflow: 'hidden',
          maxHeight: isOpen ? '28px' : '0px',
          paddingTop: isOpen ? '6px' : '0px',
          paddingBottom: isOpen ? '6px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out, padding-top 300ms ease-in-out, padding-bottom 300ms ease-in-out',
        }}
        {...props}
      />
    )
  }
)
SidebarGroupLabel.displayName = 'SidebarGroupLabel'

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-0.5', className)} {...props} />
  )
)
SidebarGroupContent.displayName = 'SidebarGroupContent'

// ---------------------------------------------------------------------------
// Menu
// ---------------------------------------------------------------------------

const SidebarMenu = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-col gap-0.5 list-none m-0 p-0', className)} {...props} />
  )
)
SidebarMenu.displayName = 'SidebarMenu'

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />
)
SidebarMenuItem.displayName = 'SidebarMenuItem'

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isActive?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ asChild, isActive, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        data-active={isActive}
        className={cn(
          'flex w-full items-center gap-3 rounded-[8px] px-3 py-2.5 text-left',
          'text-sm font-bold cursor-pointer outline-none select-none transition-colors',
          'overflow-hidden whitespace-nowrap',
          isActive
            ? 'bg-[#9900ff] text-white'
            : 'text-[#333] hover:bg-[#9900ff]/10 hover:text-[#9900ff]',
          className
        )}
        style={{ fontFamily: 'Public Sans' }}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
SidebarMenuButton.displayName = 'SidebarMenuButton'

// Text label that fades out when sidebar is collapsed
const SidebarMenuLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()
    return (
      <span
        ref={ref}
        className={cn(
          'flex-1 min-w-0 truncate transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 overflow-hidden',
          className
        )}
        {...props}
      />
    )
  }
)
SidebarMenuLabel.displayName = 'SidebarMenuLabel'

const SidebarMenuBadge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()
    return (
      <span
        ref={ref}
        className={cn(
          'ml-auto rounded-full px-2 py-0.5 text-xs font-bold shrink-0',
          'bg-[#9900ff]/15 text-[#9900ff]',
          'transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden px-0',
          className
        )}
        style={{ fontFamily: 'Public Sans' }}
        {...props}
      />
    )
  }
)
SidebarMenuBadge.displayName = 'SidebarMenuBadge'

// ---------------------------------------------------------------------------
// Inset (main content companion)
// ---------------------------------------------------------------------------

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-1 flex-col min-w-0', className)} {...props} />
  )
)
SidebarInset.displayName = 'SidebarInset'

export {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuLabel,
  SidebarMenuBadge,
  SidebarInset,
}
