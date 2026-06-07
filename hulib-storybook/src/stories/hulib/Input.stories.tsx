import React, { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'
import { MailIcon, SearchIcon, LockIcon } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'Hulib/Input',
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

export const Search: Story = {
  args: {
    placeholder: 'Search',
    type: 'search',
    leftIcon: <SearchIcon className="size-5" />,
  },
  decorators: [(Story) => (
    <div className="w-[360px]">
      <div className="bg-white border-3 border-[#333] rounded-full px-4 py-3 h-14 flex items-center gap-2 focus-within:ring-2 focus-within:ring-[#9900ff]">
        <SearchIcon className="size-5 shrink-0 text-[#333]" />
        <input
          type="search"
          placeholder="Search"
          className="flex-1 min-w-0 bg-transparent outline-none text-base font-medium text-[#333] placeholder:text-[#bbb]"
          style={{ fontFamily: 'Public Sans' }}
        />
      </div>
    </div>
  )],
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
        <label className="font-bold text-base leading-6 text-[#333]" style={{ fontFamily: 'Public Sans' }}>
          Passcode
        </label>
        <div className="flex gap-2">
          {values.map((val, i) => (
            <input
              key={i}
              ref={el => { refs.current[i] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={val}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              onPaste={handlePaste}
              className="w-14 h-14 bg-white border-3 border-[#333] rounded-2xl text-center text-base font-bold text-[#333] outline-none focus:ring-2 focus:ring-[#9900ff] transition-shadow"
              style={{ fontFamily: 'Public Sans' }}
            />
          ))}
        </div>
      </div>
    )
  },
}
