import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Combobox, MultiCombobox } from '@/components/ui/combobox'
import { Progress } from '@/components/ui/progress'
import { DatePicker } from '@/components/ui/date-picker'
import { MemorableDateInput } from '@/components/ui/memorable-date-input'

export default {
  title: 'Hulib/Form Elements',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export const CheckboxStory = {
  name: 'Checkbox',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="cb1" />
        <Label htmlFor="cb1">Unchecked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb2" defaultChecked />
        <Label htmlFor="cb2">Checked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="cb3" disabled />
        <Label htmlFor="cb3">Disabled</Label>
      </div>
    </div>
  ),
}

export const RadioGroupStory = {
  name: 'Radio Group',
  render: () => (
    <RadioGroup defaultValue="opt1" className="flex flex-col gap-4">
      {['Option One', 'Option Two', 'Option Three'].map((label, i) => (
        <div key={i} className="flex items-center gap-3">
          <RadioGroupItem value={`opt${i + 1}`} id={`r${i}`} />
          <Label htmlFor={`r${i}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const SwitchStory = {
  name: 'Switch',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="sw1" />
        <Label htmlFor="sw1">Off</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw2" defaultChecked />
        <Label htmlFor="sw2">On</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="sw3" disabled />
        <Label htmlFor="sw3">Disabled</Label>
      </div>
    </div>
  ),
}

export const SliderStory = {
  name: 'Slider',
  render: () => (
    <div className="w-[360px] flex flex-col gap-6">
      <Slider defaultValue={[30]} max={100} step={1} />
      <Slider defaultValue={[60]} max={100} step={1} />
      <Slider defaultValue={[0]} max={100} step={1} disabled />
    </div>
  ),
}

export const ProgressStory = {
  name: 'Progress',
  render: () => (
    <div className="w-[360px] flex flex-col gap-4">
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  ),
}

export const TextareaStory = {
  name: 'Textarea',
  render: () => (
    <div className="w-[360px]">
      <Textarea label="Message" placeholder="Write your message here..." />
    </div>
  ),
}

export const SelectStory = {
  name: 'Select',
  render: () => (
    <div className="w-[360px]">
      <Select>
        <SelectTrigger label="Choose an option">
          <SelectValue placeholder="Selection drop down" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="opt1">Option One</SelectItem>
          <SelectItem value="opt2">Option Two</SelectItem>
          <SelectItem value="opt3">Option Three</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

const FRUIT_OPTIONS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
  { value: 'peach', label: 'Peach' },
  { value: 'pear', label: 'Pear' },
  { value: 'strawberry', label: 'Strawberry' },
]

export const ComboboxStory = {
  name: 'Combobox',
  render: () => {
    const [value, setValue] = React.useState('')
    return (
      <div className="w-[360px]">
        <Combobox
          label="Choose a fruit"
          placeholder="Search and select…"
          options={FRUIT_OPTIONS}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

export const MultiComboboxStory = {
  name: 'Multi-select Combobox',
  render: () => {
    const [value, setValue] = React.useState<string[]>([])
    return (
      <div className="w-[360px]">
        <MultiCombobox
          label="Choose fruits"
          placeholder="Search and select…"
          options={FRUIT_OPTIONS}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

export const MemorableDateStory = {
  name: 'Memorable Date',
  render: () => {
    const [val, setVal] = React.useState({ month: '', day: '', year: '' })
    return (
      <div className="w-[360px]">
        <MemorableDateInput
          label="Date of Birth"
          value={val}
          onChange={setVal}
        />
      </div>
    )
  },
}

export const DatePickerStory = {
  name: 'Date Picker',
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <div className="w-[360px]">
        <DatePicker
          label="Select Date"
          value={date}
          onChange={setDate}
        />
      </div>
    )
  },
}
