import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  CopyIcon,
  ClipboardIcon,
  ScissorsIcon,
  Trash2Icon,
  PencilIcon,
  LinkIcon,
  DownloadIcon,
  ShareIcon,
  FolderIcon,
  StarIcon,
} from 'lucide-react'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

const meta: Meta = {
  title: 'Hulib/ContextMenu',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj

const triggerClass = 'flex h-36 w-80 items-center justify-center rounded-[12px] border-3 border-dashed border-[#333]/30 text-base font-medium text-[#999] select-none cursor-context-menu'
const triggerStyle = { fontFamily: 'Public Sans' }

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={triggerClass} style={triggerStyle}>
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <CopyIcon />
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ScissorsIcon />
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardIcon />
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Trash2Icon />
          Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={triggerClass} style={triggerStyle}>
        Right-click for grouped actions
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuLabel>Edit</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <ScissorsIcon />
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardIcon />
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuLabel>Share</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>
            <LinkIcon />
            Copy Link
          </ContextMenuItem>
          <ContextMenuItem>
            <DownloadIcon />
            Download
          </ContextMenuItem>
          <ContextMenuItem>
            <ShareIcon />
            Share…
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Trash2Icon />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={triggerClass} style={triggerStyle}>
        Right-click for submenu
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <PencilIcon />
          Rename
          <ContextMenuShortcut>↵</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CopyIcon />
          Duplicate
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <FolderIcon />
            Move to
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>Projects</ContextMenuItem>
            <ContextMenuItem>Archive</ContextMenuItem>
            <ContextMenuItem>Inbox</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <FolderIcon />
              New folder…
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <StarIcon />
          Add to favourites
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Trash2Icon />
          Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithCheckboxAndRadio: Story = {
  render: () => {
    const [showGrid, setShowGrid] = React.useState(true)
    const [showRulers, setShowRulers] = React.useState(false)
    const [zoom, setZoom] = React.useState('100')

    return (
      <ContextMenu>
        <ContextMenuTrigger className={triggerClass} style={triggerStyle}>
          Right-click for view options
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
            Show Grid
            <ContextMenuShortcut>⌘G</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showRulers} onCheckedChange={setShowRulers}>
            Show Rulers
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Zoom</ContextMenuLabel>
          <ContextMenuRadioGroup value={zoom} onValueChange={setZoom}>
            <ContextMenuRadioItem value="50">50%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="100">100%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="150">150%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="200">200%</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}
