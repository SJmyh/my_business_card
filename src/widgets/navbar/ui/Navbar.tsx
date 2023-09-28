import { Link } from "react-router-dom"
import cl from './Navbar.module.scss';
import { HStack } from "@/shared/ui/Stack";
import { AppLink } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Logo } from "@/shared/ui/Logo/Logo";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { Text } from "@/shared/ui/Text";

export const Navbar = () => {
    return (
        <HStack
            justify="between"
            className={classNames(cl.navbar, {}, ['container'])}
        >
            <Logo />

            <HStack
                gap="32"
            >
                <AppLink to={'/'}><Text size="s" title="Обо мне" /></AppLink>
                <AppLink to={'/about'}><Text size="s" title="Навыки" /></AppLink>
                <AppLink to={'/about'}><Text size="s" title="Портфолио" /></AppLink>
                <AppLink to={'/about'}><Text size="s" title="Опыт" /></AppLink>
                <AppLink to={'/about'}><Text size="s" title="Контакты" /></AppLink>
            </HStack>

            <ThemeSwitcher />
        </HStack>
    )
}