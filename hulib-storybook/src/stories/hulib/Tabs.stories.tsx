import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardBody, CardTitle, CardDescription, CardShadow } from '@/components/ui/card'

const meta: Meta<typeof Tabs> = {
  title: 'Hulib/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab One</TabsTrigger>
        <TabsTrigger value="tab2">Tab Two</TabsTrigger>
        <TabsTrigger value="tab3">Tab Three</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Card>
          <CardBody>
            <CardTitle>Tab One</CardTitle>
            <CardDescription>Content for the first tab.</CardDescription>
          </CardBody>
          <CardShadow />
        </Card>
      </TabsContent>
      <TabsContent value="tab2">
        <Card>
          <CardBody>
            <CardTitle>Tab Two</CardTitle>
            <CardDescription>Content for the second tab.</CardDescription>
          </CardBody>
          <CardShadow />
        </Card>
      </TabsContent>
      <TabsContent value="tab3">
        <Card>
          <CardBody>
            <CardTitle>Tab Three</CardTitle>
            <CardDescription>Content for the third tab.</CardDescription>
          </CardBody>
          <CardShadow />
        </Card>
      </TabsContent>
    </Tabs>
  ),
}
