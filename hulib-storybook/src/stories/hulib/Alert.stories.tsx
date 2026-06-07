import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { InfoIcon, CheckCircleIcon, AlertTriangleIcon, AlertOctagonIcon } from 'lucide-react'

const meta: Meta<typeof Alert> = {
  title: 'Hulib/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-[386px]"><Story /></div>],
}
export default meta

type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: { variant: 'info' },
  render: () => (
    <Alert variant="info">
      <AlertTitle><InfoIcon className="size-6" />Info Alert</AlertTitle>
      <AlertDescription>Here's some body copy for this card. This copy is a bit smaller since it's not a long form bit of content.</AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <AlertTitle><CheckCircleIcon className="size-6" />Success Alert</AlertTitle>
      <AlertDescription>Your action was completed successfully. Everything looks great!</AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle><AlertTriangleIcon className="size-6" />Warning Alert</AlertTitle>
      <AlertDescription>Please review this before continuing. Some items may need your attention.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle><AlertOctagonIcon className="size-6" />Error Alert</AlertTitle>
      <AlertDescription>Something went wrong. Please try again or contact support if the issue persists.</AlertDescription>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['info', 'success', 'warning', 'destructive'] as const).map((v) => (
        <Alert key={v} variant={v}>
          <AlertTitle>
            {v === 'info' && <InfoIcon className="size-6" />}
            {v === 'success' && <CheckCircleIcon className="size-6" />}
            {v === 'warning' && <AlertTriangleIcon className="size-6" />}
            {v === 'destructive' && <AlertOctagonIcon className="size-6" />}
            {v.charAt(0).toUpperCase() + v.slice(1)} Alert
          </AlertTitle>
          <AlertDescription>Here's some body copy for this alert component.</AlertDescription>
        </Alert>
      ))}
    </div>
  ),
}
