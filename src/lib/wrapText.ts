export const wrapTex = (text: string, maxLength: number) => {
    const regex = new RegExp(`.{1,${maxLength}}`, 'g')
    const matches = text.match(regex)
    return matches ? matches.join('\n') : ''
}
