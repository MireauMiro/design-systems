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
  title: 'Robogears/ScrollArea',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

// Wraps any ScrollArea in the cyber-panel structure (diagonal cut, full border, scanlines)
function CyberScrollArea({
  height,
  children,
  ...props
}: { height?: string } & React.ComponentPropsWithoutRef<typeof ScrollArea>) {
  return (
    <div
      className="cyber-panel"
      style={{ '--cyber-corner': '14px' } as React.CSSProperties}
    >
      <div className="cyber-panel__frame">
        <div className="cyber-panel__inner overflow-hidden" style={{ padding: 0 }}>
          <ScrollArea style={{ height }} {...props}>
            {children}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

const labelClass = 'px-4 pt-4 pb-2 text-xs font-bold uppercase tracking-widest text-[hsl(133_30%_40%)]'

// ── Notification list ────────────────────────────────────────────────────────

const notifications = [
  { icon: BellIcon,       title: 'New comment on your post',  time: '2 min ago'   },
  { icon: MailIcon,       title: 'You have a new message',    time: '15 min ago'  },
  { icon: StarIcon,       title: 'Your review was helpful',   time: '1 hr ago'    },
  { icon: ShieldIcon,     title: 'Security alert resolved',   time: '3 hr ago'    },
  { icon: CreditCardIcon, title: 'Payment received',          time: 'Yesterday'   },
  { icon: UserIcon,       title: 'New follower',              time: 'Yesterday'   },
  { icon: LockIcon,       title: 'Password changed',          time: '2 days ago'  },
  { icon: ZapIcon,        title: 'Integration connected',     time: '3 days ago'  },
  { icon: MailIcon,       title: 'Weekly digest ready',       time: '4 days ago'  },
  { icon: StarIcon,       title: '5-star review received',    time: '5 days ago'  },
]

export const NotificationList: Story = {
  render: () => (
    <div className="w-[360px]">
      <CyberScrollArea height="320px">
        <p className={labelClass} style={{ fontFamily: 'JetBrains Mono' }}>Notifications</p>
        {notifications.map((n, i) => {
          const Icon = n.icon
          return (
            <React.Fragment key={n.title}>
              {i > 0 && <ItemSeparator />}
              <div className="flex items-center gap-3 px-4 py-3">
                <div
                  className="flex size-9 shrink-0 items-center justify-center"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                    background: 'hsl(191 100% 50% / 0.10)',
                    color: 'hsl(191 100% 50%)',
                  }}
                >
                  <Icon className="size-4" />
                </div>
                <div className="flex-1 min-w-0" style={{ fontFamily: 'JetBrains Mono' }}>
                  <p className="text-sm font-bold truncate" style={{ color: 'hsl(133 70% 58%)' }}>{n.title}</p>
                  <p className="text-xs font-medium" style={{ color: 'hsl(133 30% 45%)' }}>{n.time}</p>
                </div>
              </div>
            </React.Fragment>
          )
        })}
        <div className="pb-2" />
      </CyberScrollArea>
    </div>
  ),
}

// ── Settings list ────────────────────────────────────────────────────────────

const settings = [
  { icon: UserIcon,       label: 'Profile',        description: 'Name, photo, and bio'   },
  { icon: LockIcon,       label: 'Password',        description: 'Security and 2FA'       },
  { icon: CreditCardIcon, label: 'Billing',         description: 'Plans and payments'     },
  { icon: BellIcon,       label: 'Notifications',   description: 'Alerts and preferences' },
  { icon: ShieldIcon,     label: 'Privacy',         description: 'Data and permissions'   },
  { icon: MailIcon,       label: 'Email',           description: 'Delivery and frequency' },
  { icon: ZapIcon,        label: 'Integrations',    description: 'Apps and connections'   },
  { icon: FileTextIcon,   label: 'Activity log',    description: 'Recent account events'  },
]

export const SettingsList: Story = {
  render: () => (
    <div className="w-[340px]">
      <CyberScrollArea height="300px">
        <p className={labelClass} style={{ fontFamily: 'JetBrains Mono' }}>Account settings</p>
        {settings.map((s, i) => {
          const Icon = s.icon
          return (
            <React.Fragment key={s.label}>
              {i > 0 && <ItemSeparator />}
              <div
                className="flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors"
                style={{ fontFamily: 'JetBrains Mono' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'hsl(191 100% 50% / 0.05)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div
                  className="flex size-9 shrink-0 items-center justify-center"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                    background: 'hsl(191 100% 50% / 0.10)',
                    color: 'hsl(191 100% 50%)',
                  }}
                >
                  <Icon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: 'hsl(133 70% 58%)' }}>{s.label}</p>
                  <p className="text-xs font-medium" style={{ color: 'hsl(133 30% 45%)' }}>{s.description}</p>
                </div>
              </div>
            </React.Fragment>
          )
        })}
        <div className="pb-2" />
      </CyberScrollArea>
    </div>
  ),
}

