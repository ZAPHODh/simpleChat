import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string
            darker: string
            dark: string
            normalDark: string
            brightDark: string
            gold: string
            brightGold: string
        }
        imgBorderEffects: {
            borderThickness: string
            offset: srting
            gap: string
        }
    }
}
