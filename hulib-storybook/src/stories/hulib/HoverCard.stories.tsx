import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CalendarIcon, LinkIcon, MapPinIcon, UsersIcon } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const meta: Meta = {
  title: 'Hulib/HoverCard',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

const linkClass = 'font-bold text-[#9900ff] underline underline-offset-4 cursor-pointer hover:text-[#6a00b1] transition-colors'

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className={linkClass} style={{ fontFamily: 'Public Sans' }}>@hulibdesign</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <Avatar className="size-12 border-3 border-[#333]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-[#9900ff] text-white font-extrabold">HD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-extrabold text-[#333]">Hulib Design</p>
            <p className="text-xs font-medium text-[#999]">@hulibdesign</p>
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-[#333] leading-relaxed">
          Building the Hulib component library. Design systems, React, and great UI.
        </p>
        <div className="mt-3 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-xs text-[#999]">
            <MapPinIcon className="size-3.5 shrink-0" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#999]">
            <LinkIcon className="size-3.5 shrink-0" />
            <span className="text-[#9900ff] font-medium">hulib.design</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#999]">
            <CalendarIcon className="size-3.5 shrink-0" />
            <span>Joined June 2024</span>
          </div>
        </div>
        <div className="mt-3 flex gap-4 border-t border-[#333]/20 pt-3">
          <div className="flex items-center gap-1 text-xs text-[#999]">
            <UsersIcon className="size-3.5 shrink-0" />
            <span><strong className="text-[#333]">142</strong> following</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#999]">
            <UsersIcon className="size-3.5 shrink-0" />
            <span><strong className="text-[#333]">4.8k</strong> followers</span>
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
        <span className={linkClass} style={{ fontFamily: 'Public Sans' }}>Hulib Design System</span>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <p className="text-xs font-bold uppercase tracking-wide text-[#999] mb-1">Documentation</p>
        <p className="text-sm font-extrabold text-[#333]">Hulib Design System</p>
        <p className="mt-1.5 text-sm font-medium text-[#999] leading-relaxed">
          A comprehensive React component library built with Tailwind CSS and Radix UI primitives.
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-[#9900ff] font-medium">
          <LinkIcon className="size-3.5 shrink-0" />
          hulib.design/docs
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const EventPreview: Story = {
  render: () => (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <span className={linkClass} style={{ fontFamily: 'Public Sans' }}>Design Systems Conference</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center justify-center rounded-[8px] border-3 border-[#333] w-12 h-12 shrink-0">
            <span className="text-[10px] font-extrabold uppercase text-[#9900ff] leading-none">Sep</span>
            <span className="text-lg font-extrabold text-[#333] leading-none">14</span>
          </div>
          <div>
            <p className="text-sm font-extrabold text-[#333]">Design Systems Conference 2025</p>
            <p className="text-xs font-medium text-[#999] mt-0.5">San Francisco · In Person</p>
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-[#333] leading-relaxed">
          Two days of talks, workshops, and hands-on sessions covering design tokens, component APIs, and cross-platform systems.
        </p>
        <div className="mt-3 flex gap-3 text-xs text-[#999]">
          <span><strong className="text-[#333]">420</strong> attending</span>
          <span><strong className="text-[#333]">12</strong> speakers</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
