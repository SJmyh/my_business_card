import cl from './Navbar.module.scss';
import { HStack, VStack } from "@/shared/ui/Stack";
import { AppLink } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Logo } from "@/shared/ui/Logo/Logo";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { Text } from "@/shared/ui/Text";

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
            <Logo />

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

            <HStack gap='16'>
                <ThemeSwitcher />

                <VStack className={cl.burger} justify='between'>
                    <div className={cl.burger_one}/>
                    <div className={cl.burger_two}/>
                    <div className={cl.burger_three}/>
                </VStack>
            </HStack>
        </HStack>
    )
}