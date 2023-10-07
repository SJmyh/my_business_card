import cl from './Navbar.module.scss';
import { HStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Logo } from "@/shared/ui/Logo/Logo";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { Text } from "@/shared/ui/Text";
import { Burger } from '@/features/burger';
import { onSmooth } from '@/shared/lib/onSmooth/onSmooth';

export const Navbar = () => {
    return (
        <HStack
            justify="between"
            className={classNames(cl.navbar, {}, ['container'])}
        >
            <HStack gap='16'>
                <div className={cl.burger}>
                    <div className={cl.burgerWrapper}>
                        <Burger />
                    </div>
                </div>

                <Logo />
            </HStack>

            <HStack
                justify='between'
                className={cl.navbarItems}
            >

                <div
                    className={cl.item}
                    onClick={() => onSmooth('about', 34)}
                >
                    <Text size="s" title="Обо мне" />
                </div>

                <div
                    className={cl.item}
                    onClick={() => onSmooth('skills', 34)}
                >
                    <Text size="s" title="Навыки" />
                </div>

                <div
                    className={cl.item}
                    onClick={() => onSmooth('portfolio', 34)}
                >
                    <Text size="s" title="Портфолио" />
                </div>

                <div
                    className={cl.item}
                    onClick={() => onSmooth('experience', 34)}
                >
                    <Text size="s" title="Опыт" />
                </div>

                <div
                    className={cl.item}
                    onClick={() => onSmooth('contacts', 34)}
                >
                    <Text size="s" title="Контакты" />
                </div>
            </HStack>

            <ThemeSwitcher />
        </HStack>
    )
}