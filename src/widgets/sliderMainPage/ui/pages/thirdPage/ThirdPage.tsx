import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ThirdPage.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThirdPageProps {
    className?: string;
}

export const ThirdPage = memo(({ className }: ThirdPageProps) => {
    const { theme } = useTheme();

    return (
        <div className={classNames(cl.ThirdPage, {}, [cl[theme], className])}>
            Успел поработать как на <span className={cl.accentWord}>фрилансе</span>, так и в <span className={cl.accentWord}>большой команде</span>
        </div>
    );
});
