import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BadgeCheckIcon,
  BellIcon,
  BookOpenIcon,
  BoxIcon,
  CreditCardIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  PaletteIcon,
  SettingsIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuLabel,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const meta: Meta = {
  title: 'Robogears/Sidebar',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

// Placeholder for the content area — keeps focus on the sidebar
function ContentPlaceholder() {
  return (
    <SidebarInset className="bg-[#f7f7f7]">
      <div className="flex h-14 shrink-0 items-center gap-3 border-b border-[hsl(191_100%_50%/0.15)] px-4">
        <SidebarTrigger />
      </div>
    </SidebarInset>
  )
}

// ---------------------------------------------------------------------------
// App navigation sidebar
// ---------------------------------------------------------------------------

const navMain = [
  { icon: LayoutDashboardIcon, label: 'Dashboard',     badge: undefined, active: true  },
  { icon: BoxIcon,             label: 'Components',    badge: undefined, active: false },
  { icon: FileTextIcon,        label: 'Documents',     badge: '12',      active: false },
  { icon: UsersIcon,           label: 'Team',          badge: undefined, active: false },
  { icon: BellIcon,            label: 'Notifications', badge: '3',       active: false },
]

const navResources = [
  { icon: PaletteIcon,  label: 'Design tokens' },
  { icon: SparklesIcon, label: 'Components'    },
  { icon: BookOpenIcon, label: 'Documentation' },
]

const navAccount = [
  { icon: SettingsIcon,   label: 'Settings' },
  { icon: CreditCardIcon, label: 'Billing'  },
  { icon: BadgeCheckIcon, label: 'Upgrade'  },
]

function AppSidebar() {
  return (
    <Sidebar>
      {/* Logo */}
      <SidebarHeader>
        <div className="flex items-center gap-3 px-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[hsl(133_100%_50%/0.2)]">
            <ZapIcon className="size-5 text-white" />
          </div>
          <SidebarMenuLabel className="text-lg font-extrabold text-[hsl(133_70%_58%)]">
            RoboGears
          </SidebarMenuLabel>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navMain.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton isActive={item.active}>
                    <item.icon className="size-4 shrink-0" />
                    <SidebarMenuLabel>{item.label}</SidebarMenuLabel>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navResources.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton>
                    <item.icon className="size-4 shrink-0" />
                    <SidebarMenuLabel>{item.label}</SidebarMenuLabel>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navAccount.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton>
                    <item.icon className="size-4 shrink-0" />
                    <SidebarMenuLabel>{item.label}</SidebarMenuLabel>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User footer */}
      <SidebarFooter>
        <div className="flex items-center gap-3 px-3 py-2.5">
          <Avatar className="size-8 shrink-0 border-2 border-[hsl(191_100%_50%/0.3)]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-[hsl(133_100%_50%/0.3)] text-[hsl(133_100%_50%)] font-extrabold text-xs" style={{ fontFamily: 'JetBrains Mono' }}>GK</AvatarFallback>
          </Avatar>
          <SidebarMenuLabel className="flex flex-col gap-0 flex-1 min-w-0">
            <span className="text-sm font-extrabold text-[hsl(133_70%_58%)] truncate" style={{ fontFamily: 'JetBrains Mono' }}>Geoff K.</span>
            <span className="text-xs font-medium text-[hsl(133_30%_45%)] truncate" style={{ fontFamily: 'JetBrains Mono' }}>geoff@robogears.gg</span>
          </SidebarMenuLabel>
          <SidebarMenuLabel className="flex-none">
            <button className="flex items-center justify-center size-8 rounded-[6px] text-[hsl(133_30%_45%)] hover:text-[hsl(133_70%_58%)] hover:bg-[hsl(133_100%_50%/0.08)] transition-colors">
              <LogOutIcon className="size-4" />
            </button>
          </SidebarMenuLabel>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export const Default: Story = {
  render: () => (
    <div className="h-[600px] w-[800px] rounded-[12px] border-2 border-[hsl(191_100%_50%/0.3)] overflow-hidden flex">
      <SidebarProvider>
        <AppSidebar />
        <ContentPlaceholder />
      </SidebarProvider>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Right-side properties panel
// ---------------------------------------------------------------------------

const navLayout = ['Position', 'Size', 'Padding', 'Margin', 'Constraints']
const navAppearance = ['Fill', 'Border', 'Shadow', 'Opacity', 'Blend mode']

export const RightSidebar: Story = {
  render: () => (
    <div className="h-[600px] w-[800px] rounded-[12px] border-2 border-[hsl(191_100%_50%/0.3)] overflow-hidden flex">
      <SidebarProvider>
        <SidebarInset className="bg-[#f7f7f7]">
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-[hsl(191_100%_50%/0.15)] px-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[hsl(133_100%_50%/0.2)]">
                <ZapIcon className="size-5 text-white" />
              </div>
              <span className="text-sm font-extrabold text-[hsl(133_70%_58%)]" style={{ fontFamily: 'JetBrains Mono' }}>RoboGears</span>
            </div>
            <SidebarTrigger />
          </div>
        </SidebarInset>

        <Sidebar side="right">
          <SidebarHeader>
            <div className="flex items-center gap-3 px-3">
              <BoxIcon className="size-5 shrink-0 text-[hsl(133_70%_58%)]" />
              <SidebarMenuLabel className="text-base font-extrabold text-[hsl(133_70%_58%)]">
                Properties
              </SidebarMenuLabel>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Layout</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navLayout.map((item) => (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton isActive={item === 'Size'}>
                        <BoxIcon className="size-4 shrink-0" />
                        <SidebarMenuLabel>{item}</SidebarMenuLabel>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Appearance</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navAppearance.map((item) => (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton>
                        <PaletteIcon className="size-4 shrink-0" />
                        <SidebarMenuLabel>{item}</SidebarMenuLabel>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenuButton className="text-[hsl(133_30%_45%)] hover:text-[hsl(133_70%_58%)] hover:bg-[hsl(133_100%_50%/0.08)]">
              <LogOutIcon className="size-4 shrink-0" />
              <SidebarMenuLabel>Reset to defaults</SidebarMenuLabel>
            </SidebarMenuButton>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </div>
  ),
}
