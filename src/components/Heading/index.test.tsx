import { render } from '@testing-library/react'
import { Heading } from '.'
import { ThemeClient } from '../../theme/ThemeClient'

describe('Heading', () => {
    it('should renders a heading', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Heading>test</Heading>
            </ThemeClient>
        )

        const heading = getByRole('heading')

        expect(heading).toBeInTheDocument()
    })

    it('should renders heading with the correct "as" propperty', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Heading as="h2">test</Heading>
            </ThemeClient>
        )

        const heading = getByRole('heading')

        expect(heading.tagName).toBe('H2')
    })
    it('should renders heading with the correct children text', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Heading>children text</Heading>
            </ThemeClient>
        )

        const heading = getByRole('heading')

        expect(heading).toHaveTextContent('children text')
    })

    it('should match snapshot', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Heading>test</Heading>
            </ThemeClient>
        )

        const heading = getByRole('heading')

        expect(heading).toMatchSnapshot()
    })
})
