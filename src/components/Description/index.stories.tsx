import type { Meta, StoryObj } from '@storybook/react'
import { Description } from '.'

const meta = {
    title: 'Example/Description',
    component: Description,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: String,
        maxChars: Number || null,
        padding: String || null,
    },
} satisfies Meta<typeof Description>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { children: 'descrição de teste' },
}
export const WithMaxChar: Story = {
    args: { children: 'descrição de teste', maxChars: 6 },
}