// ── Team list ────────────────────────────────────────────────────────────────

const members = [
  { name: 'Geoff K.',  role: 'Admin',  email: 'geoff@robogears.gg',  fallback: 'GK', bg: 'hsl(270 100% 40%)' },
  { name: 'Alex L.',   role: 'Editor', email: 'alex@robogears.gg',   fallback: 'AL', bg: 'hsl(220 100% 40%)' },
  { name: 'Sam R.',    role: 'Viewer', email: 'sam@robogears.gg',    fallback: 'SR', bg: 'hsl(145 100% 25%)' },
  { name: 'Jordan M.', role: 'Editor', email: 'jordan@robogears.gg', fallback: 'JM', bg: 'hsl(30 100% 40%)'  },
  { name: 'Casey P.',  role: 'Viewer', email: 'casey@robogears.gg',  fallback: 'CP', bg: 'hsl(191 100% 30%)' },
  { name: 'Morgan T.', role: 'Admin',  email: 'morgan@robogears.gg', fallback: 'MT', bg: 'hsl(270 100% 40%)' },
  { name: 'Riley B.',  role: 'Viewer', email: 'riley@robogears.gg',  fallback: 'RB', bg: 'hsl(220 100% 40%)' },
]

export const TeamList: Story = {
  render: () => (
    <div className="w-[380px]">
      <CyberScrollArea height="320px">
        <p className={labelClass} style={{ fontFamily: 'JetBrains Mono' }}>Team members</p>
        {members.map((m, i) => (
          <React.Fragment key={m.email}>
            {i > 0 && <ItemSeparator />}
            <div className="flex items-center gap-3 px-4 py-3">
              <Avatar className="size-9 shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback
                  className="text-white text-xs font-extrabold"
                  style={{ background: m.bg, fontFamily: 'JetBrains Mono' }}
                >
                  {m.fallback}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0" style={{ fontFamily: 'JetBrains Mono' }}>
                <p className="text-sm font-bold truncate" style={{ color: 'hsl(133 70% 58%)' }}>{m.name}</p>
                <p className="text-xs font-medium truncate" style={{ color: 'hsl(133 30% 45%)' }}>{m.email}</p>
              </div>
              <Badge
                className="shrink-0 text-xs font-bold px-2 py-0.5"
                style={{
                  fontFamily: 'JetBrains Mono',
                  background: m.role === 'Admin' ? 'hsl(133 100% 50% / 0.12)' : 'hsl(191 100% 50% / 0.10)',
                  color: m.role === 'Admin' ? 'hsl(133 100% 50%)' : 'hsl(191 100% 50%)',
                  border: 'none',
                }}
              >
                {m.role}
              </Badge>
            </div>
          </React.Fragment>
        ))}
        <div className="pb-2" />
      </CyberScrollArea>
    </div>
  ),
}

// ── Horizontal tag scroll ────────────────────────────────────────────────────

const tags = [
  'Design systems', 'React', 'TypeScript', 'Tailwind CSS', 'Accessibility',
  'Component libraries', 'Storybook', 'Figma', 'Radix UI', 'Animation',
  'Dark mode', 'Theming', 'Open source', 'Documentation', 'UI patterns',
]

export const HorizontalTags: Story = {
  render: () => (
    <div className="w-[380px]">
      <CyberScrollArea>
        <div className="flex gap-2 p-4 w-max">
          {tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 px-3 py-1.5 text-sm font-bold cursor-pointer whitespace-nowrap transition-colors duration-150"
              style={{
                fontFamily: 'JetBrains Mono',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                background: 'hsl(191 100% 50% / 0.08)',
                color: 'hsl(191 100% 50%)',
                border: '1px solid hsl(191 100% 50% / 0.35)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'hsl(133 100% 50% / 0.12)'
                el.style.color = 'hsl(133 100% 50%)'
                el.style.borderColor = 'hsl(133 100% 50% / 0.55)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'hsl(191 100% 50% / 0.08)'
                el.style.color = 'hsl(191 100% 50%)'
                el.style.borderColor = 'hsl(191 100% 50% / 0.35)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </CyberScrollArea>
    </div>
  ),
}
