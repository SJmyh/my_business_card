import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SliderMainPage.module.scss';
import { Slider } from '@/shared/ui/Slider/Slider';
import { FirstPage } from '../pages/firstPage/FirstPage';
import { SecondPage } from '../pages/secondPage/SecondPage';

interface SliderMainPageProps {
    className?: string;
}

export const SliderMainPage = memo(({ className }: SliderMainPageProps) => {
    return (
        <Slider
            className={classNames(cl.SliderMainPage, {}, [className])}
            elems={[
                <FirstPage />,
                <SecondPage />
            ]}
        />
    );
});
