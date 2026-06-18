import React, { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'
import { MailIcon, SearchIcon, LockIcon } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'Robogears/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-[360px]"><Story /></div>],
}
export default meta

type Story = StoryObj<typeof Input>

export const WithLabel: Story = {
  args: { label: 'Email Address', placeholder: 'example@email.com', type: 'email' },
}

export const WithIcon: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'example@email.com',
    type: 'email',
    leftIcon: <MailIcon className="size-5" />,
  },
}

// Pill-shaped search — keeps rounded form, adopts cyber palette
export const Search: Story = {
  decorators: [(Story) => {
    const [focused, setFocused] = React.useState(false)
    return (
      <div className="w-[360px]">
        <div
          className="flex items-center gap-2 px-4 h-12 rounded-full transition-all duration-150"
          style={{
            background: 'hsl(130 14% 6.5%)',
            border: `2px solid hsl(191 100% 50% / ${focused ? 1 : 0.5})`,
            filter: focused ? 'drop-shadow(0 0 10px hsl(191 100% 50% / 0.4))' : 'none',
          }}
        >
          <SearchIcon className="size-5 shrink-0" style={{ color: `hsl(191 100% 50% / ${focused ? 1 : 0.8})` }} />
          <input
            type="search"
            placeholder="Search"
            className="flex-1 min-w-0 bg-transparent outline-none text-base font-medium placeholder:text-[hsl(133_22%_36%)]"
            style={{ fontFamily: 'JetBrains Mono', color: 'hsl(133 100% 50%)' }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>
      </div>
    )
  }],
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    type: 'password',
    leftIcon: <LockIcon className="size-5" />,
  },
}

export const NoLabel: Story = {
  args: { placeholder: 'example@email.com', type: 'email' },
}

export const Disabled: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'example@email.com',
    type: 'email',
    disabled: true,
  },
}

const DIGITS = 6

export const Passcode: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>(Array(DIGITS).fill(''))
    const [focused, setFocused] = useState<number | null>(null)
    const refs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (i: number, val: string) => {
      const digit = val.replace(/\D/g, '').slice(-1)
      const next = [...values]
      next[i] = digit
      setValues(next)
      if (digit && i < DIGITS - 1) refs.current[i + 1]?.focus()
    }

    const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !values[i] && i > 0) {
        refs.current[i - 1]?.focus()
      }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault()
      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, DIGITS)
      const next = [...values]
      pasted.split('').forEach((ch, idx) => { next[idx] = ch })
      setValues(next)
      const focusIdx = Math.min(pasted.length, DIGITS - 1)
      refs.current[focusIdx]?.focus()
    }

    return (
      <div className="flex flex-col gap-2">
        <label className="cyber-label">Passcode</label>
        <div className="flex gap-2">
          {values.map((val, i) => (
            <div
              key={i}
              className="transition-all duration-150"
              style={{
                filter: focused === i ? 'drop-shadow(0 0 8px hsl(191 100% 50% / 0.4))' : 'none',
              }}
            >
              <input
                ref={el => { refs.current[i] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={e => handleChange(i, e.target.value)}
                onKeyDown={e => handleKeyDown(i, e)}
                onPaste={handlePaste}
                onFocus={() => setFocused(i)}
                onBlur={() => setFocused(null)}
                className="w-12 h-12 text-center text-base font-bold outline-none transition-all duration-150"
                style={{
                  fontFamily: 'JetBrains Mono',
                  color: 'hsl(133 100% 50%)',
                  background: 'hsl(130 14% 6.5%)',
                  border: `2px solid hsl(191 100% 50% / ${focused === i ? 1 : 0.5})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  },
}
