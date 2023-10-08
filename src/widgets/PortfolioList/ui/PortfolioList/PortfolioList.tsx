import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PortfolioList.module.scss';
import { PortfolioListItem, ProjectProps } from '../PortfolioListItem/PortfolioListItem';
import screen_one from "@/shared/assets/screens/screen_one.png";
import { VStack } from '@/shared/ui/Stack';
import shop from "@/shared/assets/screens/shop.png";
import articles from "@/shared/assets/screens/articles.png";
import chat from "@/shared/assets/screens/chat.png";
import videoChat from "@/shared/assets/screens/videoChat.png";

import babel from '@/shared/assets/icons/instruments/babel.png';
import css from '@/shared/assets/icons/instruments/css.png';
import eslint from '@/shared/assets/icons/instruments/eslint.png';
import fsd from '@/shared/assets/icons/instruments/fsd.png';
import git from '@/shared/assets/icons/instruments/git.png';
import htmlIcon from '@/shared/assets/icons/instruments/html.png';
import i18n from '@/shared/assets/icons/instruments/i18n.png';
import jest from '@/shared/assets/icons/instruments/jest.png';
import js from '@/shared/assets/icons/instruments/js.png';
import loki from '@/shared/assets/icons/instruments/loki.png';
import react from '@/shared/assets/icons/instruments/react.png';
import redux from '@/shared/assets/icons/instruments/redux.png';
import rtl from '@/shared/assets/icons/instruments/rtl.png';
import scss from '@/shared/assets/icons/instruments/scss.png';
import storybook from '@/shared/assets/icons/instruments/storybook.png';
import stylelint from '@/shared/assets/icons/instruments/stylelint.png';
import ts from '@/shared/assets/icons/instruments/ts.png';
import vk from '@/shared/assets/icons/instruments/vk.png';
import webpack from '@/shared/assets/icons/instruments/webpack.png';

interface PortfolioListProps {
    className?: string;
}

const mockData: ProjectProps[] = [
    {
        title: 'Приложение со статьями',
        about: [
            'Описание приложения:',
            'Архитектура проекта - FSD',
            'Работа с переводами - i18n',
            'Тесты: ',
            'Unit тесты на jest, тесты на компоненты с React testing library, скриншотное тестирование с loki, e2e тестирование с Cypress',
            'Линтеры: EsLint, Stylelint',
            'Storybook: В проекте для каждого компонента описываются стори-кейсы.',
            'Конфигурация проекта: есть и webpack, и vite',
            'Есть CI pipeline и pre commit хуки',
            'Работа с данными: Взаимодействие с данными осуществляется с помощью redux toolkit.',
            'Работа с feature-flags: Разрешено использование feature flags только с помощью хелпера toggleFeatures',

        ],
        screen: articles,
        git: 'https://github.com/Ivan77web/course-project',
        link: 'https://effervescent-queijadas-e1b608.netlify.app/articles?sort=createdAt&order=asc&search=&type=ALL',
        stacks: [babel, eslint, fsd, git, htmlIcon, i18n, jest, js, loki, react, redux, rtl, scss, storybook, stylelint, ts, webpack],
    },
    {
        title: 'Чат + VK UI',
        about: [
            'Основной функционал приложения заключается в общении в чате',
            'Так же в приложении реализована регистрация и авторазиция',
            'Целью приложения являлось детальное знакомство с библиотекой VK UI',
        ],
        screen: chat,
        git: 'https://github.com/Ivan77web/chat',
        stacks: [fsd, git, htmlIcon, react, redux, scss, ts, vk, webpack],
    },
    {
        title: 'Интернет-магазин',
        about: [
            'Многостраничное веб-приложение в виде интернет-магазина кроссовок.',
            'В качестве бэкэнда и базы данных использовался Firebase.',
            'Приложение написано на JavaScript.',
            'Так же присутствует админка, система ролей, возможности добавлять, удалять товар из БД, добавлять и удалять товар из корзины, совершать полноценный заказ, а у админов есть возможность менять статус заказа (отправлено/получено/отменено и тд)',
            'Целью приложения было создание полноценного пользовательского приложения',
        ],
        stacks: [react, js, redux, git, htmlIcon, css],
        screen: shop,
        git: 'https://github.com/Ivan77web/shop',
        link: 'https://shop-f9d27.web.app/shop',
    },
    {
        title: 'Видео-чат',
        about: [
            'Приложение реализовано на JS, WebRTC и Firebase',
            'Целью приложения являлось изчуние механизмов работы в WebRTC',
        ],
        screen: videoChat,
        link: 'https://videochat-7469a.web.app/friends',
        git: 'https://github.com/Ivan77web/chat',
        stacks: [css, git, htmlIcon, js, react, redux],
    },
]

export const PortfolioList = memo(({ className }: PortfolioListProps) => {
    return (
        <VStack
            max
            className={classNames(cl.PortfolioList, {}, [className])}
            gap='32'
        >
            {
                mockData.map((elem, index) =>
                    <PortfolioListItem
                        project={elem}
                        key={elem.title}
                        index={index}
                    />
                )
            }
        </VStack>
    );
});
