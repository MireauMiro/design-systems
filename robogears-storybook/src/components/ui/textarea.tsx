import * as React from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, style, ...props }, ref) => {
    const textareaId = id || React.useId()
    const wrapRef = React.useRef<HTMLDivElement>(null)
    const [dims, setDims] = React.useState<{ w: number | undefined; h: number }>({ w: undefined, h: 120 })
    const [handleHover, setHandleHover] = React.useState(false)

    const onDragStart = (e: React.MouseEvent) => {
      e.preventDefault()
      const startX = e.clientX
      const startY = e.clientY
      const rect = wrapRef.current?.getBoundingClientRect()
      const startW = rect?.width ?? 300
      const startH = dims.h

      const onMove = (ev: MouseEvent) => {
        setDims({
          w: Math.max(160, startW + ev.clientX - startX),
          h: Math.max(80, startH + ev.clientY - startY),
        })
      }
      const onUp = () => {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseup', onUp)
      }
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseup', onUp)
    }

    const accentOpacity = handleHover ? 1 : 0.45

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={textareaId} className="cyber-label">
            {label}
          </label>
        )}
        <div
          ref={wrapRef}
          className="cyber-field-wrap"
          style={dims.w !== undefined ? { width: dims.w } : undefined}
        >
          <div className="cyber-field-frame">
            <div
              className="w-full"
              style={{
                clipPath: 'var(--cyber-field-shape)',
                backgroundColor: 'hsl(130 14% 7%)',
              }}
            >
              <textarea
                id={textareaId}
                ref={ref}
                className={cn(
                  'w-full bg-transparent px-4 py-3 text-base font-medium leading-6 resize-none focus:outline-none block',
                  className
                )}
                style={{
                  fontFamily: 'JetBrains Mono',
                  color: 'hsl(133 100% 50%)',
                  height: dims.h,
                  ...style,
                }}
                {...props}
              />
            </div>
          </div>

          {/* Resize handle — sits in the bottom-right corner outside the clip path */}
          <div
            className="absolute bottom-[10px] right-[10px] cursor-nwse-resize"
            style={{ width: 20, height: 20, transition: 'opacity 150ms', opacity: handleHover ? 1 : 0.45 }}
            onMouseDown={onDragStart}
            onMouseEnter={() => setHandleHover(true)}
            onMouseLeave={() => setHandleHover(false)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <line x1="2" y1="18" x2="18" y2="2" stroke="hsl(191 100% 50%)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="8" y1="18" x2="18" y2="8" stroke="hsl(191 100% 50%)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="14" y1="18" x2="18" y2="14" stroke="hsl(191 100% 50%)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
