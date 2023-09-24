import { Link } from "react-router-dom"
import cl from './Navbar.module.scss';
import { HStack } from "@/shared/ui/Stack";

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
                <Link to={'/'}>Обо мне</Link>
                <Link to={'/about'}>Навыки</Link>
                <Link to={'/about'}>Портфолио</Link>
                <Link to={'/about'}>Опыт</Link>
                <Link to={'/about'}>Контакты</Link>
            </div>

            <div className={cl.logo}>
                THEME SWITCHER
            </div>
        </HStack>
    )
}