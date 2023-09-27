import { Link } from "react-router-dom"
import cl from './Navbar.module.scss';
import { HStack } from "@/shared/ui/Stack";
import { AppLink } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Logo } from "@/shared/ui/Logo/Logo";
import { ThemeSwitcher } from "@/features/themeSwitcher";

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
                <AppLink to={'/'}>Обо мне</AppLink>
                <AppLink to={'/about'}>Навыки</AppLink>
                <AppLink to={'/about'}>Портфолио</AppLink>
                <AppLink to={'/about'}>Опыт</AppLink>
                <AppLink to={'/about'}>Контакты</AppLink>
            </HStack>

            <ThemeSwitcher />
        </HStack>
    )
}