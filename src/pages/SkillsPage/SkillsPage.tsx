import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SkillsPage.module.scss';
import { Title } from '@/shared/ui/Title/Title';
import { HStack, VStack } from '@/shared/ui/Stack';
import { HardSkills } from '@/widgets/HardSkills';
import { SoftSkills } from '@/widgets/SoftSkills';

interface SkillsPageProps {
    className?: string;
}

const SkillsPage = memo(({ className }: SkillsPageProps) => {
    return (
        <VStack 
            className={classNames(cl.SkillsPage, {}, ['container', className])}
            gap='32'
        >
            <Title
                className={cl.title}
                position='start'
                title='Навыки'
            />

            <HStack
                max
                gap='32'
                align='start'
            >
                <HardSkills />
                <SoftSkills />
            </HStack>
        </VStack>
    );
});

export default SkillsPage;