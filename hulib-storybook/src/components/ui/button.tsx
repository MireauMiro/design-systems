import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const colorMap = {
  purple:    { bg: '#9900ff', shadow: '#6a00b1', text: 'white', border: '#9900ff' },
  blue:      { bg: '#0066ff', shadow: '#0044bb', text: 'white', border: '#0066ff' },
  green:     { bg: '#00cc55', shadow: '#009940', text: 'white', border: '#00cc55' },
  orange:    { bg: '#ff8800', shadow: '#cc6600', text: 'white', border: '#ff8800' },
  'sky-blue':{ bg: '#38b6ff', shadow: '#0088cc', text: 'white', border: '#38b6ff' },
  black:     { bg: '#333333', shadow: '#000000', text: 'white', border: '#000000' },
} as const

type HulibColor = keyof typeof colorMap

type GroupPosition = 'start' | 'middle' | 'end' | 'single'
type GroupOrientation = 'horizontal' | 'vertical'

interface HulibButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: HulibColor
  variant?: 'filled' | 'outline' | 'text'
  size?: 'lg' | 'sm'
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  _groupPosition?: GroupPosition
  _groupOrientation?: GroupOrientation
}

const HulibButton = React.forwardRef<HTMLButtonElement, HulibButtonProps>(
  ({ color = 'purple', variant = 'filled', size = 'lg', className, children, asChild, leftIcon, rightIcon, disabled, _groupPosition, _groupOrientation = 'horizontal', ...props }, ref) => {
    const c = colorMap[color]
    const isLarge = size === 'lg'
    const [hovered, setHovered] = React.useState(false)

    const shadowH      = isLarge ? 14 : 8
    const hoverShadowH = isLarge ? 5 : 4
    const paddingY    = isLarge ? '14px' : '10px'
    const paddingX    = isLarge ? '24px' : '18px'
    const fontSize    = isLarge ? '18px' : '16px'
    const pressOffset = shadowH - hoverShadowH
    const isMenuOpen  = (props as Record<string, unknown>)['data-state'] === 'open'
    const active      = (hovered || isMenuOpen) && !disabled

    const isGrouped = _groupPosition !== undefined && _groupPosition !== 'single'
    const groupBorderRadius = (() => {
      const r = '8px'
      if (!isGrouped) return r
      const horiz = _groupOrientation !== 'vertical'
      if (_groupPosition === 'start') return horiz ? `${r} 0 0 ${r}` : `${r} ${r} 0 0`
      if (_groupPosition === 'end')   return horiz ? `0 ${r} ${r} 0` : `0 0 ${r} ${r}`
      return '0'
    })()

    if (variant === 'text') {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={cn(
            'inline-flex items-center gap-2 font-extrabold underline-offset-4 hover:underline transition-colors disabled:opacity-50 disabled:pointer-events-none',
            className
          )}
          style={{ fontSize, color: c.border, fontFamily: 'Public Sans' }}
          {...props}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </button>
      )
    }

    if (variant === 'outline') {
      const borderColor = c.border
      const isNonStart = isGrouped && _groupPosition !== 'start'
      const marginProp = isGrouped
        ? (_groupOrientation === 'vertical'
            ? { marginTop: isNonStart ? '-3px' : 0 }
            : { marginLeft: isNonStart ? '-3px' : 0 })
        : {}
      return (
        <button
          ref={ref}
          disabled={disabled}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(
            'inline-flex items-center gap-2 font-extrabold select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
            className
          )}
          style={{
            fontFamily: 'Public Sans',
            fontSize,
            color: borderColor,
            background: isGrouped && hovered ? `${borderColor}11` : 'transparent',
            border: `3px solid ${borderColor}`,
            borderRadius: groupBorderRadius,
            padding: `calc(${paddingY} - 3px) calc(${paddingX} - 3px)`,
            cursor: disabled ? 'not-allowed' : 'pointer',
            boxShadow: isGrouped ? 'none' : `0 ${active ? hoverShadowH : shadowH}px 0 0 ${borderColor}`,
            transform: isGrouped ? 'none' : `translateY(${active ? pressOffset : 0}px)`,
            transition: isGrouped ? 'background 150ms ease' : (active
              ? 'box-shadow 270ms cubic-bezier(0.34, 0, 0.36, 1), transform 270ms cubic-bezier(0.34, 0, 0.36, 1)'
              : 'box-shadow 420ms cubic-bezier(0.34, 0, 0.36, 1), transform 420ms cubic-bezier(0.34, 0, 0.36, 1)'),
            position: isGrouped ? 'relative' : undefined,
            zIndex: isGrouped && hovered ? 1 : undefined,
            ...marginProp,
          }}
          {...props}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </button>
      )
    }

    // Filled — single element, box-shadow creates the 3D strip
    return (
      <button
        ref={ref}
        disabled={disabled}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'inline-flex items-center gap-2 font-extrabold select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
          className
        )}
        style={{
          fontFamily: 'Public Sans',
          fontSize,
          color: c.text,
          background: c.bg,
          border: 'none',
          borderRadius: groupBorderRadius,
          padding: `${paddingY} ${paddingX}`,
          cursor: disabled ? 'not-allowed' : 'pointer',
          boxShadow: isGrouped ? 'none' : `0 ${active ? hoverShadowH : shadowH}px 0 0 ${c.shadow}`,
          transform: isGrouped ? 'none' : `translateY(${active ? pressOffset : 0}px)`,
          filter: isGrouped && hovered && !disabled ? 'brightness(1.15)' : undefined,
          transition: isGrouped
            ? 'filter 150ms ease'
            : (active
              ? 'box-shadow 270ms cubic-bezier(0.34, 0, 0.36, 1), transform 270ms cubic-bezier(0.34, 0, 0.36, 1)'
              : 'box-shadow 420ms cubic-bezier(0.34, 0, 0.36, 1), transform 420ms cubic-bezier(0.34, 0, 0.36, 1)'),
        }}
        {...props}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

HulibButton.displayName = 'Button'

// shadcn-compatible cva-based button for backward compat
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-extrabold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=size-])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border-3 border-primary bg-transparent text-primary hover:bg-primary/10',
        ghost: 'text-primary hover:bg-primary/10',
        link: 'text-primary underline-offset-4 hover:underline',
        destructive: '',
        secondary: 'border-3 border-secondary bg-transparent text-secondary hover:bg-secondary/10',
      },
      size: {
        default: 'h-[68px] px-6 text-lg rounded-[8px]',
        sm: 'h-[44px] px-[18px] text-base rounded-[8px]',
        lg: 'h-[68px] px-6 text-lg rounded-[8px]',
        icon: 'size-10 rounded-[8px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, HulibButton, buttonVariants }
export type { HulibButtonProps, HulibColor, GroupPosition, GroupOrientation }
