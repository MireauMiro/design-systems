import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@/components/ui/spinner'
import { RobogearsButton } from '@/components/ui/button'
import { Card, CardBody, CardShadow } from '@/components/ui/card'

const meta: Meta<typeof Spinner> = {
  title: 'Robogears/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Spinner>

// ---------------------------------------------------------------------------
// Default (controls wired up via autodocs)
// ---------------------------------------------------------------------------

export const Default: Story = {}

// ---------------------------------------------------------------------------
// All sizes
// ---------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-10" style={{ fontFamily: 'JetBrains Mono' }}>
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-3">
          <Spinner size={size} />
          <span className="text-xs font-bold text-[hsl(133_30%_45%)]">{size}</span>
        </div>
      ))}
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-6" style={{ fontFamily: 'JetBrains Mono' }}>
      <div className="flex flex-col items-center gap-3">
        <Spinner color="violet" />
        <span className="text-xs font-bold text-[hsl(133_30%_45%)]">purple</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner color="white" />
        <span className="text-xs font-bold text-[hsl(133_30%_45%)]">black</span>
      </div>
      <div className="flex flex-col items-center gap-3 rounded-[12px] bg-[#222] px-6 py-4">
        <Spinner color="white" />
        <span className="text-xs font-bold text-white/50">white</span>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// In a button (loading state)
// ---------------------------------------------------------------------------

export const InButton: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false)

    function handleClick() {
      setLoading(true)
      setTimeout(() => setLoading(false), 2500)
    }

    return (
      <div className="flex gap-3 items-center" style={{ fontFamily: 'JetBrains Mono' }}>
        <RobogearsButton color="violet" variant="filled" size="md" disabled={loading} onClick={handleClick}
          className="gap-2">
          {loading && <Spinner size="sm" color="white" />}
          {loading ? 'Saving…' : 'Save changes'}
        </RobogearsButton>
        <RobogearsButton color="white" variant="outline" size="md" disabled={loading} onClick={handleClick}
          className="gap-2">
          {loading && <Spinner size="sm" color="white" />}
          {loading ? 'Loading…' : 'Load data'}
        </RobogearsButton>
      </div>
    )
  },
}

// ---------------------------------------------------------------------------
// Empty / loading state inside a card
// ---------------------------------------------------------------------------

export const LoadingCard: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardBody className="items-center gap-5 py-10">
        <Spinner size="xl" />
        <div className="text-center">
          <p className="text-base font-extrabold text-[hsl(133_70%_58%)]">Loading components</p>
          <p className="text-sm font-medium text-[hsl(133_30%_45%)] mt-1">This will only take a moment…</p>
        </div>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}
