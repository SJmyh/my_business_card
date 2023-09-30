import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SoftSkills.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { SkillsCard } from '@/shared/ui/SkillsCard/SkillsCard';

const skills = [
    {
        text: 'Коммуникабельность'
    },
    {
        text: 'Умение обучаться'
    },
    {
        text: 'Неконфликтность'
    },
    {
        text: 'Красота'
    },
    {
        text: 'Ум'
    },
    {
        text: 'И вообще очень хороший'
    },
    {
        text: 'Коммуникабельность'
    },
    {
        text: 'Умение обучаться'
    },
    {
        text: 'Неконфликтность'
    },
    {
        text: 'Красота'
    },
    {
        text: 'Ум'
    },
    {
        text: 'И вообще очень хороший'
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
