import * as Styled from './styles'

export type DescriptionProps = {
    children: string
    padding?: string
    maxWidth?: string
    maxChars?: number
}

export const Description = ({
    children,
    padding,
    maxChars,
    maxWidth,
}: DescriptionProps) => {
    let truncatedText = ''

    truncatedText = maxChars ? children.slice(0, maxChars) + '...' : children

    return (
        <Styled.Wrapper $padding={padding} $maxWidth={maxWidth}>
            {truncatedText}
        </Styled.Wrapper>
    )
}
