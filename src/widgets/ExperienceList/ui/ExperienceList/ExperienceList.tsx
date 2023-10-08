import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ExperienceList.module.scss';
import { ExperienceListItem, ExperienceProps } from '../ExperienceListItem/ExperienceListItem';
import { VStack } from '@/shared/ui/Stack';

import babel from '@/shared/assets/icons/instruments/babel.png';
import chart from '@/shared/assets/icons/instruments/chart.png';
import consta from '@/shared/assets/icons/instruments/consta.png';
import css from '@/shared/assets/icons/instruments/css.png';
import eslint from '@/shared/assets/icons/instruments/eslint.png';
import framerMotion from '@/shared/assets/icons/instruments/framer-motion.png';
import fsd from '@/shared/assets/icons/instruments/fsd.png';
import git from '@/shared/assets/icons/instruments/git.png';
import htmlIcon from '@/shared/assets/icons/instruments/html.png';
import i18n from '@/shared/assets/icons/instruments/i18n.png';
import jest from '@/shared/assets/icons/instruments/jest.png';
import js from '@/shared/assets/icons/instruments/js.png';
import loki from '@/shared/assets/icons/instruments/loki.png';
import mobx from '@/shared/assets/icons/instruments/mobx.png';
import next from '@/shared/assets/icons/instruments/next.png';
import react from '@/shared/assets/icons/instruments/react.png';
import redux from '@/shared/assets/icons/instruments/redux.png';
import rtl from '@/shared/assets/icons/instruments/rtl.png';
import scss from '@/shared/assets/icons/instruments/scss.png';
import storybook from '@/shared/assets/icons/instruments/storybook.png';
import stylelint from '@/shared/assets/icons/instruments/stylelint.png';
import ts from '@/shared/assets/icons/instruments/ts.png';
import vk from '@/shared/assets/icons/instruments/vk.png';
import webrtc from '@/shared/assets/icons/instruments/webrtc.png';
import webpack from '@/shared/assets/icons/instruments/webpack.png';

interface ExperienceListProps {
    className?: string;
}

const mockData: ExperienceProps[] = [
    {
        date: 'Апрель 2023 - по настоящее время',
        companyName: 'ТрансКапиталБанк',
        post: 'Frontend-разработчик',
        tasks: [
            '',
            'Решение других проблем',
            'Решение еще каких-то проблем',
        ],
        stacks: [react, redux, webpack, ts, babel, scss, css, js, consta, eslint, fsd, git, htmlIcon, jest, loki, rtl, storybook, stylelint,],
    },
    {
        date: 'Сентябрь 2021 - Февраль 2023',
        companyName: 'Технопарк РГСУ',
        post: 'Frontend-разработчик',
        tasks: [
            'Решение таких проблем',
            'Решение других проблем',
            'Решение еще каких-то проблем',
        ],
        stacks: [css, git, htmlIcon, js, react, redux, ts],
    }
]

export const ExperienceList = memo(({ className }: ExperienceListProps) => {
    return (
        <VStack
            max
            className={classNames(cl.experienceList, {}, [className])}
            gap='32'
        >
            {
                mockData.map(elem =>
                    <ExperienceListItem
                        experience={elem}
                        key={elem.date}
                    />
                )
            }
        </VStack>
    );
});
