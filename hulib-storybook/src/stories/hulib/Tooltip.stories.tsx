import type { Meta } from '@storybook/react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { HulibButton } from '@/components/ui/button'

export default {
  title: 'Hulib/Tooltip',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const Default = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HulibButton color="purple" variant="filled" size="sm">Hover me</HulibButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a Hulib tooltip</p>
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
              <HulibButton color="black" variant="outline" size="sm">{side}</HulibButton>
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
