import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/ui/badge'

const meta: Meta<typeof Badge> = {
  title: 'Hulib/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'blue', 'green', 'orange', 'sky-blue', 'outline', 'info', 'success', 'warning', 'destructive'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = { args: { children: 'Badge', variant: 'default' } }
export const Blue: Story = { args: { children: 'Badge', variant: 'blue' } }
export const Green: Story = { args: { children: 'Badge', variant: 'green' } }
export const Orange: Story = { args: { children: 'Badge', variant: 'orange' } }
export const SkyBlue: Story = { args: { children: 'Badge', variant: 'sky-blue' } }
export const Outline: Story = { args: { children: 'Badge', variant: 'outline' } }

export const Semantic: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Error</Badge>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(['default', 'blue', 'green', 'orange', 'sky-blue', 'outline', 'info', 'success', 'warning', 'destructive'] as const).map((v) => (
        <Badge key={v} variant={v}>{v}</Badge>
      ))}
    </div>
  ),
}
