import { classNames } from "@/shared/lib/classNames/classNames";
import cl from "./ThemeSwitcher.module.scss";
import { memo, useCallback, useState } from "react";
import { VStack } from "@/shared/ui/Stack";
import Moon from "@/shared/assets/icons/themeSwitcher/moon.svg";
import Sun from "@/shared/assets/icons/themeSwitcher/sun.svg";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

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
            <span>Change theme</span>
            {/* {
                value
                    ?
                    <VStack
                        className={classNames(cl.button, { [cl.left]: value }, [])}
                        justify="center"
                        align="center"
                    >
                        <Moon />
                    </VStack>
                    :
                    <VStack
                        className={classNames(cl.button, {}, [])}
                        justify="center"
                        align="center"
                    >
                        <Sun />
                    </VStack>
            } */}
        </VStack>
    )
})