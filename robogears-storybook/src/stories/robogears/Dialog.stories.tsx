import type { Meta } from '@storybook/react'
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from '@/components/ui/dialog'
import { RobogearsButton } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default {
  title: 'Robogears/Dialog',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const Default = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <RobogearsButton color="violet" variant="filled" size="lg">Open Dialog</RobogearsButton>
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
            <RobogearsButton color="white" variant="outline" size="sm">Cancel</RobogearsButton>
          </DialogClose>
          <RobogearsButton color="violet" variant="filled" size="sm">Save Changes</RobogearsButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Destructive = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <RobogearsButton color="white" variant="outline" size="lg">Delete Account</RobogearsButton>
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
            <RobogearsButton color="white" variant="outline" size="sm">Cancel</RobogearsButton>
          </DialogClose>
          <RobogearsButton color="amber" variant="filled" size="sm">Delete Account</RobogearsButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
