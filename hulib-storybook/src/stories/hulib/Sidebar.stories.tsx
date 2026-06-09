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
  title: 'Hulib/Sidebar',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

// Placeholder for the content area — keeps focus on the sidebar
function ContentPlaceholder() {
  return (
    <SidebarInset className="bg-[#f7f7f7]">
      <div className="flex h-14 shrink-0 items-center gap-3 border-b border-[#333]/15 px-4">
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
          <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#9900ff]">
            <ZapIcon className="size-5 text-white" />
          </div>
          <SidebarMenuLabel className="text-lg font-extrabold text-[#333]">
            Hulib UI
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
          <Avatar className="size-8 shrink-0 border-2 border-[#333]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-[#9900ff] text-white font-extrabold text-xs" style={{ fontFamily: 'Public Sans' }}>GK</AvatarFallback>
          </Avatar>
          <SidebarMenuLabel className="flex flex-col gap-0 flex-1 min-w-0">
            <span className="text-sm font-extrabold text-[#333] truncate" style={{ fontFamily: 'Public Sans' }}>Geoff K.</span>
            <span className="text-xs font-medium text-[#999] truncate" style={{ fontFamily: 'Public Sans' }}>geoff@hulib.design</span>
          </SidebarMenuLabel>
          <SidebarMenuLabel className="flex-none">
            <button className="flex items-center justify-center size-8 rounded-[6px] text-[#999] hover:text-[#333] hover:bg-[#333]/8 transition-colors">
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
    <div className="h-[600px] w-[800px] rounded-[12px] border-3 border-[#333] overflow-hidden flex">
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
    <div className="h-[600px] w-[800px] rounded-[12px] border-3 border-[#333] overflow-hidden flex">
      <SidebarProvider>
        <SidebarInset className="bg-[#f7f7f7]">
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#333]/15 px-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#9900ff]">
                <ZapIcon className="size-5 text-white" />
              </div>
              <span className="text-sm font-extrabold text-[#333]" style={{ fontFamily: 'Public Sans' }}>Hulib UI</span>
            </div>
            <SidebarTrigger />
          </div>
        </SidebarInset>

        <Sidebar side="right">
          <SidebarHeader>
            <div className="flex items-center gap-3 px-3">
              <BoxIcon className="size-5 shrink-0 text-[#333]" />
              <SidebarMenuLabel className="text-base font-extrabold text-[#333]">
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
            <SidebarMenuButton className="text-[#999] hover:text-[#333] hover:bg-[#333]/8">
              <LogOutIcon className="size-4 shrink-0" />
              <SidebarMenuLabel>Reset to defaults</SidebarMenuLabel>
            </SidebarMenuButton>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </div>
  ),
}
