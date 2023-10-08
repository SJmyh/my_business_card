import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SecondPage.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface FirstPageProps {
    className?: string;
}

export const SecondPage = memo(({ className }: FirstPageProps) => {
    const { theme } = useTheme();

    return (
        <div className={classNames(cl.SecondPage, {}, [cl[theme], className])}>
            Имею <span className={cl.accentWord}>более 2 лет</span> опыта коммерческой разработки
        </div>
    );
});
