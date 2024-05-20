import type { Meta, StoryObj } from '@storybook/react'
import { Test } from './Test'

const meta: Meta<typeof Test> = {
  component: Test,
}

export default meta
type Story = StoryObj

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Test',
  },
}