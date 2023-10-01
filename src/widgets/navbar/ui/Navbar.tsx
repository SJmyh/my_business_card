import cl from './Navbar.module.scss';
import { HStack } from "@/shared/ui/Stack";
import { AppLink } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Logo } from "@/shared/ui/Logo/Logo";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { Text } from "@/shared/ui/Text";

export const Navbar = () => {
    const onSmooth = (id: string) => {
        const targetElement = document.getElementById(id);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <HStack
            justify="between"
            className={classNames(cl.navbar, {}, ['container'])}
        >
            <Logo />

            <HStack
                gap="32"
            >

                <div onClick={() => onSmooth('about')}>
                    <Text size="s" title="Обо мне" />
                </div>

                <div onClick={() => onSmooth('skills')}>
                    <Text size="s" title="Навыки" />
                </div>

                <div onClick={() => onSmooth('portfolio')}>
                    <Text size="s" title="Портфолио" />
                </div>

                <div onClick={() => onSmooth('experience')}>
                    <Text size="s" title="Опыт" />
                </div>

                <div onClick={() => onSmooth('contacts')}>
                    <Text size="s" title="Контакты" />
                </div>
            </HStack>

            <ThemeSwitcher />
        </HStack>
    )
}