import * as React from 'react'
import { cn } from '@/lib/utils'
import type { GroupOrientation, GroupPosition } from '@/components/ui/button'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: GroupOrientation
}

function ButtonGroup({ className, orientation = 'horizontal', children, ...props }: ButtonGroupProps) {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement)
  const count = validChildren.length

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
        'flex w-fit items-stretch',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        className
      )}
      {...props}
    >
      {positioned}
    </div>
  )
}

export { ButtonGroup }
export type { ButtonGroupProps }
