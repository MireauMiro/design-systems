import type { Meta } from '@storybook/react'
import { RobogearsButton } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon, BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

export default {
  title: 'Robogears/Button Group',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const FilledHorizontal = {
  name: 'Filled – Horizontal',
  render: () => (
    <ButtonGroup>
      <RobogearsButton color="violet" size="lg">Left</RobogearsButton>
      <RobogearsButton color="violet" size="lg">Center</RobogearsButton>
      <RobogearsButton color="violet" size="lg">Right</RobogearsButton>
    </ButtonGroup>
  ),
}

export const OutlineHorizontal = {
  name: 'Outline – Horizontal',
  render: () => (
    <ButtonGroup>
      <RobogearsButton color="white" variant="outline" size="lg">Left</RobogearsButton>
      <RobogearsButton color="white" variant="outline" size="lg">Center</RobogearsButton>
      <RobogearsButton color="white" variant="outline" size="lg">Right</RobogearsButton>
    </ButtonGroup>
  ),
}

export const FilledVertical = {
  name: 'Filled – Vertical',
  render: () => (
    <ButtonGroup orientation="vertical">
      <RobogearsButton color="cyan" size="lg">Top</RobogearsButton>
      <RobogearsButton color="cyan" size="lg">Middle</RobogearsButton>
      <RobogearsButton color="cyan" size="lg">Bottom</RobogearsButton>
    </ButtonGroup>
  ),
}

export const OutlineVertical = {
  name: 'Outline – Vertical',
  render: () => (
    <ButtonGroup orientation="vertical">
      <RobogearsButton color="white" variant="outline" size="lg">Top</RobogearsButton>
      <RobogearsButton color="white" variant="outline" size="lg">Middle</RobogearsButton>
      <RobogearsButton color="white" variant="outline" size="lg">Bottom</RobogearsButton>
    </ButtonGroup>
  ),
}

export const WithIcons = {
  name: 'With Icons',
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <ButtonGroup>
        <RobogearsButton color="white" variant="outline" size="sm" leftIcon={<AlignLeftIcon className="size-4" />}>Left</RobogearsButton>
        <RobogearsButton color="white" variant="outline" size="sm" leftIcon={<AlignCenterIcon className="size-4" />}>Center</RobogearsButton>
        <RobogearsButton color="white" variant="outline" size="sm" leftIcon={<AlignRightIcon className="size-4" />}>Right</RobogearsButton>
      </ButtonGroup>
      <ButtonGroup>
        <RobogearsButton color="violet" size="sm" leftIcon={<BoldIcon className="size-4" />}>Bold</RobogearsButton>
        <RobogearsButton color="violet" size="sm" leftIcon={<ItalicIcon className="size-4" />}>Italic</RobogearsButton>
        <RobogearsButton color="violet" size="sm" leftIcon={<UnderlineIcon className="size-4" />}>Underline</RobogearsButton>
      </ButtonGroup>
    </div>
  ),
}

export const SmallSizes = {
  name: 'Small Size',
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <ButtonGroup>
        <RobogearsButton color="cyan" size="sm">Option A</RobogearsButton>
        <RobogearsButton color="cyan" size="sm">Option B</RobogearsButton>
        <RobogearsButton color="cyan" size="sm">Option C</RobogearsButton>
      </ButtonGroup>
      <ButtonGroup>
        <RobogearsButton color="white" variant="outline" size="sm">Option A</RobogearsButton>
        <RobogearsButton color="white" variant="outline" size="sm">Option B</RobogearsButton>
        <RobogearsButton color="white" variant="outline" size="sm">Option C</RobogearsButton>
      </ButtonGroup>
    </div>
  ),
}

export const TwoButton = {
  name: 'Two-Button Split',
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <ButtonGroup>
        <RobogearsButton color="violet" size="lg">Save</RobogearsButton>
        <RobogearsButton color="violet" variant="outline" size="lg">Cancel</RobogearsButton>
      </ButtonGroup>
    </div>
  ),
}
