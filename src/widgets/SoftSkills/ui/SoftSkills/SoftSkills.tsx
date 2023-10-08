import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SoftSkills.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { SkillsCard } from '@/shared/ui/SkillsCard/SkillsCard';

const skills = [
    {
        text: 'Умею работать в команде, имею опыт общения с дизайнерами, менеджерами и другими разработчиками'
    },
    {
        text: 'Ответственно отношусь к срокам, а так же вовремя сообщаю о проблемах'
    },
    {
        text: 'Внимательно отношусь к деталям технического задания'
    },
    {
        text: 'Приветствую конструктивную критику и всегда рад найти новые точки профессионального и личностного роста'
    },
    {
        text: 'Умею передавать мысли и формулировать вопросы'
    },
    {
        text: 'Постоянно совершенствую свои навыки и изучаю новые технологии'
    },
]

interface SoftSkillsProps {
    className?: string;
}

export const SoftSkills = memo(({ className }: SoftSkillsProps) => {
    return (
        <VStack
            className={classNames(cl.SoftSkills, {}, [className])}
            gap='32'
            max
        >
            <Text
                text='Soft skills'
                size='m'
            />

            <VStack gap='16' max>
                {
                    skills.map(skill =>
                        <SkillsCard
                            key={skill.text}
                            text={skill.text}
                        />
                    )
                }
            </VStack>
        </VStack>
    );
});
