import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RobogearsButton } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const meta: Meta = {
  title: 'Robogears/Drawer',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <RobogearsButton color="violet" variant="filled">Open Drawer</RobogearsButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone. Please confirm before continuing.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <RobogearsButton color="violet" variant="filled" className="w-full justify-center">Confirm</RobogearsButton>
          <DrawerClose asChild>
            <RobogearsButton color="white" variant="outline" className="w-full justify-center">Cancel</RobogearsButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <RobogearsButton color="cyan" variant="filled">Edit Profile</RobogearsButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>Update your display name and bio. Changes are saved immediately.</DrawerDescription>
        </DrawerHeader>
        <div className="px-6 flex flex-col gap-4" style={{ fontFamily: 'JetBrains Mono' }}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[hsl(133_70%_58%)]">Display Name</label>
            <input
              className="h-12 rounded-2xl border-2 border-[hsl(191_100%_50%/0.4)] px-4 text-base font-medium text-[hsl(133_70%_58%)] placeholder:text-[#bbb] outline-none focus:ring-2 focus:ring-[hsl(133_100%_50%)]"
              placeholder="Your name"
              defaultValue="Geoff K."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[hsl(133_70%_58%)]">Bio</label>
            <textarea
              rows={3}
              className="rounded-2xl border-2 border-[hsl(191_100%_50%/0.4)] px-4 py-3 text-base font-medium text-[hsl(133_70%_58%)] placeholder:text-[#bbb] outline-none focus:ring-2 focus:ring-[hsl(133_100%_50%)] resize-none"
              placeholder="Tell us about yourself"
            />
          </div>
        </div>
        <DrawerFooter>
          <RobogearsButton color="violet" variant="filled" className="w-full justify-center">Save Changes</RobogearsButton>
          <DrawerClose asChild>
            <RobogearsButton color="white" variant="outline" className="w-full justify-center">Discard</RobogearsButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithList: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <RobogearsButton color="cyan" variant="filled">Choose Colour</RobogearsButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select a Colour</DrawerTitle>
          <DrawerDescription>Choose the colour for your new label.</DrawerDescription>
        </DrawerHeader>
        <div className="px-6 pb-2 flex flex-col gap-1" style={{ fontFamily: 'JetBrains Mono' }}>
          {[
            { label: 'Phosphor', hex: 'hsl(133 100% 50%)' },
            { label: 'Blue', hex: '#0066ff' },
            { label: 'Green', hex: '#00cc55' },
            { label: 'Orange', hex: '#ff8800' },
            { label: 'Sky Blue', hex: '#38b6ff' },
          ].map(({ label, hex }) => (
            <DrawerClose asChild key={label}>
              <button
                className="flex items-center gap-3 rounded-[8px] px-3 py-2.5 text-base font-medium text-[hsl(133_70%_58%)] hover:bg-[hsl(133_100%_50%/0.1)] hover:text-[hsl(133_100%_50%)] transition-colors cursor-pointer text-left"
                style={{ fontFamily: 'JetBrains Mono' }}
              >
                <span className="size-4 rounded-full shrink-0" style={{ background: hex }} />
                {label}
              </button>
            </DrawerClose>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <RobogearsButton color="white" variant="outline" className="w-full justify-center">Cancel</RobogearsButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
