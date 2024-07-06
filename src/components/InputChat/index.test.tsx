import { render } from '@testing-library/react'
import { InputChat } from '.'
import { ThemeClient } from '../../theme/ThemeClient'

describe('InputChat', () => {
    it('should render the InputChat', () => {
        const { getByRole } = render(
            <ThemeClient>
                <InputChat
                    onChange={jest.fn()}
                    placeholder="test"
                    value="test"
                />
            </ThemeClient>
        )

        const component = getByRole('textbox')

        expect(component).toBeInTheDocument()
    })
    it('should render with correct placeholder', () => {
        const { getByPlaceholderText } = render(
            <ThemeClient>
                <InputChat
                    onChange={jest.fn()}
                    placeholder="test"
                    value="test"
                />
            </ThemeClient>
        )

        const component = getByPlaceholderText('test')

        expect(component).toBeInTheDocument()
    })
    it('should render with correct value', () => {
        const { getByRole } = render(
            <ThemeClient>
                <InputChat
                    onChange={jest.fn()}
                    placeholder="test"
                    value="test"
                />
            </ThemeClient>
        )

        const component = getByRole('textbox')

        expect(component).toHaveValue('test')
    })
    it('should take a snapshot', () => {
        const { getByRole } = render(
            <ThemeClient>
                <InputChat
                    onChange={jest.fn()}
                    placeholder="test"
                    value="test"
                />
            </ThemeClient>
        )

        const component = getByRole('textbox')

        expect(component).toMatchSnapshot()
    })
})
