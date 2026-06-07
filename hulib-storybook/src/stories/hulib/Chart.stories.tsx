import type { Meta } from '@storybook/react'
import {
  Bar, BarChart, Line, LineChart, Area, AreaChart,
  Pie, PieChart, Cell,
  CartesianGrid, XAxis, YAxis,
  Tooltip, Legend,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Card, CardBody, CardTitle, CardDescription, CardShadow } from '@/components/ui/card'

export default {
  title: 'Hulib/Chart',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story: React.ComponentType) => (
    <div className="w-[560px]"><Story /></div>
  )],
} satisfies Meta

// ─── Hulib color palette ─────────────────────────────────────────────────────
const PURPLE   = '#9900ff'
const BLUE     = '#0066ff'
const GREEN    = '#00cc55'
const ORANGE   = '#ff8800'
const SKY_BLUE = '#38b6ff'
const BLACK    = '#333333'

// ─── Bar Chart ───────────────────────────────────────────────────────────────

const barData = [
  { month: 'Jan', revenue: 4200, expenses: 2400 },
  { month: 'Feb', revenue: 5800, expenses: 3100 },
  { month: 'Mar', revenue: 4900, expenses: 2800 },
  { month: 'Apr', revenue: 7200, expenses: 3600 },
  { month: 'May', revenue: 6100, expenses: 3000 },
  { month: 'Jun', revenue: 8400, expenses: 4100 },
]

const barConfig: ChartConfig = {
  revenue:  { label: 'Revenue',  color: PURPLE },
  expenses: { label: 'Expenses', color: SKY_BLUE },
}

export const BarChartStory = {
  name: 'Bar Chart',
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>Monthly Revenue vs Expenses</CardTitle>
        <CardDescription>January – June 2024</CardDescription>
        <ChartContainer config={barConfig} className="mt-4 h-[220px] w-full">
          <BarChart data={barData} barCategoryGap="30%">
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} />
            <YAxis axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="revenue"  fill={PURPLE}   radius={[6, 6, 0, 0]} />
            <Bar dataKey="expenses" fill={SKY_BLUE} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}

// ─── Line Chart ──────────────────────────────────────────────────────────────

const lineData = [
  { week: 'W1', users: 1200, sessions: 3400 },
  { week: 'W2', users: 1800, sessions: 4200 },
  { week: 'W3', users: 1600, sessions: 3900 },
  { week: 'W4', users: 2400, sessions: 5600 },
  { week: 'W5', users: 2200, sessions: 5100 },
  { week: 'W6', users: 3100, sessions: 7200 },
  { week: 'W7', users: 2900, sessions: 6800 },
  { week: 'W8', users: 3800, sessions: 8900 },
]

const lineConfig: ChartConfig = {
  users:    { label: 'Users',    color: PURPLE },
  sessions: { label: 'Sessions', color: GREEN  },
}

export const LineChartStory = {
  name: 'Line Chart',
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>User & Session Trends</CardTitle>
        <CardDescription>8-week rolling window</CardDescription>
        <ChartContainer config={lineConfig} className="mt-4 h-[220px] w-full">
          <LineChart data={lineData}>
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis dataKey="week" axisLine={false} tickLine={false} tickMargin={8} />
            <YAxis axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(v) => `${(v/1000).toFixed(1)}k`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line dataKey="users"    type="monotone" stroke={PURPLE} strokeWidth={2.5} dot={false} />
            <Line dataKey="sessions" type="monotone" stroke={GREEN}  strokeWidth={2.5} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}

// ─── Area Chart ──────────────────────────────────────────────────────────────

const areaData = [
  { month: 'Jan', growth: 2100 },
  { month: 'Feb', growth: 3400 },
  { month: 'Mar', growth: 3100 },
  { month: 'Apr', growth: 5200 },
  { month: 'May', growth: 4800 },
  { month: 'Jun', growth: 6700 },
  { month: 'Jul', growth: 7200 },
  { month: 'Aug', growth: 8900 },
]

const areaConfig: ChartConfig = {
  growth: { label: 'MRR', color: PURPLE },
}

export const AreaChartStory = {
  name: 'Area Chart',
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>Monthly Recurring Revenue</CardTitle>
        <CardDescription>Jan – Aug 2024</CardDescription>
        <ChartContainer config={areaConfig} className="mt-4 h-[220px] w-full">
          <AreaChart data={areaData}>
            <defs>
              <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={PURPLE} stopOpacity={0.2} />
                <stop offset="95%" stopColor={PURPLE} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} />
            <YAxis axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="growth"
              type="monotone"
              stroke={PURPLE}
              strokeWidth={2.5}
              fill="url(#growthGradient)"
            />
          </AreaChart>
        </ChartContainer>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}

// ─── Pie / Donut Chart ────────────────────────────────────────────────────────

const pieData = [
  { name: 'Direct',   value: 4200 },
  { name: 'Organic',  value: 3100 },
  { name: 'Referral', value: 1800 },
  { name: 'Social',   value: 2400 },
  { name: 'Email',    value: 1100 },
]

const PIE_COLORS = [PURPLE, BLUE, GREEN, ORANGE, SKY_BLUE]

const pieConfig: ChartConfig = {
  Direct:   { label: 'Direct',   color: PURPLE   },
  Organic:  { label: 'Organic',  color: BLUE     },
  Referral: { label: 'Referral', color: GREEN    },
  Social:   { label: 'Social',   color: ORANGE   },
  Email:    { label: 'Email',    color: SKY_BLUE },
}

export const PieChartStory = {
  name: 'Pie / Donut Chart',
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>Current period breakdown</CardDescription>
        <ChartContainer config={pieConfig} className="mt-4 h-[240px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={3}
              strokeWidth={0}
            >
              {pieData.map((_, i) => (
                <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
              ))}
            </Pie>
            <Legend
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span style={{ fontFamily: 'Public Sans', fontSize: 12, color: '#555' }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}

// ─── Stacked Bar ─────────────────────────────────────────────────────────────

const stackedData = [
  { quarter: 'Q1', mobile: 3200, desktop: 5100, tablet: 1200 },
  { quarter: 'Q2', mobile: 4100, desktop: 5800, tablet: 1600 },
  { quarter: 'Q3', mobile: 5600, desktop: 6200, tablet: 1900 },
  { quarter: 'Q4', mobile: 6800, desktop: 7100, tablet: 2300 },
]

const stackedConfig: ChartConfig = {
  mobile:  { label: 'Mobile',  color: PURPLE   },
  desktop: { label: 'Desktop', color: BLUE     },
  tablet:  { label: 'Tablet',  color: SKY_BLUE },
}

export const StackedBarStory = {
  name: 'Stacked Bar Chart',
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>Sessions by Device</CardTitle>
        <CardDescription>Quarterly breakdown</CardDescription>
        <ChartContainer config={stackedConfig} className="mt-4 h-[220px] w-full">
          <BarChart data={stackedData} barCategoryGap="30%">
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis dataKey="quarter" axisLine={false} tickLine={false} tickMargin={8} />
            <YAxis axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" stackId="a" fill={BLUE}     radius={[0, 0, 0, 0]} />
            <Bar dataKey="tablet"  stackId="a" fill={SKY_BLUE} radius={[0, 0, 0, 0]} />
            <Bar dataKey="mobile"  stackId="a" fill={PURPLE}   radius={[6, 6, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardBody>
      <CardShadow />
    </Card>
  ),
}
