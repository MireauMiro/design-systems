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
import { HulibButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const meta: Meta = {
  title: 'Hulib/NavigationMenu',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

// Link row inside a content panel
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
    <NavigationMenuLink
      href={href}
      className="flex gap-3 items-center rounded-[8px] px-3 py-2.5 no-underline outline-none transition-colors cursor-pointer hover:bg-[#9900ff]/10 group"
      style={{ fontFamily: 'Public Sans' }}
    >
      <div className="flex size-8 shrink-0 items-center justify-center rounded-[6px] bg-[#9900ff]/10 text-[#9900ff] group-hover:bg-[#9900ff] group-hover:text-white transition-colors">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-sm font-bold text-[#333] group-hover:text-[#9900ff] transition-colors">{title}</div>
        <div className="text-xs font-medium text-[#999] leading-relaxed">{description}</div>
      </div>
    </NavigationMenuLink>
  )
}

// Section label inside panels (matches Hulib ItemHeader style)
function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="px-3 pt-3 pb-1 text-xs font-bold uppercase tracking-wide text-[#999]"
      style={{ fontFamily: 'Public Sans' }}
    >
      {children}
    </p>
  )
}

export const SimpleLinks: Story = {
  render: () => (
    <div className="py-16 px-8">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {['Home', 'Components', 'Documentation', 'Pricing', 'Blog'].map((label) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle())}>
                {label}
              </NavigationMenuLink>
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
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2 md:w-[440px]">
                <PanelLabel>Start here</PanelLabel>
                <div className="grid grid-cols-2 gap-0.5">
                  <NavLinkItem icon={RocketIcon} title="Quick start" description="Set up Hulib in minutes." />
                  <NavLinkItem icon={BookOpenIcon} title="Introduction" description="Core concepts of the system." />
                  <NavLinkItem icon={PaletteIcon} title="Design tokens" description="Colors, spacing, typography." />
                  <NavLinkItem icon={CompassIcon} title="Theming" description="Customize to your brand." />
                </div>
                <div className="mt-3 mx-3 mb-3 pt-3 border-t border-[#333]/15 flex gap-2">
                  <HulibButton color="purple" variant="filled" size="sm">Read the docs</HulibButton>
                  <HulibButton color="black" variant="outline" size="sm">View on GitHub</HulibButton>
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
                  <NavLinkItem icon={LayoutIcon} title="Layout" description="Containers, grids, structure." />
                  <NavLinkItem icon={BoxIcon} title="Surfaces" description="Cards, dialogs, drawers." />
                  <NavLinkItem icon={ZapIcon} title="Actions" description="Buttons, toggles, controls." />
                  <NavLinkItem icon={LayersIcon} title="Navigation" description="Menus, breadcrumbs, tabs." />
                  <NavLinkItem icon={SparklesIcon} title="Data display" description="Tables, badges, charts." />
                  <NavLinkItem icon={CodeIcon} title="Utilities" description="Separators, skeletons." />
                </div>
                <div className="mt-3 mx-3 mb-3 pt-3 border-t border-[#333]/15">
                  <HulibButton color="purple" variant="filled" size="sm">Browse all components</HulibButton>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle())}>
              Changelog
            </NavigationMenuLink>
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
                <div className="grid md:grid-cols-[200px_1fr] gap-2">
                  {/* Featured purple card */}
                  <div className="flex flex-col justify-between rounded-[10px] bg-[#9900ff] p-4">
                    <div>
                      <SparklesIcon className="size-6 text-white/80 mb-3" />
                      <div className="text-base font-extrabold text-white mb-1" style={{ fontFamily: 'Public Sans' }}>Hulib UI</div>
                      <div className="text-xs font-medium text-white/70 leading-relaxed" style={{ fontFamily: 'Public Sans' }}>
                        Beautiful, accessible components built for modern React apps.
                      </div>
                    </div>
                    <div className="mt-4">
                      <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center">
                        Get started
                      </HulibButton>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-0.5">
                    <PanelLabel>Explore</PanelLabel>
                    <NavLinkItem icon={BoxIcon} title="Components" description="70+ production-ready UI components." />
                    <NavLinkItem icon={FileTextIcon} title="Templates" description="Starter layouts and page templates." />
                    <NavLinkItem icon={PaletteIcon} title="Figma kit" description="Design files synced with the component library." />
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
                  <NavLinkItem icon={BookOpenIcon} title="Documentation" description="Guides, API references, and examples." />
                  <NavLinkItem icon={CodeIcon} title="GitHub" description="Browse source code and contribute." />
                  <NavLinkItem icon={RocketIcon} title="Releases" description="Version history and migration guides." />
                </div>
                <div className="mt-3 mx-3 mb-3 pt-3 border-t border-[#333]/15 flex gap-2">
                  <HulibButton color="black" variant="outline" size="sm">View on GitHub</HulibButton>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle())}>
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}
