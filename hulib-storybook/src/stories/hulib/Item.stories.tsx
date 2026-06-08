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
import { HulibButton } from '@/components/ui/button'
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
  title: 'Hulib/Item',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-[380px] p-4">
      <Item className="rounded-[12px] border-3 border-[#333]">
        <ItemMedia variant="icon">
          <BadgeCheckIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile verified</ItemTitle>
          <ItemDescription>Security confirmation completed</ItemDescription>
        </ItemContent>
        <ItemActions>
          <HulibButton color="purple" variant="filled" size="sm">Review</HulibButton>
        </ItemActions>
      </Item>
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
            <HulibButton color="purple" variant="filled" size="sm">View</HulibButton>
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
            <HulibButton color="purple" variant="filled" size="sm">Open</HulibButton>
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
            <HulibButton color="black" variant="outline" size="sm">Edit</HulibButton>
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
            <HulibButton color="black" variant="outline" size="sm">Edit</HulibButton>
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
            <HulibButton color="black" variant="outline" size="sm">Manage</HulibButton>
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
            <HulibButton color="black" variant="outline" size="sm">Edit</HulibButton>
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
              <AvatarFallback className="bg-[#9900ff] text-white font-extrabold text-sm">GK</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Geoff K.</ItemTitle>
            <ItemDescription>Admin · geoff@hulib.design</ItemDescription>
          </ItemContent>
          <ItemActions>
            <HulibButton color="black" variant="outline" size="sm">Remove</HulibButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="image">
            <Avatar className="size-10">
              <AvatarFallback className="bg-[#0066ff] text-white font-extrabold text-sm">AL</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Alex L.</ItemTitle>
            <ItemDescription>Editor · alex@hulib.design</ItemDescription>
          </ItemContent>
          <ItemActions>
            <HulibButton color="black" variant="outline" size="sm">Remove</HulibButton>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="image">
            <Avatar className="size-10">
              <AvatarFallback className="bg-[#00cc55] text-white font-extrabold text-sm">SR</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Sam R.</ItemTitle>
            <ItemDescription>Viewer · sam@hulib.design</ItemDescription>
          </ItemContent>
          <ItemActions>
            <HulibButton color="black" variant="outline" size="sm">Remove</HulibButton>
          </ItemActions>
        </Item>
        <ItemFooter>
          <HulibButton color="purple" variant="filled" size="sm">Invite member</HulibButton>
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
          { name: 'Q4 Report.pdf', size: '2.4 MB', icon: FileTextIcon, color: '#ff8800' },
          { name: 'Design System.fig', size: '18 MB', icon: ZapIcon, color: '#9900ff' },
          { name: 'Product Roadmap.doc', size: '540 KB', icon: FileTextIcon, color: '#0066ff' },
        ].map(({ name, size, icon: Icon, color }, i) => (
          <React.Fragment key={name}>
            {i > 0 && <ItemSeparator />}
            <Item>
              <ItemMedia variant="icon" style={{ backgroundColor: `${color}1a`, color }}>
                <Icon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{name}</ItemTitle>
                <ItemDescription>{size}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <HulibButton color="black" variant="outline" size="sm">Open</HulibButton>
              </ItemActions>
            </Item>
          </React.Fragment>
        ))}
      </ItemGroup>
    </div>
  ),
}
