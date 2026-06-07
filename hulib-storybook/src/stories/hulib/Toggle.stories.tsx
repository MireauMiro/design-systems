import type { Meta } from '@storybook/react'
import { Toggle } from '@/components/ui/toggle'
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

export default {
  title: 'Hulib/Toggle',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const Default = {
  render: () => <Toggle>Toggle</Toggle>,
}

export const WithIcon = {
  render: () => (
    <div className="flex gap-2">
      <Toggle aria-label="Bold"><BoldIcon className="size-4" /></Toggle>
      <Toggle aria-label="Italic"><ItalicIcon className="size-4" /></Toggle>
      <Toggle aria-label="Underline"><UnderlineIcon className="size-4" /></Toggle>
    </div>
  ),
}

export const Variants = {
  render: () => (
    <div className="flex gap-3">
      <Toggle variant="default">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-3">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="default">Default</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
}
