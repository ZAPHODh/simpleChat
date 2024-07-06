import type { Meta, StoryObj } from '@storybook/react'
import { InputChat } from '.'

const meta = {
    title: 'Example/InputChat',
    component: InputChat,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: String,
        value: String,
        onChange: Function,
    },
} satisfies Meta<typeof InputChat>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { onChange: () => {}, placeholder: 'test', value: 'test' },
}
