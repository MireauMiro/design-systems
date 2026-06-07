import type { Meta, StoryObj } from '@storybook/react'
import { HulibButton } from '@/components/ui/button'
import { MailIcon, ArrowRightIcon } from 'lucide-react'

const meta: Meta<typeof HulibButton> = {
  title: 'Hulib/Button',
  component: HulibButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color:   { control: 'select', options: ['purple', 'blue', 'green', 'orange', 'sky-blue', 'black'] },
    variant: { control: 'select', options: ['filled', 'outline', 'text'] },
    size:    { control: 'select', options: ['lg', 'sm'] },
  },
}
export default meta

type Story = StoryObj<typeof HulibButton>

export const FilledPurple: Story = {
  args: { color: 'purple', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const FilledBlue: Story = {
  args: { color: 'blue', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const FilledGreen: Story = {
  args: { color: 'green', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const FilledOrange: Story = {
  args: { color: 'orange', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const FilledSkyBlue: Story = {
  args: { color: 'sky-blue', variant: 'filled', size: 'lg', children: 'Button Text' },
}

export const OutlineBlack: Story = {
  args: { color: 'black', variant: 'outline', size: 'lg', children: 'Button Text' },
}

export const OutlinePurple: Story = {
  args: { color: 'purple', variant: 'outline', size: 'lg', children: 'Button Text' },
}

export const TextStyle: Story = {
  args: { color: 'black', variant: 'text', size: 'lg', children: 'Button Text' },
}

export const WithLeftIcon: Story = {
  args: {
    color: 'purple', variant: 'filled', size: 'lg',
    children: 'With Icon',
    leftIcon: <MailIcon className="size-5" />,
  },
}

export const WithRightIcon: Story = {
  args: {
    color: 'blue', variant: 'filled', size: 'lg',
    children: 'Continue',
    rightIcon: <ArrowRightIcon className="size-5" />,
  },
}

export const SmallFilled: Story = {
  args: { color: 'purple', variant: 'filled', size: 'sm', children: 'Small Button' },
}

export const SmallOutline: Story = {
  args: { color: 'black', variant: 'outline', size: 'sm', children: 'Small Outline' },
}

export const Disabled: Story = {
  args: { color: 'purple', variant: 'filled', size: 'lg', children: 'Disabled', disabled: true },
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {(['purple', 'blue', 'green', 'orange', 'sky-blue', 'black'] as const).map((color) => (
        <HulibButton key={color} color={color} variant="filled" size="lg">
          {color}
        </HulibButton>
      ))}
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <HulibButton color="purple" variant="filled">Filled</HulibButton>
      <HulibButton color="purple" variant="outline">Outline</HulibButton>
      <HulibButton color="black" variant="text">Text</HulibButton>
    </div>
  ),
}
