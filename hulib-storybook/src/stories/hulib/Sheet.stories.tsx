import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BellIcon,
  CreditCardIcon,
  LockIcon,
  LogOutIcon,
  MailIcon,
  ShieldIcon,
  UserIcon,
  ZapIcon,
} from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HulibButton } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ItemSeparator } from '@/components/ui/item'
import { ScrollArea } from '@/components/ui/scroll-area'

const meta: Meta = {
  title: 'Hulib/Sheet',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

// Reusable row for settings-style lists
function SettingRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value?: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#9900ff]/10 text-[#9900ff]">
        <Icon className="size-4" />
      </div>
      <div className="flex-1 min-w-0" style={{ fontFamily: 'Public Sans' }}>
        <p className="text-sm font-bold text-[#333]">{label}</p>
        {value && <p className="text-xs font-medium text-[#999] truncate">{value}</p>}
      </div>
    </div>
  )
}

export const RightPanel: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <HulibButton color="purple" variant="filled" size="sm">Open settings</HulibButton>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Account settings</SheetTitle>
          <SheetDescription>Manage your profile, security, and preferences.</SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1">
          <div className="py-2">
            <p className="px-6 pt-3 pb-1 text-xs font-bold uppercase tracking-wide text-[#999]" style={{ fontFamily: 'Public Sans' }}>Profile</p>
            <div className="flex items-center gap-3 px-6 py-3">
              <Avatar className="size-10 border-3 border-[#333]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-[#9900ff] text-white font-extrabold text-sm">GK</AvatarFallback>
              </Avatar>
              <div style={{ fontFamily: 'Public Sans' }}>
                <p className="text-sm font-extrabold text-[#333]">Geoff K.</p>
                <p className="text-xs font-medium text-[#999]">geoff@hulib.design</p>
              </div>
            </div>
            <ItemSeparator className="mx-6" />
            <SettingRow icon={UserIcon} label="Edit profile" value="Name, photo, and bio" />
            <ItemSeparator className="mx-6" />
            <SettingRow icon={MailIcon} label="Email address" value="geoff@hulib.design" />

            <p className="px-6 pt-5 pb-1 text-xs font-bold uppercase tracking-wide text-[#999]" style={{ fontFamily: 'Public Sans' }}>Security</p>
            <SettingRow icon={LockIcon} label="Password" value="Last changed 3 months ago" />
            <ItemSeparator className="mx-6" />
            <SettingRow icon={ShieldIcon} label="Two-factor auth" value="Enabled" />

            <p className="px-6 pt-5 pb-1 text-xs font-bold uppercase tracking-wide text-[#999]" style={{ fontFamily: 'Public Sans' }}>Preferences</p>
            <SettingRow icon={BellIcon} label="Notifications" value="Email and push" />
            <ItemSeparator className="mx-6" />
            <SettingRow icon={CreditCardIcon} label="Billing" value="Pro plan · renews Aug 1" />
            <ItemSeparator className="mx-6" />
            <SettingRow icon={ZapIcon} label="Integrations" value="3 connected" />
          </div>
        </ScrollArea>

        <SheetFooter>
          <SheetClose asChild>
            <HulibButton color="black" variant="outline" size="sm">Cancel</HulibButton>
          </SheetClose>
          <SheetClose asChild>
            <HulibButton color="purple" variant="filled" size="sm">Save changes</HulibButton>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const LeftPanel: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <HulibButton color="black" variant="outline" size="sm">Open nav</HulibButton>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Hulib UI</SheetTitle>
          <SheetDescription>Design system component library.</SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1">
          <nav className="py-2">
            {[
              { label: 'Getting started', items: ['Introduction', 'Quick start', 'Theming'] },
              { label: 'Components', items: ['Button', 'Dialog', 'Drawer', 'Dropdown', 'Sheet'] },
              { label: 'Resources', items: ['Figma kit', 'GitHub', 'Changelog'] },
            ].map((group) => (
              <div key={group.label}>
                <p className="px-6 pt-4 pb-1 text-xs font-bold uppercase tracking-wide text-[#999]" style={{ fontFamily: 'Public Sans' }}>{group.label}</p>
                {group.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center px-6 py-2.5 text-sm font-bold text-[#333] hover:bg-[#9900ff]/8 hover:text-[#9900ff] transition-colors"
                    style={{ fontFamily: 'Public Sans' }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </ScrollArea>

        <SheetFooter>
          <div className="flex items-center gap-3 w-full">
            <Avatar className="size-9 border-3 border-[#333] shrink-0">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-[#9900ff] text-white font-extrabold text-sm">GK</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0" style={{ fontFamily: 'Public Sans' }}>
              <p className="text-sm font-extrabold text-[#333]">Geoff K.</p>
              <p className="text-xs font-medium text-[#999]">geoff@hulib.design</p>
            </div>
            <button className="p-1.5 rounded-[6px] text-[#999] hover:text-[#333] hover:bg-[#333]/8 transition-colors">
              <LogOutIcon className="size-4" />
            </button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const BottomSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <HulibButton color="purple" variant="filled" size="sm">Share</HulibButton>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Share this file</SheetTitle>
          <SheetDescription>Choose how you'd like to share Q4 Report.pdf</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-2 px-6 py-4">
          {[
            { label: 'Copy link',        description: 'Anyone with the link can view' },
            { label: 'Invite by email',  description: 'Send an invite to specific people' },
            { label: 'Export as PDF',    description: 'Download a copy to your device' },
          ].map((action, i, arr) => (
            <React.Fragment key={action.label}>
              <SheetClose asChild>
                <button
                  className="flex items-center w-full text-left gap-3 rounded-[8px] px-4 py-3 hover:bg-[#9900ff]/8 transition-colors group"
                  style={{ fontFamily: 'Public Sans' }}
                >
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#333] group-hover:text-[#9900ff] transition-colors">{action.label}</p>
                    <p className="text-xs font-medium text-[#999]">{action.description}</p>
                  </div>
                </button>
              </SheetClose>
              {i < arr.length - 1 && <ItemSeparator />}
            </React.Fragment>
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center">Cancel</HulibButton>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const TopSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <HulibButton color="black" variant="outline" size="sm">View notifications</HulibButton>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>You have 3 unread notifications.</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col py-2 max-w-xl mx-auto w-full">
          {[
            { icon: BellIcon,  title: 'New comment on your post', time: '2 min ago',  color: '#9900ff', unread: true },
            { icon: MailIcon,  title: 'You have a new message',   time: '15 min ago', color: '#0066ff', unread: true },
            { icon: ZapIcon,   title: 'Integration connected',    time: '1 hr ago',   color: '#ff8800', unread: true },
            { icon: ShieldIcon,title: 'Security alert resolved',  time: '3 hr ago',   color: '#00cc55', unread: false },
          ].map((n, i, arr) => {
            const Icon = n.icon
            return (
              <React.Fragment key={n.title}>
                <div className="flex items-center gap-3 px-6 py-3">
                  {n.unread && <div className="size-2 rounded-full bg-[#9900ff] shrink-0" />}
                  {!n.unread && <div className="size-2 shrink-0" />}
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px]" style={{ background: `${n.color}1a`, color: n.color }}>
                    <Icon className="size-4" />
                  </div>
                  <div className="flex-1" style={{ fontFamily: 'Public Sans' }}>
                    <p className="text-sm font-bold text-[#333]">{n.title}</p>
                    <p className="text-xs font-medium text-[#999]">{n.time}</p>
                  </div>
                </div>
                {i < arr.length - 1 && <ItemSeparator className="mx-6" />}
              </React.Fragment>
            )
          })}
        </div>

        <SheetFooter className="max-w-xl mx-auto w-full border-t-0 pt-0">
          <SheetClose asChild>
            <HulibButton color="black" variant="outline" size="sm">Dismiss all</HulibButton>
          </SheetClose>
          <SheetClose asChild>
            <HulibButton color="purple" variant="filled" size="sm">Mark all as read</HulibButton>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
