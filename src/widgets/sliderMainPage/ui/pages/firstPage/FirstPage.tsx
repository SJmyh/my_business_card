import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './FirstPage.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface FirstPageProps {
    className?: string;
}

export const FirstPage = memo(({ className }: FirstPageProps) => {
    const {theme} = useTheme();

    return (
        <div className={classNames(cl.FirstPage, {}, [cl[theme], className])}>
            Hello, <span className={cl.accentWord}>World!</span> Меня зовут Шестопалов Иван. <br /> Мне 20 лет и я <span className={cl.accentWord}>Frontend-</span>разработчик.
        </div>
    );
});
