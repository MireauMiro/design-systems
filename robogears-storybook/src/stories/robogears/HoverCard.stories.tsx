import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CalendarIcon, LinkIcon, MapPinIcon, UsersIcon } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger, HoverCardTitle, HoverCardDescription } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const meta: Meta = {
  title: 'Robogears/HoverCard',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

// Trigger: no underline, cyan text, glows on hover + border-bottom expands from center
const linkClass = [
  'relative font-bold text-[hsl(191_100%_50%)] cursor-pointer',
  'transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_10px_hsl(191_100%_50%/0.8)]',
  'after:absolute after:-bottom-px after:left-1/2 after:right-1/2 after:h-[2px] after:bg-current',
  'after:transition-all after:duration-200 hover:after:left-0 hover:after:right-0',
].join(' ')

const accent   = 'hsl(191 100% 50%)'
const green    = 'hsl(133 100% 50%)'
const greenMid = 'hsl(133 70% 58%)'
const greenDim = 'hsl(133 35% 62%)'
const divider  = 'hsl(191 100% 50% / 0.15)'

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className={linkClass} style={{ fontFamily: 'JetBrains Mono' }}>@robogearsgg</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <Avatar className="size-12" style={{ border: `2px solid ${accent}` }}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback style={{ background: 'hsl(191 100% 20%)', color: accent, fontWeight: 800 }}>RG</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <HoverCardTitle>Robogears</HoverCardTitle>
            <p className="text-xs font-medium" style={{ color: greenDim }}>@robogearsgg</p>
          </div>
        </div>
        <HoverCardDescription className="mt-3">
          Building the Robogears component library. Design systems, React, and great UI.
        </HoverCardDescription>
        <div className="mt-3 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-xs" style={{ color: greenDim }}>
            <MapPinIcon className="size-3.5 shrink-0" style={{ color: accent }} />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: accent }}>
            <LinkIcon className="size-3.5 shrink-0" />
            <span className="font-medium">robogears.gg</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: greenDim }}>
            <CalendarIcon className="size-3.5 shrink-0" style={{ color: accent }} />
            <span>Joined June 2024</span>
          </div>
        </div>
        <div className="mt-3 flex gap-4 pt-3" style={{ borderTop: `1px solid ${divider}` }}>
          <div className="flex items-center gap-1 text-xs" style={{ color: greenDim }}>
            <UsersIcon className="size-3.5 shrink-0" style={{ color: accent }} />
            <span><strong style={{ color: green }}>142</strong> following</span>
          </div>
          <div className="flex items-center gap-1 text-xs" style={{ color: greenDim }}>
            <UsersIcon className="size-3.5 shrink-0" style={{ color: accent }} />
            <span><strong style={{ color: green }}>4.8k</strong> followers</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const LinkPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className={linkClass} style={{ fontFamily: 'JetBrains Mono' }}>Robogears Design System</span>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: accent }}>Documentation</p>
        <HoverCardTitle>Robogears Design System</HoverCardTitle>
        <HoverCardDescription className="mt-1.5">
          A comprehensive React component library built with Tailwind CSS and Radix UI primitives.
        </HoverCardDescription>
        <div className="mt-3 flex items-center gap-1.5 text-xs font-medium" style={{ color: accent }}>
          <LinkIcon className="size-3.5 shrink-0" />
          robogears.gg/docs
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const EventPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className={linkClass} style={{ fontFamily: 'JetBrains Mono' }}>Design Systems Conference</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex items-start gap-3">
          <div
            className="flex flex-col items-center justify-center w-12 h-12 shrink-0"
            style={{ border: `2px solid ${accent}`, background: 'hsl(191 100% 5%)' }}
          >
            <span className="text-[10px] font-extrabold uppercase leading-none" style={{ color: accent }}>Sep</span>
            <span className="text-lg font-extrabold leading-none mt-0.5" style={{ color: green }}>14</span>
          </div>
          <div>
            <HoverCardTitle>Design Systems Conference 2025</HoverCardTitle>
            <p className="text-xs font-medium mt-0.5" style={{ color: greenDim }}>San Francisco · In Person</p>
          </div>
        </div>
        <HoverCardDescription className="mt-3">
          Two days of talks, workshops, and hands-on sessions covering design tokens, component APIs, and cross-platform systems.
        </HoverCardDescription>
        <div className="mt-3 flex gap-3 text-xs" style={{ color: greenDim }}>
          <span><strong style={{ color: green }}>420</strong> attending</span>
          <span><strong style={{ color: green }}>12</strong> speakers</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
