import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './FourthPage.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface FourthPageProps {
    className?: string;
}

export const FourthPage = memo(({ className }: FourthPageProps) => {
    const { theme } = useTheme();

    return (
        <div className={classNames(cl.FourthPage, {}, [cl[theme], className])}>
            Регулярно улучшаю <span className={cl.accentWord}>навыки</span> и изучаю новые <span className={cl.accentWord}>технологии</span>
        </div>
    );
});
