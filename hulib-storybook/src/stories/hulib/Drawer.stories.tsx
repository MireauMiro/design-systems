import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { HulibButton } from '@/components/ui/button'
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
  title: 'Hulib/Drawer',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <HulibButton color="purple" variant="filled">Open Drawer</HulibButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone. Please confirm before continuing.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <HulibButton color="purple" variant="filled" className="w-full justify-center">Confirm</HulibButton>
          <DrawerClose asChild>
            <HulibButton color="black" variant="outline" className="w-full justify-center">Cancel</HulibButton>
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
        <HulibButton color="blue" variant="filled">Edit Profile</HulibButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>Update your display name and bio. Changes are saved immediately.</DrawerDescription>
        </DrawerHeader>
        <div className="px-6 flex flex-col gap-4" style={{ fontFamily: 'Public Sans' }}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#333]">Display Name</label>
            <input
              className="h-12 rounded-2xl border-3 border-[#333] px-4 text-base font-medium text-[#333] placeholder:text-[#bbb] outline-none focus:ring-2 focus:ring-[#9900ff]"
              placeholder="Your name"
              defaultValue="Geoff K."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#333]">Bio</label>
            <textarea
              rows={3}
              className="rounded-2xl border-3 border-[#333] px-4 py-3 text-base font-medium text-[#333] placeholder:text-[#bbb] outline-none focus:ring-2 focus:ring-[#9900ff] resize-none"
              placeholder="Tell us about yourself"
            />
          </div>
        </div>
        <DrawerFooter>
          <HulibButton color="purple" variant="filled" className="w-full justify-center">Save Changes</HulibButton>
          <DrawerClose asChild>
            <HulibButton color="black" variant="outline" className="w-full justify-center">Discard</HulibButton>
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
        <HulibButton color="green" variant="filled">Choose Colour</HulibButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select a Colour</DrawerTitle>
          <DrawerDescription>Choose the colour for your new label.</DrawerDescription>
        </DrawerHeader>
        <div className="px-6 pb-2 flex flex-col gap-1" style={{ fontFamily: 'Public Sans' }}>
          {[
            { label: 'Purple', hex: '#9900ff' },
            { label: 'Blue', hex: '#0066ff' },
            { label: 'Green', hex: '#00cc55' },
            { label: 'Orange', hex: '#ff8800' },
            { label: 'Sky Blue', hex: '#38b6ff' },
          ].map(({ label, hex }) => (
            <DrawerClose asChild key={label}>
              <button
                className="flex items-center gap-3 rounded-[8px] px-3 py-2.5 text-base font-medium text-[#333] hover:bg-[#9900ff]/10 hover:text-[#9900ff] transition-colors cursor-pointer text-left"
                style={{ fontFamily: 'Public Sans' }}
              >
                <span className="size-4 rounded-full shrink-0" style={{ background: hex }} />
                {label}
              </button>
            </DrawerClose>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <HulibButton color="black" variant="outline" className="w-full justify-center">Cancel</HulibButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
