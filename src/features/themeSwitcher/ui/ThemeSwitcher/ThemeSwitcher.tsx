
import cl from "./ThemeSwitcher.module.scss";
import { memo, useCallback, useState } from "react";
import Moon from "@/shared/assets/icons/themeSwitcher/moon.svg";
import Sun from "@/shared/assets/icons/themeSwitcher/sun.svg";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Icon } from "@/shared/ui/Icon";
import { motion } from "framer-motion"

interface ThemeSwitcherProps {
    className?: string;
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const onToggleHandler = useCallback(() => {
        toggleTheme();
    }, [toggleTheme]);

    return (

        <div className={cl.switch} data-ison={theme === 'app_dark_theme'} onClick={onToggleHandler}>
            <motion.div
                className={cl.handle}
                layout
                transition={spring}
            >
                {
                    theme === 'app_dark_theme'
                        ?
                        <Icon width={'20'} height={'20'} Svg={Moon} variant="dark" />
                        :
                        <Icon width={'20'} height={'20'} Svg={Sun} variant="dark" />
                }
            </motion.div >
        </div>
    )
})