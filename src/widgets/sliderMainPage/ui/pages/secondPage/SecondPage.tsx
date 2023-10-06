import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SecondPage.module.scss';

interface FirstPageProps {
    className?: string;
}

export const SecondPage = memo(({ className }: FirstPageProps) => {
    return (
        <div className={classNames(cl.SecondPage, {}, [className])}>
           123123123123123
        </div>
    );
});
