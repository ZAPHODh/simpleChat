import type { Meta, StoryObj } from '@storybook/react'
import { Chat } from '.'

const meta = {
    title: 'Example/Chat',
    component: Chat,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        room: String,
    },
} satisfies Meta<typeof Chat>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { room: 'room1' },
}
