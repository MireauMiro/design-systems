import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Hulib/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-[606px]"><Story /></div>],
}
export default meta

type Story = StoryObj<typeof Accordion>

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>This is text</AccordionTrigger>
        <AccordionContent>
          Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Closed: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>This is text</AccordionTrigger>
        <AccordionContent>
          Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="flex flex-col gap-4">
      {['What is Hulib?', 'How do I get started?', 'What components are available?'].map((q, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>
            Here's some body copy for this accordion section. The content provides detailed information about the topic in the trigger.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
