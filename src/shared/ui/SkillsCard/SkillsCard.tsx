import { ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SkillsCard.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

interface SkillsCardProps {
    className?: string;
    text: string;
    icons?: ReactNode;
}

export const SkillsCard = memo((props: SkillsCardProps) => {
    const {
        className,
        text,
        icons,
    } = props;

    return (
        <HStack
            className={classNames(cl.SkillsCard, {}, [className])}
            justify='between'
            max
        >
            <Text
                className={cl.text}
                size="xs"
                text={`> ${text}`}
            />

            <HStack gap='16'>
                {
                    icons ? icons : ''
                }
            </HStack>
        </HStack>
    );
});
