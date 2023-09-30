import cl from './Carousel.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '../Stack';
import { ReactNode, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import Arrow from '@/shared/assets/icons/arrow.svg';

interface CarouselProps {
    className?: string;
    items: ReactNode[];
}

export const Carousel = memo((props: CarouselProps) => {
    const {
        className,
        items
    } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const itemsWrapperRef = useRef<HTMLDivElement>(null);

    const onNext = useCallback(() => {
        if (wrapperRef.current && itemsWrapperRef.current) {
            const leftValue = Number(window.getComputedStyle(wrapperRef.current).getPropertyValue('left').replace('px', ''));

            if (-leftValue + itemsWrapperRef.current.offsetWidth + 50 < wrapperRef.current.scrollWidth) {
                wrapperRef.current.style.setProperty('left', `${leftValue - 50}px`);
            } else {
                wrapperRef.current.style.setProperty('left', `${itemsWrapperRef.current.offsetWidth - wrapperRef.current.scrollWidth}px`);
            }
        }
    }, [wrapperRef, itemsWrapperRef])

    const onPrev = useCallback(() => {
        if (wrapperRef.current) {
            const leftValue = Number(window.getComputedStyle(wrapperRef.current).getPropertyValue('left').replace('px', ''));

            if (leftValue + 50 > 0) {
                wrapperRef.current.style.setProperty('left', `0px`);
            } else {
                wrapperRef.current.style.setProperty('left', `${leftValue + 50}px`);
            }
        }
    }, [wrapperRef]);

    return (
        <HStack
            className={classNames(cl.wrapper, {}, [className])}
            justify='between'
        >
            <VStack className={cl.leftArrow}>
                <Icon
                    Svg={Arrow}
                    clickable
                    onClick={onPrev}
                />
            </VStack>

            <div
                className={cl.itemsWrapper}
                ref={itemsWrapperRef}
            >
                <div
                    className={cl.itemsBlock}
                    ref={wrapperRef}
                >
                    {
                        items
                    }
                </div>
            </div>

            <VStack className={cl.rightArrow}>
                <Icon
                    Svg={Arrow}
                    clickable
                    onClick={onNext}
                />
            </VStack>
        </HStack>
    )
});
