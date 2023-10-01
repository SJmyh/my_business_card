import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ExperiencePage.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Title } from '@/shared/ui/Title/Title';
import { ExperienceList } from '@/widgets/ExperienceList';

interface ExperiencePageProps {
    className?: string;
}

const ExperiencePage = memo(({ className }: ExperiencePageProps) => {
    return (
        <VStack
            className={classNames(cl.experiencePage, {}, [className, 'container'])}
        >
            <Title
                className={cl.title}
                position='end'
                title='Опыт работы'
            />

            <ExperienceList />
        </VStack>
    );
});

export default ExperiencePage