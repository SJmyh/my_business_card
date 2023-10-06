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
    const [nextButtonVisible, setNextButtonVisible] = useState(true);
    const [prevButtonVisible, setPrevButtonVisible] = useState(true);

    const onNext = useCallback(() => {
        let bias = 0;

        const inteval = setInterval(() => {
            if (wrapperRef.current && itemsWrapperRef.current) {
                const leftValue = Number(window.getComputedStyle(wrapperRef.current).getPropertyValue('left').replace('px', ''));

                if (-leftValue + itemsWrapperRef.current.offsetWidth + 2 < wrapperRef.current.scrollWidth) {
                    wrapperRef.current.style.setProperty('left', `${leftValue - 2}px`);

                    bias += 2;
                } else {
                    wrapperRef.current.style.setProperty('left', `${itemsWrapperRef.current.offsetWidth - wrapperRef.current.scrollWidth}px`);
                    // setNextButtonVisible(false);
                    clearInterval(inteval);
                }

                if (bias >= 50) {
                    clearInterval(inteval);
                }
            }
        }, 6);
    }, [wrapperRef, itemsWrapperRef])

    const onPrev = useCallback(() => {
        let bias = 0;

        const inteval = setInterval(() => {
            if (wrapperRef.current && itemsWrapperRef.current) {
                const leftValue = Number(window.getComputedStyle(wrapperRef.current).getPropertyValue('left').replace('px', ''));

                if (leftValue + 2 > 0) {
                    wrapperRef.current.style.setProperty('left', `0px`);
                    clearInterval(inteval);
                } else {
                    wrapperRef.current.style.setProperty('left', `${leftValue + 2}px`);
                    // setPrevButtonVisible(false);
                    bias += 2;
                }

                if (bias >= 50) {
                    clearInterval(inteval);
                }
            }
        }, 6);
    }, [wrapperRef]);

    useEffect(() => {
        if (wrapperRef.current && itemsWrapperRef.current) {
            if (-Number(window.getComputedStyle(wrapperRef.current).getPropertyValue('left').replace('px', '')) + itemsWrapperRef.current.offsetWidth < wrapperRef.current.scrollWidth) {

            }
        }
    }, [wrapperRef, itemsWrapperRef])

    return (
        <HStack
            className={classNames(cl.wrapper, {}, [className])}
            justify='between'
        >
            <VStack className={cl.leftArrow}>
                {
                    prevButtonVisible && (
                        <Icon
                            Svg={Arrow}
                            clickable
                            onClick={onPrev}
                        />
                    )
                }
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
                {
                    nextButtonVisible && (
                        <Icon
                            Svg={Arrow}
                            clickable
                            onClick={onNext}
                        />
                    )
                }
            </VStack>
        </HStack>
    )
});
