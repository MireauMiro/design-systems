import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BellIcon,
  CreditCardIcon,
  FileTextIcon,
  LockIcon,
  MailIcon,
  ShieldIcon,
  StarIcon,
  UserIcon,
  ZapIcon,
} from 'lucide-react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ItemSeparator } from '@/components/ui/item'

const meta: Meta = {
  title: 'Hulib/ScrollArea',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

const containerClass = 'rounded-[12px] border-3 border-[#333]'
const labelClass = 'px-4 pt-4 pb-2 text-xs font-bold uppercase tracking-wide text-[#999]'

// --- Notification list ---

const notifications = [
  { icon: BellIcon,       title: 'New comment on your post',   time: '2 min ago',   color: '#9900ff' },
  { icon: MailIcon,       title: 'You have a new message',     time: '15 min ago',  color: '#0066ff' },
  { icon: StarIcon,       title: 'Your review was helpful',    time: '1 hr ago',    color: '#ff8800' },
  { icon: ShieldIcon,     title: 'Security alert resolved',    time: '3 hr ago',    color: '#00cc55' },
  { icon: CreditCardIcon, title: 'Payment received',           time: 'Yesterday',   color: '#38b6ff' },
  { icon: UserIcon,       title: 'New follower',               time: 'Yesterday',   color: '#9900ff' },
  { icon: LockIcon,       title: 'Password changed',           time: '2 days ago',  color: '#333'    },
  { icon: ZapIcon,        title: 'Integration connected',      time: '3 days ago',  color: '#ff8800' },
  { icon: MailIcon,       title: 'Weekly digest ready',        time: '4 days ago',  color: '#0066ff' },
  { icon: StarIcon,       title: '5-star review received',     time: '5 days ago',  color: '#00cc55' },
]

export const NotificationList: Story = {
  render: () => (
    <div className="w-[360px]">
      <ScrollArea className={cn(containerClass, 'h-[320px]')}>
        <p className={labelClass} style={{ fontFamily: 'Public Sans' }}>Notifications</p>
        {notifications.map((n, i) => {
          const Icon = n.icon
          return (
            <React.Fragment key={n.title}>
              {i > 0 && <ItemSeparator />}
              <div className="flex items-center gap-3 px-4 py-3">
                <div
                  className="flex size-9 shrink-0 items-center justify-center rounded-[8px]"
                  style={{ background: `${n.color}1a`, color: n.color }}
                >
                  <Icon className="size-4" />
                </div>
                <div className="flex-1 min-w-0" style={{ fontFamily: 'Public Sans' }}>
                  <p className="text-sm font-bold text-[#333] truncate">{n.title}</p>
                  <p className="text-xs font-medium text-[#999]">{n.time}</p>
                </div>
              </div>
            </React.Fragment>
          )
        })}
        <div className="pb-2" />
      </ScrollArea>
    </div>
  ),
}

// --- Settings list ---

const settings = [
  { icon: UserIcon,       label: 'Profile',           description: 'Name, photo, and bio' },
  { icon: LockIcon,       label: 'Password',          description: 'Security and 2FA' },
  { icon: CreditCardIcon, label: 'Billing',           description: 'Plans and payments' },
  { icon: BellIcon,       label: 'Notifications',     description: 'Alerts and preferences' },
  { icon: ShieldIcon,     label: 'Privacy',           description: 'Data and permissions' },
  { icon: MailIcon,       label: 'Email',             description: 'Delivery and frequency' },
  { icon: ZapIcon,        label: 'Integrations',      description: 'Apps and connections' },
  { icon: FileTextIcon,   label: 'Activity log',      description: 'Recent account events' },
]

export const SettingsList: Story = {
  render: () => (
    <div className="w-[340px]">
      <ScrollArea className={cn(containerClass, 'h-[300px]')}>
        <p className={labelClass} style={{ fontFamily: 'Public Sans' }}>Account settings</p>
        {settings.map((s, i) => {
          const Icon = s.icon
          return (
            <React.Fragment key={s.label}>
              {i > 0 && <ItemSeparator />}
              <div className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#9900ff]/5 transition-colors">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#9900ff]/10 text-[#9900ff]">
                  <Icon className="size-4" />
                </div>
                <div style={{ fontFamily: 'Public Sans' }}>
                  <p className="text-sm font-bold text-[#333]">{s.label}</p>
                  <p className="text-xs font-medium text-[#999]">{s.description}</p>
                </div>
              </div>
            </React.Fragment>
          )
        })}
        <div className="pb-2" />
      </ScrollArea>
    </div>
  ),
}

// --- Team member list ---

const members = [
  { name: 'Geoff K.',    role: 'Admin',   email: 'geoff@hulib.design',   fallback: 'GK', bg: '#9900ff' },
  { name: 'Alex L.',     role: 'Editor',  email: 'alex@hulib.design',    fallback: 'AL', bg: '#0066ff' },
  { name: 'Sam R.',      role: 'Viewer',  email: 'sam@hulib.design',     fallback: 'SR', bg: '#00cc55' },
  { name: 'Jordan M.',   role: 'Editor',  email: 'jordan@hulib.design',  fallback: 'JM', bg: '#ff8800' },
  { name: 'Casey P.',    role: 'Viewer',  email: 'casey@hulib.design',   fallback: 'CP', bg: '#38b6ff' },
  { name: 'Morgan T.',   role: 'Admin',   email: 'morgan@hulib.design',  fallback: 'MT', bg: '#9900ff' },
  { name: 'Riley B.',    role: 'Viewer',  email: 'riley@hulib.design',   fallback: 'RB', bg: '#0066ff' },
]

export const TeamList: Story = {
  render: () => (
    <div className="w-[380px]">
      <ScrollArea className={cn(containerClass, 'h-[320px]')}>
        <p className={labelClass} style={{ fontFamily: 'Public Sans' }}>Team members</p>
        {members.map((m, i) => (
          <React.Fragment key={m.email}>
            {i > 0 && <ItemSeparator />}
            <div className="flex items-center gap-3 px-4 py-3">
              <Avatar className="size-9 shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback
                  className="text-white text-xs font-extrabold"
                  style={{ background: m.bg, fontFamily: 'Public Sans' }}
                >
                  {m.fallback}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0" style={{ fontFamily: 'Public Sans' }}>
                <p className="text-sm font-bold text-[#333]">{m.name}</p>
                <p className="text-xs font-medium text-[#999] truncate">{m.email}</p>
              </div>
              <Badge
                className="shrink-0 text-xs font-bold rounded-[6px] px-2 py-0.5"
                style={{
                  fontFamily: 'Public Sans',
                  background: m.role === 'Admin' ? '#9900ff1a' : '#3331a',
                  color: m.role === 'Admin' ? '#9900ff' : '#999',
                  border: 'none',
                }}
              >
                {m.role}
              </Badge>
            </div>
          </React.Fragment>
        ))}
        <div className="pb-2" />
      </ScrollArea>
    </div>
  ),
}

// --- Horizontal tag scroll ---

const tags = [
  'Design systems', 'React', 'TypeScript', 'Tailwind CSS', 'Accessibility',
  'Component libraries', 'Storybook', 'Figma', 'Radix UI', 'Animation',
  'Dark mode', 'Theming', 'Open source', 'Documentation', 'UI patterns',
]

export const HorizontalTags: Story = {
  render: () => (
    <div className="w-[380px]">
      <ScrollArea className={cn(containerClass, 'w-full')}>
        <div className="flex gap-2 p-4 w-max">
          {tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 rounded-[8px] border-3 border-[#333] px-3 py-1.5 text-sm font-bold text-[#333] cursor-pointer hover:border-[#9900ff] hover:text-[#9900ff] hover:bg-[#9900ff]/5 transition-colors whitespace-nowrap"
              style={{ fontFamily: 'Public Sans' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  ),
}

// cn helper (not imported at top since it's in @/lib/utils — inline for story clarity)
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}
