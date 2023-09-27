import { classNames } from "@/shared/lib/classNames/classNames";
import cl from "./ThemeSwitcher.module.scss";
import { memo, useCallback } from "react";
import { VStack } from "@/shared/ui/Stack";
import Moon from "@/shared/assets/icons/themeSwitcher/moon.svg";
import Sun from "@/shared/assets/icons/themeSwitcher/sun.svg";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Icon } from "@/shared/ui/Icon";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const onToggleHandler = useCallback(() => {
        toggleTheme();
    }, [toggleTheme]);

    return (
        <VStack
            className={classNames(cl.switch, {}, [])}
            justify="center"
            onClick={onToggleHandler}
        >
            {
                theme === 'app_dark_theme'
                    ?
                    <VStack
                        className={classNames(cl.button, {}, [cl.left])}
                        justify="center"
                        align="center"
                    >
                        <Icon Svg={Moon} />
                    </VStack>
                    :
                    <VStack
                        className={classNames(cl.button, {}, [])}
                        justify="center"
                        align="center"
                    >
                        <Icon Svg={Sun} />
                    </VStack>
            }
        </VStack>
    )
})