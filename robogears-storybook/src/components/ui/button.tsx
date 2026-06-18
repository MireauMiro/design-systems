import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const MONO_FONT = "'JetBrains Mono', 'Share Tech Mono', ui-monospace, monospace"

// Each color defines:
//   hex     — foreground / text color
//   rgb     — for CSS custom property --rg-rgb (used in keyframe animations)
//   shadowB — complementary color for the glitch drop-shadow (second channel)
const colorMap = {
  green:   { hex: '#00FF41', rgb: '0,255,65',     shadowB: '0,212,255'   },
  yellow:  { hex: '#F9E900', rgb: '249,233,0',    shadowB: '255,0,60'    },
  cyan:    { hex: '#00D4FF', rgb: '0,212,255',    shadowB: '0,255,65'    },
  magenta: { hex: '#FF003C', rgb: '255,0,60',     shadowB: '0,212,255'   },
  amber:   { hex: '#FF8C00', rgb: '255,140,0',    shadowB: '249,233,0'   },
  red:     { hex: '#FF2244', rgb: '255,34,68',    shadowB: '249,233,0'   },
  white:   { hex: '#E2E8F0', rgb: '226,232,240',  shadowB: '0,212,255'   },
  violet:  { hex: '#BF00FF', rgb: '191,0,255',    shadowB: '0,212,255'   },
} as const

type RobogearsColor = keyof typeof colorMap

type GroupPosition = 'start' | 'middle' | 'end' | 'single'
type GroupOrientation = 'horizontal' | 'vertical'

interface RobogearsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: RobogearsColor
  variant?: 'filled' | 'outline' | 'text'
  size?: 'lg' | 'sm'
  /** Cyberpunk scratch/glitch text effect on hover. Defaults to true.
   *  Automatically suppressed for users with `prefers-reduced-motion`. */
  glitch?: boolean
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  _groupPosition?: GroupPosition
  _groupOrientation?: GroupOrientation
}

// Lightened, WCAG-AA-passing label colors for the dark grouped keycap.
// Only hues whose neon hex falls below 4.5:1 on the keycap need an override.
const AA_GROUP_TEXT: Partial<Record<RobogearsColor, string>> = {
  violet:  '#D58CFF',
  magenta: '#FF4D74',
}

const FILL_SOLID  = '#080c08'
// Opaque dark with a faint tint of the button color. Must be opaque — a
// translucent fill lets the (item-colored) border background bleed through the
// interior, leaving same-color text on a same-color surface.
const fillOutline = (rgb: string) => `color-mix(in srgb, rgb(${rgb}) 12%, #05080a)`

// ─── RobogearsButton ───────────────────────────────────────────────────────

