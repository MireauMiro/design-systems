import type { Meta } from '@storybook/react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { RobogearsButton } from '@/components/ui/button'

export default {
  title: 'Robogears/Tooltip',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const Default = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <RobogearsButton color="violet" variant="filled" size="sm">Hover me</RobogearsButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a RoboGears tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const Positions = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-4 items-center">
        {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <RobogearsButton color="white" variant="outline" size="sm">{side}</RobogearsButton>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Tooltip on {side}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  ),
}
