import type { Meta } from '@storybook/react'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default {
  title: 'Robogears/Miscellaneous',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const SkeletonLoader = {
  name: 'Skeleton',
  render: () => (
    <div className="flex items-center gap-4 w-[360px]">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  ),
}

export const SeparatorStory = {
  name: 'Separator',
  render: () => (
    <div className="w-[360px] flex flex-col gap-4">
      <p className="text-base font-medium text-[hsl(133_70%_58%)]" style={{ fontFamily: 'JetBrains Mono' }}>Above the line</p>
      <Separator />
      <p className="text-base font-medium text-[hsl(133_70%_58%)]" style={{ fontFamily: 'JetBrains Mono' }}>Below the line</p>
      <div className="flex items-center gap-4">
        <p className="text-base font-medium text-[hsl(133_70%_58%)]" style={{ fontFamily: 'JetBrains Mono' }}>Left</p>
        <Separator orientation="vertical" className="h-6" />
        <p className="text-base font-medium text-[hsl(133_70%_58%)]" style={{ fontFamily: 'JetBrains Mono' }}>Right</p>
      </div>
    </div>
  ),
}

export const Typography = {
  name: 'Typography',
  render: () => (
    <div className="bg-black p-8 rounded-2xl flex flex-col gap-6 w-[500px]">
      {[
        { text: 'RoboGears.ra — H1', style: { fontWeight: 900, fontSize: 54, lineHeight: '54px', fontFamily: 'JetBrains Mono', color: 'white' } },
        { text: 'Header 2', style: { fontWeight: 700, fontSize: 32, lineHeight: '32px', fontFamily: 'JetBrains Mono', color: 'white' } },
        { text: 'Header 3', style: { fontWeight: 600, fontSize: 24, lineHeight: '24px', fontFamily: 'JetBrains Mono', color: 'white' } },
        { text: 'Header 4 — Regular', style: { fontWeight: 400, fontSize: 24, lineHeight: '24px', fontFamily: 'JetBrains Mono', color: 'white' } },
        { text: 'Header 5', style: { fontWeight: 700, fontSize: 18, lineHeight: '18px', fontFamily: 'JetBrains Mono', color: 'white' } },
        { text: 'Body 16 — Medium. The quick brown fox jumps over the lazy dog.', style: { fontWeight: 500, fontSize: 16, lineHeight: '24px', fontFamily: 'JetBrains Mono', color: 'white' } },
        { text: 'Caption 12 — Regular. This is some smaller copy for content elements that are not longform. Think of it kinda like caption copy.', style: { fontWeight: 400, fontSize: 12, lineHeight: '18px', fontFamily: 'JetBrains Mono', color: 'white' } },
      ].map(({ text, style }, i) => (
        <p key={i} style={style}>{text}</p>
      ))}
    </div>
  ),
}
