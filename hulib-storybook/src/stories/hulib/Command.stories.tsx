import type { Meta, StoryObj } from '@storybook/react'
import {
  CalendarIcon,
  CalculatorIcon,
  CreditCardIcon,
  FileTextIcon,
  HomeIcon,
  LogOutIcon,
  MailIcon,
  SearchIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

const meta: Meta<typeof Command> = {
  title: 'Hulib/Command',
  component: Command,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="w-[400px] shadow-lg">
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="size-4" />
            Calendar
          </CommandItem>
          <CommandItem>
            <SmileIcon className="size-4" />
            Search Emoji
          </CommandItem>
          <CommandItem>
            <CalculatorIcon className="size-4" />
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon className="size-4" />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon className="size-4" />
            Billing
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="size-4" />
            Settings
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithShortcuts: Story = {
  render: () => (
    <Command className="w-[400px] shadow-lg">
      <CommandInput placeholder="Search commands…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem>
            <HomeIcon className="size-4" />
            Home
            <CommandShortcut>⌘H</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <MailIcon className="size-4" />
            Inbox
            <CommandShortcut>⌘I</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileTextIcon className="size-4" />
            Documents
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Account">
          <CommandItem>
            <UserIcon className="size-4" />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="size-4" />
            Settings
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <LogOutIcon className="size-4" />
            Log out
            <CommandShortcut>⌘Q</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const EmptyState: Story = {
  render: () => (
    <Command className="w-[400px] shadow-lg">
      <CommandInput placeholder="Search…" defaultValue="xyzzy" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Items">
          <CommandItem>
            <SearchIcon className="size-4" />
            Something
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const NoSearch: Story = {
  render: () => (
    <Command className="w-[400px] shadow-lg">
      <CommandList>
        <CommandGroup heading="Quick Actions">
          <CommandItem>
            <FileTextIcon className="size-4" />
            New Document
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <MailIcon className="size-4" />
            Compose Email
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CalendarIcon className="size-4" />
            New Event
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Recent">
          <CommandItem>Report Q4 2024.pdf</CommandItem>
          <CommandItem>Product Roadmap.doc</CommandItem>
          <CommandItem>Design System.fig</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Narrow: Story = {
  render: () => (
    <Command className="w-[280px] shadow-lg">
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>Nothing here.</CommandEmpty>
        <CommandGroup heading="Options">
          <CommandItem>
            <UserIcon className="size-4" />
            Profile
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="size-4" />
            Settings
          </CommandItem>
          <CommandItem>
            <LogOutIcon className="size-4" />
            Log out
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