const RobogearsButton = React.forwardRef<HTMLButtonElement, RobogearsButtonProps>(
  (
    {
      color = 'green', variant = 'filled', size = 'lg', glitch = true,
      className, children, asChild,
      leftIcon, rightIcon,
      disabled, _groupPosition, _groupOrientation = 'horizontal',
      ...props
    },
    ref
  ) => {
    const c = colorMap[color]
    const isLarge   = size === 'lg'
    const isOutline = variant === 'outline'
    const isGrouped = _groupPosition !== undefined && _groupPosition !== 'single'

    const [hovered, setHovered] = React.useState(false)

    const paddingY = isLarge ? '8px'  : '5px'
    const paddingX = isLarge ? '18px' : '22px'
    const fontSize = isLarge ? '15px' : '12px'

    // ── Text variant ───────────────────────────────────────────────────────
    if (variant === 'text') {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={cn(
            'rg-btn-text inline-flex items-center gap-2 font-bold disabled:opacity-40 disabled:pointer-events-none',
            className
          )}
          style={{
            position: 'relative',
            paddingBottom: '4px',
            fontSize,
            letterSpacing: '0.06em',
            color: c.hex,
            fontFamily: MONO_FONT,
            textShadow: `0 0 8px rgba(${c.rgb},0.45)`,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          {...props}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </button>
      )
    }

    // ── Grouped buttons: tactile "heavy machine" keys ──────────────────────
    if (isGrouped) {
      const horiz  = _groupOrientation !== 'vertical'
      const r      = '3px'
      const radius = (() => {
        if (_groupPosition === 'start') return horiz ? `${r} 0 0 ${r}` : `${r} ${r} 0 0`
        if (_groupPosition === 'end')   return horiz ? `0 ${r} ${r} 0` : `0 0 ${r} ${r}`
        return '0'
      })()
      const isNonStart = _groupPosition !== 'start'
      // Overlap by the 2px border so adjacent keys share one divider
      const margin = isNonStart
        ? (horiz ? { marginLeft: '-2px' } : { marginTop: '-2px' })
        : {}

      // Some neon hues (e.g. violet) are too dark as text to hit WCAG AA on the
      // dark keycap — substitute a lightened, AA-passing shade.
      const groupText = AA_GROUP_TEXT[color] ?? c.hex
      const padY = isLarge ? '11px' : '8px'
      const padX = isLarge ? '22px' : '16px'

      return (
        <button
          ref={ref}
          disabled={disabled}
          className={cn('rg-group-btn', className)}
          style={{
            '--rg-rgb': c.rgb,
            fontSize,
            color: groupText,
            borderRadius: radius,
            padding: `${padY} ${padX}`,
            ...margin,
          } as React.CSSProperties}
          {...props}
        >
          {leftIcon  && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </button>
      )
    }

    const fill      = isOutline ? fillOutline(c.rgb) : FILL_SOLID
    const labelText = typeof children === 'string' ? children : ''

    return (
      <button
        ref={ref}
        disabled={disabled}
        onMouseEnter={() => !disabled && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn('rg-btn', disabled && 'rg-btn--disabled', hovered && 'rg-btn--hover', className)}
        style={{ '--rg-rgb': c.rgb } as React.CSSProperties}
        {...props}
      >
        <span
          className={cn('rg-btn__box', !glitch && 'rg-btn__box--no-glitch')}
          style={{
            '--rg-rgb': c.rgb,
            '--rg-sB':  c.shadowB,
            '--rg-fill': hovered ? `rgb(${c.rgb})` : fill,
            background: hovered ? '#000000' : `rgb(${c.rgb})`,
            color:      hovered ? '#050805' : c.hex,
            textShadow: hovered ? 'none' : `0 0 10px rgba(${c.rgb}, 0.50)`,
            fontSize,
            padding: `${paddingY} ${paddingX}`,
          } as React.CSSProperties}
        >
          {glitch && <span className="rg-btn__glitch" aria-hidden="true" />}

          {leftIcon && <span className="relative z-10 shrink-0">{leftIcon}</span>}

          <span className="rg-btn__label" data-text={labelText}>
            {children}
          </span>

          {rightIcon && <span className="relative z-10 shrink-0">{rightIcon}</span>}
        </span>
      </button>
    )
  }
)

RobogearsButton.displayName = 'RobogearsButton'

// ─── shadcn-compatible cva button ──────────────────────────────────────────

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*=size-])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring',
  {
    variants: {
      variant: {
        default:     'border border-primary bg-primary/10 text-primary hover:bg-primary/20',
        outline:     'border border-primary bg-transparent text-primary hover:bg-primary/10',
        ghost:       'text-primary hover:bg-primary/10',
        link:        'text-primary underline-offset-4 hover:underline',
        destructive: 'border border-destructive bg-destructive/10 text-destructive hover:bg-destructive/20',
        secondary:   'border border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      size: {
        default: 'h-[50px] px-6 text-base rounded-[4px]',
        sm:      'h-[38px] px-[18px] text-sm rounded-[4px]',
        lg:      'h-[50px] px-6 text-base rounded-[4px]',
        icon:    'size-10 rounded-[4px]',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
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


// rgb triplet ("r,g,b") per color — used by ButtonGroup to tint the console base
const colorRgb = Object.fromEntries(
  Object.entries(colorMap).map(([k, v]) => [k, v.rgb])
) as Record<RobogearsColor, string>

export { Button, RobogearsButton, buttonVariants, colorRgb }
export type { RobogearsButtonProps, RobogearsColor, GroupPosition, GroupOrientation }
