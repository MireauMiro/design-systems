import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card, CardBody, CardShadow } from '@/components/ui/card'

const meta: Meta<typeof Switch> = {
  title: 'Robogears/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Switch>

// ---------------------------------------------------------------------------
// Default (controls wired up via autodocs)
// ---------------------------------------------------------------------------

export const Default: Story = {}

// ---------------------------------------------------------------------------
// All states
// ---------------------------------------------------------------------------

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ fontFamily: 'JetBrains Mono' }}>
      <div className="flex items-center gap-3">
        <Switch id="sw-off" />
        <Label htmlFor="sw-off">Off</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw-on" defaultChecked />
        <Label htmlFor="sw-on">On</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw-dis-off" disabled />
        <Label htmlFor="sw-dis-off" className="opacity-40">Disabled off</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw-dis-on" disabled defaultChecked />
        <Label htmlFor="sw-dis-on" className="opacity-40">Disabled on</Label>
      </div>
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Settings panel
// ---------------------------------------------------------------------------

const SETTINGS = [
  { key: 'notifications', label: 'Push notifications',  description: 'Receive alerts for new activity',   default: true  },
  { key: 'emails',        label: 'Email updates',        description: 'Weekly digest of your projects',    default: false },
  { key: 'darkMode',      label: 'Dark mode',            description: 'Use dark theme across the app',     default: false },
  { key: 'analytics',     label: 'Usage analytics',      description: 'Help improve RoboGears by sharing data', default: true  },
] as const

export const SettingsPanel: Story = {
  render: () => {
    const initial = Object.fromEntries(SETTINGS.map(s => [s.key, s.default])) as Record<string, boolean>
    const [state, setState] = React.useState(initial)

    return (
      <Card className="w-[420px]">
        <CardBody className="p-0 gap-0">
          {SETTINGS.map((setting, i) => (
            <div
              key={setting.key}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${i < SETTINGS.length - 1 ? 'border-b border-black/10' : ''}`}
            >
              <div className="flex flex-col gap-0.5">
                <Label
                  htmlFor={`panel-${setting.key}`}
                  className="text-sm font-bold text-[hsl(133_70%_58%)] cursor-pointer"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  {setting.label}
                </Label>
                <span className="text-xs font-medium text-[hsl(133_30%_45%)]" style={{ fontFamily: 'JetBrains Mono' }}>
                  {setting.description}
                </span>
              </div>
              <Switch
                id={`panel-${setting.key}`}
                checked={state[setting.key]}
                onCheckedChange={v => setState(s => ({ ...s, [setting.key]: v }))}
              />
            </div>
          ))}
        </CardBody>
        <CardShadow />
      </Card>
    )
  },
}
