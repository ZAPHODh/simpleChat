import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { GlobalStyles } from '../src/theme/globals'
import { theme } from '../src/theme/theme'
import { ThemeClient } from '../src/theme/ThemeClient'
export const decorators = [
    withThemeFromJSXProvider({
        GlobalStyles,
        themes: theme,
        Provider: ThemeClient,
    }),
]
