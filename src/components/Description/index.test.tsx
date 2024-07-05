import { render } from '@testing-library/react'
import { Description } from '.'
import { ThemeClient } from '../../theme/ThemeClient'

describe('Description', () => {
    it('should render the paragraph', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Description>test</Description>
            </ThemeClient>
        )

        const heading = getByRole('paragraph')

        expect(heading).toBeInTheDocument()
    })
    it('should render the paragraph with max chars', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Description maxChars={2}>test</Description>
            </ThemeClient>
        )

        const heading = getByRole('paragraph')

        expect(heading).toHaveTextContent('te...')
    })
    it('should take a snapshot', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Description>test</Description>
            </ThemeClient>
        )

        const heading = getByRole('paragraph')

        expect(heading).toMatchSnapshot()
    })
})
