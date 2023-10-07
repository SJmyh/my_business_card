import cl from './Navbar.module.scss';
import { HStack, VStack } from "@/shared/ui/Stack";
import { AppLink } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Logo } from "@/shared/ui/Logo/Logo";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { Text } from "@/shared/ui/Text";
import { Burger } from '@/features/burger/ui/Burger/Burger';

export const Navbar = () => {
    const onSmooth = (id: string) => {
        const targetElement = document.getElementById(id);

        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: elementPosition - 34,
                behavior: 'smooth'
            })
        }
    }

    return (
        <HStack
            justify="between"
            className={classNames(cl.navbar, {}, ['container'])}
        >
            <HStack gap='16'>
                <div className={cl.burger}>
                    <div className={cl.burgerWrapper}>
                        <Burger onSmooth={onSmooth} />
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
                    onClick={() => onSmooth('about')}
                >
                    <Text size="s" title="Обо мне" />
                </div>

                <div
                    className={cl.item}
                    onClick={() => onSmooth('skills')}
                >
                    <Text size="s" title="Навыки" />
                </div>

                <div
                    className={cl.item}
                    onClick={() => onSmooth('portfolio')}
                >
                    <Text size="s" title="Портфолио" />
                </div>

                <div
                    className={cl.item}
                    onClick={() => onSmooth('experience')}
                >
                    <Text size="s" title="Опыт" />
                </div>

                <div
                    className={cl.item}
                    onClick={() => onSmooth('contacts')}
                >
                    <Text size="s" title="Контакты" />
                </div>
            </HStack>

            <ThemeSwitcher />
        </HStack>
    )
}