import { classNames } from "@/shared/lib/classNames/classNames";
import cl from "./ThemeSwitcher.module.scss";
import { memo, useCallback } from "react";
import { HStack, VStack } from "@/shared/ui/Stack";
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
                    <HStack justify="between" max>
                        <VStack
                            className={classNames('', {}, [cl.buttonWrapper])}
                            justify="center"
                            align="center"
                        >
                            <Icon width={'26'} height={'26'} Svg={Sun} />
                        </VStack>
                        <VStack
                            className={classNames(cl.buttonActive, {}, [cl.buttonWrapper])}
                            justify="center"
                            align="center"
                        >
                            <Icon width={'26'} height={'26'} Svg={Moon} />
                        </VStack>
                    </HStack>
                    :
                    <HStack justify="between" max>
                        <VStack
                            className={classNames(cl.buttonActive, {}, [cl.buttonWrapper])}
                            justify="center"
                            align="center"
                        >
                            <Icon width={'26'} height={'26'} Svg={Sun} />
                        </VStack>
                        <VStack
                            className={classNames('', {}, [cl.buttonWrapper])}
                            justify="center"
                            align="center"
                        >
                            <Icon width={'26'} height={'26'} Svg={Moon} />
                        </VStack>
                    </HStack>
            }
        </VStack>
    )
})