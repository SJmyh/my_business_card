import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

interface ThemeProviderProps {
    initiallTheme?: Theme;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        initiallTheme,
        children,
    } = props;
    const [theme, setTheme] = useState<Theme>(initiallTheme || fallbackTheme || Theme.DARK);
    const [isThemeInited, setThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited && initiallTheme) {
            setTheme(initiallTheme);
            setThemeInited(true);
        }
    }, [initiallTheme, isThemeInited]);

    useEffect(() => {
        // скролл в цвет темы
        // document.body.className = theme;

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
