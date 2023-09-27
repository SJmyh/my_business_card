import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SkillsPage.module.scss';
import { Title } from '@/shared/ui/Title/Title';

interface SkillsPageProps {
    className?: string;
}

const SkillsPage = memo(({ className }: SkillsPageProps) => {
    return (
        <div className={classNames(cl.SkillsPage, {}, ['container', className])}>
            <Title
                position='start'
                title='Навыки'
            />
        </div>
    );
});

export default SkillsPage;