import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  FileTextIcon,
  LockIcon,
  MailIcon,
  ShieldIcon,
  StarIcon,
  UserIcon,
  ZapIcon,
} from 'lucide-react'
import { RobogearsButton } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'

const meta: Meta = {
  title: 'Robogears/Item',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-[380px] p-4">
      <ItemGroup>
        <Item>
          <ItemMedia variant="icon">
            <BadgeCheckIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Profile verified</ItemTitle>
            <ItemDescription>Security confirmation completed</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="violet" variant="filled" size="sm">Review</RobogearsButton>
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  ),
}

export const NotificationList: Story = {
  render: () => (
    <div className="w-[380px] p-4">
      <ItemGroup>
        <ItemHeader>Notifications</ItemHeader>
        <Item>
          <ItemMedia variant="icon">
            <BellIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>New comment on your post</ItemTitle>
            <ItemDescription>2 minutes ago</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="violet" variant="filled" size="sm">View</RobogearsButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <MailIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>You have a new message</ItemTitle>
            <ItemDescription>15 minutes ago</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="violet" variant="filled" size="sm">Open</RobogearsButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <StarIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your review was helpful</ItemTitle>
            <ItemDescription>1 hour ago</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
}

export const SettingsList: Story = {
  render: () => (
    <div className="w-[380px] p-4">
      <ItemGroup>
        <ItemHeader>Account</ItemHeader>
        <Item>
          <ItemMedia variant="icon">
            <UserIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Profile</ItemTitle>
            <ItemDescription>Name, photo, and bio</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="white" variant="outline" size="sm">Edit</RobogearsButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <LockIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Password & Security</ItemTitle>
            <ItemDescription>Last changed 3 months ago</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="white" variant="outline" size="sm">Edit</RobogearsButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <CreditCardIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Billing</ItemTitle>
            <ItemDescription>Pro plan · renews Aug 1</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="white" variant="outline" size="sm">Manage</RobogearsButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <ShieldIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Privacy</ItemTitle>
            <ItemDescription>Data and permissions</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="white" variant="outline" size="sm">Edit</RobogearsButton>
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  ),
}

export const WithAvatars: Story = {
  render: () => (
    <div className="w-[380px] p-4">
      <ItemGroup>
        <ItemHeader>Team Members</ItemHeader>
        <Item>
          <ItemMedia variant="image">
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback style={{ background: 'hsl(270 100% 40%)', color: 'white', fontWeight: 800, fontSize: '0.75rem' }}>GK</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Geoff K.</ItemTitle>
            <ItemDescription>Admin · geoff@robogears.gg</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="white" variant="outline" size="sm">Remove</RobogearsButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="image">
            <Avatar className="size-10">
              <AvatarFallback style={{ background: 'hsl(220 100% 40%)', color: 'white', fontWeight: 800, fontSize: '0.75rem' }}>AL</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Alex L.</ItemTitle>
            <ItemDescription>Editor · alex@robogears.gg</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="white" variant="outline" size="sm">Remove</RobogearsButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="image">
            <Avatar className="size-10">
              <AvatarFallback style={{ background: 'hsl(145 100% 25%)', color: 'white', fontWeight: 800, fontSize: '0.75rem' }}>SR</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Sam R.</ItemTitle>
            <ItemDescription>Viewer · sam@robogears.gg</ItemDescription>
          </ItemContent>
          <ItemActions>
            <RobogearsButton color="white" variant="outline" size="sm">Remove</RobogearsButton>
          </ItemActions>
        </Item>
        <ItemFooter>
          <RobogearsButton color="violet" variant="filled" size="sm">Invite member</RobogearsButton>
        </ItemFooter>
      </ItemGroup>
    </div>
  ),
}

export const FileList: Story = {
  render: () => (
    <div className="w-[380px] p-4">
      <ItemGroup>
        <ItemHeader>Recent Files</ItemHeader>
        {[
          { name: 'Q4 Report.pdf', size: '2.4 MB', icon: FileTextIcon, color: 'hsl(30 100% 50%)' },
          { name: 'Design System.fig', size: '18 MB', icon: ZapIcon, color: 'hsl(270 100% 60%)' },
          { name: 'Product Roadmap.doc', size: '540 KB', icon: FileTextIcon, color: 'hsl(220 100% 60%)' },
        ].map(({ name, size, icon: Icon, color }, i) => (
          <React.Fragment key={name}>
            {i > 0 && <ItemSeparator />}
            <Item>
              <ItemMedia
                variant="icon"
                style={{ backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`, color }}
              >
                <Icon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{name}</ItemTitle>
                <ItemDescription>{size}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <RobogearsButton color="white" variant="outline" size="sm">Open</RobogearsButton>
              </ItemActions>
            </Item>
          </React.Fragment>
        ))}
      </ItemGroup>
    </div>
  ),
}
