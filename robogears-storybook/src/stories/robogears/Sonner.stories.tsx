import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { RobogearsButton } from '@/components/ui/button'

const meta: Meta = {
  title: 'Robogears/Sonner',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

// ---------------------------------------------------------------------------
// All toast types
// ---------------------------------------------------------------------------

export const Types: Story = {
  render: () => (
    <div style={{ fontFamily: 'JetBrains Mono' }}>
      <Toaster />
      <div className="flex flex-col gap-3 items-center p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-[hsl(133_30%_45%)] mb-1">Toast types</p>
        <div className="grid grid-cols-3 gap-3 w-full">
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast('Event has been created', { description: 'Monday, June 9 at 9:00 AM' })}>
            Default
          </RobogearsButton>
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.success('File saved successfully')}>
            Success
          </RobogearsButton>
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.error('Something went wrong')}>
            Error
          </RobogearsButton>
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.warning('Your session expires in 5 minutes')}>
            Warning
          </RobogearsButton>
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.info('A new version is available')}>
            Info
          </RobogearsButton>
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => {
              const id = toast.loading('Processing your request...')
              setTimeout(() => toast.dismiss(id), 3000)
            }}>
            Loading
          </RobogearsButton>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// With description
// ---------------------------------------------------------------------------

export const WithDescription: Story = {
  render: () => (
    <div style={{ fontFamily: 'JetBrains Mono' }}>
      <Toaster />
      <div className="flex flex-col gap-3 items-center p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-[hsl(133_30%_45%)] mb-1">With description</p>
        <div className="flex flex-col gap-3 w-[260px]">
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast('Component published', {
              description: 'Button · robogears-storybook · v2.4.1',
            })}>
            Published
          </RobogearsButton>
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.success('Payment received', {
              description: '$49.00 charged to Visa ending in 4242',
            })}>
            Payment success
          </RobogearsButton>
          <RobogearsButton color="white" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.error('Upload failed', {
              description: 'design-tokens.json exceeds the 5 MB limit',
            })}>
            Upload error
          </RobogearsButton>
        </div>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Long-duration toasts
// ---------------------------------------------------------------------------

export const LongDuration: Story = {
  render: () => (
    <div style={{ fontFamily: 'JetBrains Mono' }}>
      <Toaster />
      <div className="flex flex-col gap-3 items-center p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-[hsl(133_30%_45%)] mb-1">Long-duration toasts</p>
        <div className="flex gap-3">
          <RobogearsButton color="white" variant="outline" size="sm" className="justify-center"
            onClick={() => toast('Reminder set for 9 AM', { duration: 10000 })}>
            Reminder
          </RobogearsButton>
          <RobogearsButton color="white" variant="outline" size="sm" className="justify-center"
            onClick={() => toast.success('Export complete', {
              description: 'design-system-v2.zip is ready to download.',
              duration: 10000,
            })}>
            Export ready
          </RobogearsButton>
        </div>
      </div>
    </div>
  ),
}
