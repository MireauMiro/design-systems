import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { HulibButton } from '@/components/ui/button'

const meta: Meta = {
  title: 'Hulib/Sonner',
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
    <div style={{ fontFamily: 'Public Sans' }}>
      <Toaster />
      <div className="flex flex-col gap-3 items-center p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-[#999] mb-1">Toast types</p>
        <div className="grid grid-cols-3 gap-3 w-full">
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast('Event has been created', { description: 'Monday, June 9 at 9:00 AM' })}>
            Default
          </HulibButton>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.success('File saved successfully')}>
            Success
          </HulibButton>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.error('Something went wrong')}>
            Error
          </HulibButton>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.warning('Your session expires in 5 minutes')}>
            Warning
          </HulibButton>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.info('A new version is available')}>
            Info
          </HulibButton>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => {
              const id = toast.loading('Processing your request...')
              setTimeout(() => toast.dismiss(id), 3000)
            }}>
            Loading
          </HulibButton>
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
    <div style={{ fontFamily: 'Public Sans' }}>
      <Toaster />
      <div className="flex flex-col gap-3 items-center p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-[#999] mb-1">With description</p>
        <div className="flex flex-col gap-3 w-[260px]">
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast('Component published', {
              description: 'Button · hulib-storybook · v2.4.1',
            })}>
            Published
          </HulibButton>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.success('Payment received', {
              description: '$49.00 charged to Visa ending in 4242',
            })}>
            Payment success
          </HulibButton>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center"
            onClick={() => toast.error('Upload failed', {
              description: 'design-tokens.json exceeds the 5 MB limit',
            })}>
            Upload error
          </HulibButton>
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
    <div style={{ fontFamily: 'Public Sans' }}>
      <Toaster />
      <div className="flex flex-col gap-3 items-center p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-[#999] mb-1">Long-duration toasts</p>
        <div className="flex gap-3">
          <HulibButton color="black" variant="outline" size="sm" className="justify-center"
            onClick={() => toast('Reminder set for 9 AM', { duration: 10000 })}>
            Reminder
          </HulibButton>
          <HulibButton color="black" variant="outline" size="sm" className="justify-center"
            onClick={() => toast.success('Export complete', {
              description: 'design-system-v2.zip is ready to download.',
              duration: 10000,
            })}>
            Export ready
          </HulibButton>
        </div>
      </div>
    </div>
  ),
}
