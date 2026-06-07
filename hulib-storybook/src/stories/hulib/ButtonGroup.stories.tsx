import type { Meta } from '@storybook/react'
import { HulibButton } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon, BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

export default {
  title: 'Hulib/Button Group',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const FilledHorizontal = {
  name: 'Filled – Horizontal',
  render: () => (
    <ButtonGroup>
      <HulibButton color="purple" size="lg">Left</HulibButton>
      <HulibButton color="purple" size="lg">Center</HulibButton>
      <HulibButton color="purple" size="lg">Right</HulibButton>
    </ButtonGroup>
  ),
}

export const OutlineHorizontal = {
  name: 'Outline – Horizontal',
  render: () => (
    <ButtonGroup>
      <HulibButton color="black" variant="outline" size="lg">Left</HulibButton>
      <HulibButton color="black" variant="outline" size="lg">Center</HulibButton>
      <HulibButton color="black" variant="outline" size="lg">Right</HulibButton>
    </ButtonGroup>
  ),
}

export const FilledVertical = {
  name: 'Filled – Vertical',
  render: () => (
    <ButtonGroup orientation="vertical">
      <HulibButton color="blue" size="lg">Top</HulibButton>
      <HulibButton color="blue" size="lg">Middle</HulibButton>
      <HulibButton color="blue" size="lg">Bottom</HulibButton>
    </ButtonGroup>
  ),
}

export const OutlineVertical = {
  name: 'Outline – Vertical',
  render: () => (
    <ButtonGroup orientation="vertical">
      <HulibButton color="black" variant="outline" size="lg">Top</HulibButton>
      <HulibButton color="black" variant="outline" size="lg">Middle</HulibButton>
      <HulibButton color="black" variant="outline" size="lg">Bottom</HulibButton>
    </ButtonGroup>
  ),
}

export const WithIcons = {
  name: 'With Icons',
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <ButtonGroup>
        <HulibButton color="black" variant="outline" size="sm" leftIcon={<AlignLeftIcon className="size-4" />}>Left</HulibButton>
        <HulibButton color="black" variant="outline" size="sm" leftIcon={<AlignCenterIcon className="size-4" />}>Center</HulibButton>
        <HulibButton color="black" variant="outline" size="sm" leftIcon={<AlignRightIcon className="size-4" />}>Right</HulibButton>
      </ButtonGroup>
      <ButtonGroup>
        <HulibButton color="purple" size="sm" leftIcon={<BoldIcon className="size-4" />}>Bold</HulibButton>
        <HulibButton color="purple" size="sm" leftIcon={<ItalicIcon className="size-4" />}>Italic</HulibButton>
        <HulibButton color="purple" size="sm" leftIcon={<UnderlineIcon className="size-4" />}>Underline</HulibButton>
      </ButtonGroup>
    </div>
  ),
}

export const SmallSizes = {
  name: 'Small Size',
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <ButtonGroup>
        <HulibButton color="green" size="sm">Option A</HulibButton>
        <HulibButton color="green" size="sm">Option B</HulibButton>
        <HulibButton color="green" size="sm">Option C</HulibButton>
      </ButtonGroup>
      <ButtonGroup>
        <HulibButton color="black" variant="outline" size="sm">Option A</HulibButton>
        <HulibButton color="black" variant="outline" size="sm">Option B</HulibButton>
        <HulibButton color="black" variant="outline" size="sm">Option C</HulibButton>
      </ButtonGroup>
    </div>
  ),
}

export const TwoButton = {
  name: 'Two-Button Split',
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <ButtonGroup>
        <HulibButton color="purple" size="lg">Save</HulibButton>
        <HulibButton color="purple" variant="outline" size="lg">Cancel</HulibButton>
      </ButtonGroup>
    </div>
  ),
}
