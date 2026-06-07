import type { Meta } from '@storybook/react'
import { Card, CardBody, CardImage, CardTitle, CardDescription, CardFooter, CardShadow } from '@/components/ui/card'
import { HulibButton } from '@/components/ui/button'

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80'

export default {
  title: 'Hulib/Card',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story: any) => <div className="w-[284px]"><Story /></div>],
} satisfies Meta

export const Default = {
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>This is text</CardTitle>
        <CardDescription>
          Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.
        </CardDescription>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}

export const WithCTA = {
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>This is text</CardTitle>
        <CardDescription>
          Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.
        </CardDescription>
        <CardFooter>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center">
            Button Text
          </HulibButton>
        </CardFooter>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}

export const WithImage = {
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>This is text</CardTitle>
        <CardImage src={PLACEHOLDER_IMG} alt="Card image" />
        <CardDescription>
          Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.
        </CardDescription>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}

export const WithImageAndCTA = {
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>This is text</CardTitle>
        <CardImage src={PLACEHOLDER_IMG} alt="Card image" />
        <CardDescription>
          Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.
        </CardDescription>
        <CardFooter>
          <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center">
            Button Text
          </HulibButton>
        </CardFooter>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Card>
        <CardBody>
          <CardTitle>No image, no CTA</CardTitle>
          <CardDescription>Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.</CardDescription>
        </CardBody>
        <CardShadow />
      </Card>
      <Card>
        <CardBody>
          <CardTitle>No image, with CTA</CardTitle>
          <CardDescription>Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.</CardDescription>
          <CardFooter>
            <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center">Button Text</HulibButton>
          </CardFooter>
        </CardBody>
        <CardShadow />
      </Card>
      <Card>
        <CardBody>
          <CardTitle>With image and CTA</CardTitle>
          <CardImage src={PLACEHOLDER_IMG} alt="Card image" />
          <CardDescription>Here's some body copy for this damn card. This copy is a bit smaller since it's not a long form bit of content.</CardDescription>
          <CardFooter>
            <HulibButton color="black" variant="outline" size="sm" className="w-full justify-center">Button Text</HulibButton>
          </CardFooter>
        </CardBody>
        <CardShadow />
      </Card>
    </div>
  ),
}
