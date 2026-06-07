import type { Meta } from '@storybook/react'
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from '@/components/ui/dialog'
import { HulibButton } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default {
  title: 'Hulib/Dialog',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const Default = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <HulibButton color="purple" variant="filled" size="lg">Open Dialog</HulibButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <Input label="Name" placeholder="Your full name" />
          <Input label="Email" placeholder="your@email.com" type="email" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <HulibButton color="black" variant="outline" size="sm">Cancel</HulibButton>
          </DialogClose>
          <HulibButton color="purple" variant="filled" size="sm">Save Changes</HulibButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Destructive = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <HulibButton color="black" variant="outline" size="lg">Delete Account</HulibButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove all your data.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <HulibButton color="black" variant="outline" size="sm">Cancel</HulibButton>
          </DialogClose>
          <HulibButton color="orange" variant="filled" size="sm">Delete Account</HulibButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
