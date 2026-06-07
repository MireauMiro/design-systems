import type { Meta } from '@storybook/react'
import { SlashIcon } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'

export default {
  title: 'Hulib/Breadcrumb',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const Default = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const WithEllipsis = {
  name: 'With Ellipsis',
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const SlashSeparator = {
  name: 'Slash Separator',
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const Long = {
  name: 'Long Trail',
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        {['Home', 'Dashboard', 'Settings', 'Account'].map((label, i, arr) => (
          <>
            <BreadcrumbItem key={label}>
              {i < arr.length - 1
                ? <BreadcrumbLink href="#">{label}</BreadcrumbLink>
                : <BreadcrumbPage>{label}</BreadcrumbPage>
              }
            </BreadcrumbItem>
            {i < arr.length - 1 && <BreadcrumbSeparator key={`sep-${i}`} />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  ),
}
