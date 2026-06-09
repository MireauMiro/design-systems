import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

// Shared hook for the 3D press interaction
function usePressStyle(isActive?: boolean, wide?: boolean) {
  const [hovered, setHovered] = React.useState(false)
  const shadowH = 6
  const hoverShadowH = 2

  const style: React.CSSProperties = {
    fontFamily: 'Public Sans',
    fontSize: '16px',
    fontWeight: isActive ? 800 : 700,
    borderRadius: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wide ? '8px' : undefined,
    minWidth: '44px',
    cursor: 'pointer',
    userSelect: 'none',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxShadow: `0 ${hovered ? hoverShadowH : shadowH}px 0 0 ${isActive ? '#6a00b1' : '#333'}`,
    transform: `translateY(${hovered ? shadowH - hoverShadowH : 0}px)`,
    transition: hovered
      ? 'box-shadow 270ms cubic-bezier(0.34, 0, 0.36, 1), transform 270ms cubic-bezier(0.34, 0, 0.36, 1)'
      : 'box-shadow 420ms cubic-bezier(0.34, 0, 0.36, 1), transform 420ms cubic-bezier(0.34, 0, 0.36, 1)',
    ...(isActive
      ? {
          color: 'white',
          background: '#9900ff',
          border: 'none',
          borderBottom: '3px solid #6a00b1',
          // top padding +3px to compensate for missing top border, sides +3px to compensate for missing side borders
          padding: wide ? '10px 20px 7px' : '10px 16px 7px',
        }
      : {
          color: '#333',
          background: 'transparent',
          border: '3px solid #333',
          padding: wide ? '7px 17px' : '7px 13px',
        }),
  }

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  return { style, handlers }
}

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    style={{ fontFamily: 'Public Sans' }}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('flex flex-row items-end gap-2', className)}
      style={{ paddingBottom: '6px' }}
      {...props}
    />
  )
)
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />
)
PaginationItem.displayName = 'PaginationItem'

interface PaginationLinkProps extends React.ComponentProps<'a'> {
  isActive?: boolean
}

const PaginationLink = ({ className, isActive, children, ...props }: PaginationLinkProps) => {
  const { style, handlers } = usePressStyle(isActive)
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(className)}
      style={style}
      {...handlers}
      {...props}
    >
      {children}
    </a>
  )
}
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({ className, children, ...props }: React.ComponentProps<'a'>) => {
  const { style, handlers } = usePressStyle(false, true)
  return (
    <a
      aria-label="Go to previous page"
      className={cn(className)}
      style={style}
      {...handlers}
      {...props}
    >
      <ChevronLeftIcon className="size-4 shrink-0" />
      <span>{children ?? 'Previous'}</span>
    </a>
  )
}
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, children, ...props }: React.ComponentProps<'a'>) => {
  const { style, handlers } = usePressStyle(false, true)
  return (
    <a
      aria-label="Go to next page"
      className={cn(className)}
      style={style}
      {...handlers}
      {...props}
    >
      <span>{children ?? 'Next'}</span>
      <ChevronRightIcon className="size-4 shrink-0" />
    </a>
  )
}
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex items-center justify-center text-[#999] font-bold text-base', className)}
    style={{ fontFamily: 'Public Sans', minWidth: '44px', paddingBottom: '6px' }}
    {...props}
  >
    <MoreHorizontalIcon className="size-5" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
