import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ContactsPage.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Title } from '@/shared/ui/Title/Title';
import { AppLink } from '@/shared/ui/AppLink';
import iconTg_dark from '@/shared/assets/icons/links/tg_dark.png'
import iconTg_light from '@/shared/assets/icons/links/tg_light.png'
import iconVk_dark from '@/shared/assets/icons/links/vk_dark.png'
import iconVk_light from '@/shared/assets/icons/links/vk_light.png'
import iconGit_dark from '@/shared/assets/icons/links/git_dark.png'
import iconGit_light from '@/shared/assets/icons/links/git_light.png'
import iconGmail_dark from '@/shared/assets/icons/links/gmail_dark.png'
import iconGmail_light from '@/shared/assets/icons/links/gmail_light.png'
import iconLink_dark from '@/shared/assets/icons/links/link_dark.png'
import iconLink_light from '@/shared/assets/icons/links/link_light.png'
import iconPhone_dark from '@/shared/assets/icons/links/phone_dark.png'
import iconPhone_light from '@/shared/assets/icons/links/phone_light.png'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Text } from '@/shared/ui/Text';

interface ContactsPageProps {
    className?: string;
}

const ContactsPage = memo(({ className }: ContactsPageProps) => {
    const { theme } = useTheme();

    return (
        <VStack
            id="contacts"
            className={classNames(cl.ContactsPage, {}, ['container', className])}
            gap='32'
        >
            <Title
                className={cl.title}
                position='center'
                title='Контакты'
            />

            <HStack justify='between' max>
                <AppLink
                    to="https://t.me/chikirauprivet"
                    target='_blank'
                >
                    <img src={theme === 'app_dark_theme' ? iconTg_light : iconTg_dark} />
                </AppLink>
                <AppLink
                    target='_blank'
                    to="https://vk.com/id133579844"
                >
                    <img src={theme === 'app_dark_theme' ? iconVk_light : iconVk_dark} />
                </AppLink>
                <AppLink
                    target='_blank'
                    to="https://github.com/Ivan77web"
                >
                    <img src={theme === 'app_dark_theme' ? iconGit_light : iconGit_dark} />
                </AppLink>
                <AppLink
                    target='_blank'
                    to="mailto:ivanshestopalov39@gmail.com"
                >
                    <img src={theme === 'app_dark_theme' ? iconGmail_light : iconGmail_dark} />
                </AppLink>
                <AppLink
                    target='_blank'
                    to="http://linkedin.com/in/ivan-shestopalov-592a9b263"
                >
                    <img src={theme === 'app_dark_theme' ? iconLink_light : iconLink_dark} />
                </AppLink>
                <AppLink
                    target='_blank'
                    to="tel:+79042335370"
                    title="+79042335370"
                >
                    <img src={theme === 'app_dark_theme' ? iconPhone_light : iconPhone_dark} />
                </AppLink>
            </HStack>

            <HStack justify='center' max>
                <Text
                    text="Онлайн с 10:00 до 20:00 каждый день"
                    variant='optional'
                    size='xs'
                />
            </HStack>

            <HStack
                className={cl.logo}
                justify='end'
                max
            >
                <Text
                    text="© SHESTOPALOV IVAN, 2023"
                    variant='default'
                    size='xs'
                />
            </HStack>
        </VStack>
    );
});

export default ContactsPage;