import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './HardSkills.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { SkillsCard } from '@/shared/ui/SkillsCard/SkillsCard';

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

const skills = [
    {
        text: 'HTML5, CSS3, SCSS',
        icons: <><img src={htmlIcon} /><img src={css} /><img src={scss} /></>
    },
    {
        text: 'TypeScript, JavaScript',
        icons: <><img src={ts} /> <img src={js} /></>
    },
    {
        text: 'WebRTC',
        icons: <><img src={webrtc} /></>
    },
    {
        text: 'Redux, Redux-toolkit',
        icons: <><img src={redux} /></>
    },
    {
        text: 'Framer-motion',
        icons: <><img src={framerMotion} /></>
    },
    {
        text: 'NextJS',
        icons: <><img src={next} /></>
    },
    {
        text: 'MobX',
        icons: <><img src={mobx} /></>
    },
    {
        text: 'Chart.js',
        icons: <><img src={chart} /></>
    },
    {
        text: 'Webpack',
        icons: <><img src={webpack} /></>
    },
    {
        text: 'Babel',
        icons: <><img src={babel} /></>
    },
    {
        text: 'FSD архитектура',
        icons: <><img src={fsd} /></>
    },
    {
        text: 'i18n',
        icons: <><img src={i18n} /></>
    },
    {
        text: 'EsLint, Stylelint',
        icons: <><img src={eslint} /><img src={stylelint} /></>
    },
    {
        text: 'Storybook',
        icons: <><img src={storybook} /></>
    },
    {
        text: 'VK UI, Consta',
        icons: <><img src={vk} /><img src={consta} /></>
    },
    {
        text: 'Тесты (RTL, Jest, Loki)',
        icons: <><img src={rtl} /><img src={jest} /><img src={loki} /></>
    },
    {
        text: 'Huski',
        icons: <></>
    },
    {
        text: 'Git',
        icons: <><img src={git} /></>
    },
]

interface HardSkillsProps {
    className?: string;
}

export const HardSkills = memo(({ className }: HardSkillsProps) => {
    return (
        <VStack
            className={classNames(cl.HardSkills, {}, [className])}
            gap='32'
            max
        >
            <Text
                text='Hard skills'
                size='m'
            />

            <VStack gap='16' max>
                {
                    skills.map(skill =>
                        <div className={cl.cardWrapper} key={skill.text}>
                            <SkillsCard
                                text={skill.text}
                                icons={skill.icons}
                            />
                        </div>
                    )
                }
            </VStack>
        </VStack>
    );
});
