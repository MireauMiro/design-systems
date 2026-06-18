import * as React from 'react'
import { cn } from '@/lib/utils'
import { colorRgb } from '@/components/ui/button'
import type { GroupOrientation, GroupPosition, RobogearsColor } from '@/components/ui/button'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: GroupOrientation
}

function ButtonGroup({ className, orientation = 'horizontal', children, style, ...props }: ButtonGroupProps) {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement)
  const count = validChildren.length

  // Tint the console base with the (first) button's color
  const firstColor = (validChildren[0] as React.ReactElement<{ color?: RobogearsColor }>)?.props?.color ?? 'green'
  const baseRgb = colorRgb[firstColor] ?? colorRgb.green

  const positioned = validChildren.map((child, i) => {
    const pos: GroupPosition =
      count === 1 ? 'single' :
      i === 0     ? 'start'  :
      i === count - 1 ? 'end' :
      'middle'

    return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
      _groupPosition: pos,
      _groupOrientation: orientation,
    })
  })

  return (
    <div
      role="group"
      className={cn(
        'rg-group-wrap flex w-fit items-stretch',
        orientation === 'vertical' ? 'rg-group-wrap--vertical flex-col' : 'flex-row',
        className
      )}
      style={{ '--rg-rgb': baseRgb, ...style } as React.CSSProperties}
      {...props}
    >
      {positioned}
    </div>
  )
}

export { ButtonGroup }
export type { ButtonGroupProps }
