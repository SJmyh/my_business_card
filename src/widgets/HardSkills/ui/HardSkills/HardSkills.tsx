import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './HardSkills.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import js from '@/shared/assets/icons/instruments/js.png';
import ts from '@/shared/assets/icons/instruments/ts.png';
import { SkillsCard } from '@/shared/ui/SkillsCard/SkillsCard';

// const skills = [
//     {
//         text: 'JavaScript',
//         icons: [<img src={js} />]
//     },
//     {
//         text: 'TypeScript',
//         icons: [<img src={ts} />]
//     },
//     {
//         text: 'JavaScript and TypeScript',
//         icons: [<img src={js} />, <img src={ts} />]
//     }
// ]

const skills = [
    {
        text: 'JavaScript',
        icons: <><img src={js} /></>
    },
    {
        text: 'TypeScript',
        icons: <><img src={ts} /></>
    },
    {
        text: 'JavaScript and TypeScript',
        icons: <><img src={js} /> <img src={ts} /></>
    }
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
