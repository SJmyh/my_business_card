import { Link } from "react-router-dom"
import cl from './Navbar.module.scss';
import { HStack } from "@/shared/ui/Stack";
import { AppLink } from "@/shared/ui/AppLink";

export const Navbar = () => {
    return (
        <HStack
            justify="between"
            className={cl.navbar}
        >
            <div className={cl.logo}>
                LOGO
            </div>

            <div className={cl.links}>
                <AppLink to={'/'}>Обо мне</AppLink>
                <AppLink to={'/about'}>Навыки</AppLink>
                <AppLink to={'/about'}>Портфолио</AppLink>
                <AppLink to={'/about'}>Опыт</AppLink>
                <AppLink to={'/about'}>Контакты</AppLink>
            </div>

            <div className={cl.logo}>
                THEME SWITCHER
            </div>
        </HStack>
    )
}