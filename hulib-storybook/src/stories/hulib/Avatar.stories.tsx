import type { Meta } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default {
  title: 'Hulib/Avatar',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const WithImage = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>GK</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback = {
  render: () => (
    <Avatar>
      <AvatarFallback>GK</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="size-8">
        <AvatarFallback className="text-xs">GK</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback>GK</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarFallback className="text-lg">GK</AvatarFallback>
      </Avatar>
      <Avatar className="size-20">
        <AvatarFallback className="text-xl">GK</AvatarFallback>
      </Avatar>
    </div>
  ),
}
