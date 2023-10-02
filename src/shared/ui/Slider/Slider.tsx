import { ReactNode, memo, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Slider.module.scss';
import { HStack, VStack } from '../Stack';
import { Icon } from '../Icon';
import Arrow from '@/shared/assets/icons/arrow.svg';

interface SliderProps {
    className?: string;
    elems?: ReactNode[];
}

export const Slider = memo((props: SliderProps) => {
    const {
        className,
        elems,
    } = props;

    const [count, setCount] = useState(0);
    const elemsLength = elems?.length || 0;

    const prevElem = useCallback(() => {
        if (count - 1 >= 0) {
            setCount(count - 1);
        } else {
            setCount(elemsLength - 1);
        }
    }, [count]);

    const nextElem = useCallback(() => {
        if (count + 1 > elemsLength - 1) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }, [count]);

    return (
        <HStack className={classNames(cl.Slider, {}, [className])}>
            <VStack className={cl.leftArrow}>
                <Icon
                    Svg={Arrow}
                    clickable
                    onClick={prevElem}
                />
            </VStack>

            <VStack className={cl.contentWrapper}>
                <div
                    className={cl.content}
                >
                    {
                        elems?.[count]
                    }
                </div>
            </VStack>

            <VStack className={cl.rightArrow}>
                <Icon
                    fill='red'
                    Svg={Arrow}
                    clickable
                    onClick={nextElem}
                />
            </VStack>
        </HStack>
    );
});
