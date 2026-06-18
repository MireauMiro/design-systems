import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BookOpenIcon,
  BoxIcon,
  CodeIcon,
  CompassIcon,
  FileTextIcon,
  LayersIcon,
  LayoutIcon,
  PaletteIcon,
  RocketIcon,
  SparklesIcon,
  ZapIcon,
} from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { RobogearsButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const meta: Meta = {
  title: 'Robogears/NavigationMenu',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

// ── Link row inside a content panel ──
function NavLinkItem({
  title,
  description,
  icon: Icon,
  href = '#',
}: {
  title: string
  description: string
  icon: React.ElementType
  href?: string
}) {
  return (
    <NavigationMenuLink href={href} className="rg-nav-content-link">
      <div className="rg-nav-content-icon">
        <Icon className="size-4" />
      </div>
      <div>
        <div
          className="text-sm font-bold"
          style={{ color: 'hsl(133 70% 58%)', fontFamily: 'JetBrains Mono' }}
        >
          {title}
        </div>
        <div
          className="text-xs font-medium leading-relaxed"
          style={{ color: 'hsl(133 28% 42%)', fontFamily: 'JetBrains Mono' }}
        >
          {description}
        </div>
      </div>
    </NavigationMenuLink>
  )
}

// ── Section label inside panels ──
function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="px-3 pt-3 pb-1 text-xs font-bold uppercase tracking-widest"
      style={{ color: 'hsl(133 30% 40%)', fontFamily: 'JetBrains Mono' }}
    >
      {children}
    </p>
  )
}

// ── Featured cyber button (same diagonal shape as nav items) ──
function FeaturedButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="rg-nav-host" style={{ width: '100%' }}>
      <span className="rg-nav-frame" style={{ width: '100%', justifyContent: 'center' }}>
        <span className="rg-nav-inner" style={{ width: '100%', justifyContent: 'center', padding: '9px 16px' }}>
          {children}
        </span>
      </span>
    </div>
  )
}

// ── Plain nav link helper: wraps text in frame+inner for full diagonal styling ──
function NavPlainLink({ href = '#', children }: { href?: string; children: React.ReactNode }) {
  return (
    <NavigationMenuLink href={href} className={cn(navigationMenuTriggerStyle())}>
      <span className="rg-nav-frame">
        <span className="rg-nav-inner">{children}</span>
      </span>
    </NavigationMenuLink>
  )
}

export const SimpleLinks: Story = {
  render: () => (
    <div className="py-16 px-8">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {['Home', 'Gear', 'Arena', 'Intel', 'Uplink'].map((label) => (
            <NavigationMenuItem key={label}>
              <NavPlainLink>{label}</NavPlainLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}

export const WithDropdowns: Story = {
  render: () => (
    <div className="py-16 px-8">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Deploy</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2 md:w-[440px]">
                <PanelLabel>Initialization</PanelLabel>
                <div className="grid grid-cols-2 gap-0.5">
                  <NavLinkItem icon={RocketIcon}    title="Quick start"     description="Boot up a new project in minutes." />
                  <NavLinkItem icon={BookOpenIcon}  title="System manual"   description="Core concepts and architecture." />
                  <NavLinkItem icon={PaletteIcon}   title="Design tokens"   description="Colors, spacing, and typography." />
                  <NavLinkItem icon={CompassIcon}   title="Configuration"   description="Customize to your loadout." />
                </div>
                <div
                  className="mt-3 mx-3 mb-3 pt-3 flex gap-2"
                  style={{ borderTop: '1px solid hsl(191 100% 50% / 0.15)' }}
                >
                  <RobogearsButton color="violet" variant="filled" size="sm">Read the docs</RobogearsButton>
                  <RobogearsButton color="white" variant="outline" size="sm">View on GitHub</RobogearsButton>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2 md:w-[440px]">
                <PanelLabel>Browse</PanelLabel>
                <div className="grid grid-cols-2 gap-0.5">
                  <NavLinkItem icon={LayoutIcon}    title="Layout"        description="Containers, grids, and structure." />
                  <NavLinkItem icon={BoxIcon}       title="Surfaces"      description="Panels, dialogs, and drawers." />
                  <NavLinkItem icon={ZapIcon}       title="Controls"      description="Buttons, toggles, and inputs." />
                  <NavLinkItem icon={LayersIcon}    title="Navigation"    description="Menus, breadcrumbs, and tabs." />
                  <NavLinkItem icon={SparklesIcon}  title="Data display"  description="Tables, badges, and feeds." />
                  <NavLinkItem icon={CodeIcon}      title="Utilities"     description="Separators and skeletons." />
                </div>
                <div
                  className="mt-3 mx-3 mb-3 pt-3"
                  style={{ borderTop: '1px solid hsl(191 100% 50% / 0.15)' }}
                >
                  <RobogearsButton color="violet" variant="filled" size="sm">Browse all components</RobogearsButton>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavPlainLink>Changelog</NavPlainLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}

export const WithFeaturedPanel: Story = {
  render: () => (
    <div className="py-16 px-8">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2 md:w-[520px]">
                <div className="grid md:grid-cols-[196px_1fr] gap-2">
                  {/* Featured cyber card */}
                  <div
                    className="cyber-panel"
                    style={{ '--cyber-corner': '10px' } as React.CSSProperties}
                  >
                    <div className="cyber-panel__frame">
                      <div
                        className="cyber-panel__inner flex flex-col justify-between p-4 pb-6"
                        style={{ minHeight: '180px' }}
                      >
                        <div>
                          <ZapIcon
                            className="size-6 mb-3"
                            style={{ color: 'hsl(133 100% 50%)' }}
                          />
                          <div
                            className="text-base font-extrabold mb-1 uppercase tracking-wide"
                            style={{ fontFamily: 'Cyber, JetBrains Mono, monospace', color: 'hsl(133 100% 50%)' }}
                          >
                            Robogears
                          </div>
                          <div
                            className="text-xs font-medium leading-relaxed"
                            style={{ color: 'hsl(133 28% 50%)' }}
                          >
                            Cyberpunk component system for the next generation of games.
                          </div>
                        </div>
                        <div className="mt-5">
                          <FeaturedButton>Get started</FeaturedButton>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-0.5">
                    <PanelLabel>Explore</PanelLabel>
                    <NavLinkItem icon={BoxIcon}      title="Components"  description="70+ production-ready UI parts." />
                    <NavLinkItem icon={FileTextIcon} title="Templates"   description="Starter layouts and page kits." />
                    <NavLinkItem icon={PaletteIcon}  title="Figma kit"   description="Design files synced to the system." />
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2 md:w-[360px]">
                <PanelLabel>Resources</PanelLabel>
                <div className="flex flex-col gap-0.5">
                  <NavLinkItem icon={BookOpenIcon} title="Documentation" description="Guides, API refs, and examples." />
                  <NavLinkItem icon={CodeIcon}     title="GitHub"        description="Browse source and contribute." />
                  <NavLinkItem icon={RocketIcon}   title="Releases"      description="Version history and migration." />
                </div>
                <div
                  className="mt-3 mx-3 mb-3 pt-3 flex gap-2"
                  style={{ borderTop: '1px solid hsl(191 100% 50% / 0.15)' }}
                >
                  <RobogearsButton color="white" variant="outline" size="sm">View on GitHub</RobogearsButton>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavPlainLink>Pricing</NavPlainLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}
