import type { Meta, StoryObj } from '@storybook/react'
import { RobogearsButton } from '@/components/ui/button'
import { MailIcon, ArrowRightIcon } from 'lucide-react'

const meta: Meta<typeof RobogearsButton> = {
  title: 'Robogears/Button',
  component: RobogearsButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color:   { control: 'select', options: ['green', 'yellow', 'cyan', 'magenta', 'amber', 'red', 'white', 'violet'] },
    variant: { control: 'select', options: ['filled', 'outline', 'text'] },
    size:    { control: 'select', options: ['lg', 'sm'] },
    glitch:  { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof RobogearsButton>

export const FilledGreen: Story = {
  args: { color: 'green', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const WithGlitch: Story = {
  args: { color: 'green', variant: 'filled', size: 'lg', glitch: true, children: 'Glitch On' },
}

export const FilledYellow: Story = {
  args: { color: 'yellow', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const FilledCyan: Story = {
  args: { color: 'cyan', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const FilledMagenta: Story = {
  args: { color: 'magenta', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const FilledAmber: Story = {
  args: { color: 'amber', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const FilledRed: Story = {
  args: { color: 'red', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const OutlineGreen: Story = {
  args: { color: 'green', variant: 'outline', size: 'lg', children: 'Button Text' },
}

export const TextStyle: Story = {
  args: { color: 'green', variant: 'text', size: 'lg', children: 'Button Text' },
}

export const WithLeftIcon: Story = {
  args: {
    color: 'green', variant: 'filled', size: 'lg',
    children: 'With Icon',
    leftIcon: <MailIcon className="size-5" />,
  },
}

export const WithRightIcon: Story = {
  args: {
    color: 'cyan', variant: 'filled', size: 'lg',
    children: 'Continue',
    rightIcon: <ArrowRightIcon className="size-5" />,
  },
}

export const SmallFilled: Story = {
  args: { color: 'yellow', variant: 'filled', size: 'sm', children: 'Small Button' },
}

export const SmallOutline: Story = {
  args: { color: 'green', variant: 'outline', size: 'sm', children: 'Small Outline' },
}

export const Disabled: Story = {
  args: { color: 'green', variant: 'filled', size: 'lg', children: 'Disabled', disabled: true },
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {(['green', 'yellow', 'cyan', 'magenta', 'amber', 'red', 'white', 'violet'] as const).map((color) => (
        <RobogearsButton key={color} color={color} variant="filled" size="lg">
          {color}
        </RobogearsButton>
      ))}
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <RobogearsButton color="green" variant="filled">Filled</RobogearsButton>
      <RobogearsButton color="green" variant="outline">Outline</RobogearsButton>
      <RobogearsButton color="green" variant="text">Text</RobogearsButton>
    </div>
  ),
}
