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
    const itemsLength = items.length;
    const [width, setWidth] = useState<number | null>(null);
    const [isCarousel, setIsCarousel] = useState<boolean | null>(null);
    const [totalElements, setTotalElements] = useState<number>(0);
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const [elements, setElements] = useState<ReactNode[] | null>(null);

    const onNext = useCallback(() => {
        if (isCarousel) {
            const newArr = visibleItems;
            newArr.shift();

            if (newArr[newArr.length - 1] === itemsLength - 1) {
                newArr.push(0);
            } else {
                newArr.push(newArr[newArr.length - 1] + 1);
            }

            console.log('newArr ', newArr);

            setVisibleItems([...newArr]);
        }
    }, [visibleItems])

    const onPrev = useCallback(() => {
        if (isCarousel) {
            const newArr = visibleItems;
            newArr.pop();

            if (newArr[0] === 0) {
                newArr.unshift(itemsLength - 1);
            } else {
                newArr.unshift(newArr[0] - 1);
            }

            setVisibleItems([...newArr]);
        }
    }, [visibleItems])

    useEffect(() => {
        if (wrapperRef.current) {
            setWidth(wrapperRef.current.offsetWidth);
        }
    }, [])

    useEffect(() => {
        if (width && width >= 114) {
            const totalElements = Math.floor((width - 64) / 50);

            if (totalElements >= itemsLength) {
                setIsCarousel(false);
                setTotalElements(totalElements);
            } else {
                setIsCarousel(true);
                setTotalElements(totalElements);
            }
        }
    }, [width])

    useEffect(() => {
        if (isCarousel !== null) {
            const visibleArr = [];

            if (isCarousel) {
                for (let i = 0; i < totalElements; i++) {
                    visibleArr.push(i);
                }

                setVisibleItems(visibleArr);
            } else {
                for (let i = 0; i < itemsLength; i++) {
                    visibleArr.push(i);
                }

                setVisibleItems(visibleArr);
            }
        }
    }, [totalElements])

    useEffect(() => {
        if (visibleItems) {
            let newContent: ReactNode[] = [];

            visibleItems.map(item => {
                newContent.push(items[item]);
            })

            setElements(newContent);
        }
    }, [visibleItems])

    return (
        <div
            className={classNames(cl.wrapper, {}, [className])}
            ref={wrapperRef}
        >
            <VStack className={cl.leftArrow}>
                <Icon
                    Svg={Arrow}
                    clickable
                    onClick={onPrev}
                />
            </VStack>

            <HStack justify='between' max>
                {
                    elements
                }
            </HStack>

            <VStack className={cl.rightArrow}>
                <Icon
                    fill='red'
                    Svg={Arrow}
                    clickable
                    onClick={onNext}
                />
            </VStack>
        </div>
    )

});
