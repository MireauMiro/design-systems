import React from 'react'
import type { Meta } from '@storybook/react'
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
  DropdownMenuCheckboxItem, DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu'
import { HulibButton } from '@/components/ui/button'
import { UserIcon, SettingsIcon, LogOutIcon, CreditCardIcon } from 'lucide-react'

export default {
  title: 'Hulib/Dropdown Menu',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export const Default = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <HulibButton color="purple" variant="filled" size="sm">Open Menu</HulibButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><UserIcon />Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem><CreditCardIcon />Billing <DropdownMenuShortcut>⌘B</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem><SettingsIcon />Settings <DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><LogOutIcon />Log out <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithCheckboxes = {
  render: () => {
    const [statusBar, setStatusBar] = React.useState(true)
    const [activityBar, setActivityBar] = React.useState(false)
    const [panel, setPanel] = React.useState(true)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <HulibButton color="black" variant="outline" size="sm">View Options</HulibButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={statusBar} onCheckedChange={setStatusBar} onSelect={e => e.preventDefault()}>Status Bar</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={activityBar} onCheckedChange={setActivityBar} onSelect={e => e.preventDefault()}>Activity Bar</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={panel} onCheckedChange={setPanel} onSelect={e => e.preventDefault()}>Panel</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
