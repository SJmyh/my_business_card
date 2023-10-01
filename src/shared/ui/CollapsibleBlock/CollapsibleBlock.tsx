import { ReactNode, memo, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './CollapsibleBlock.module.scss';
import { HStack, VStack } from '../Stack';
import { Icon } from '@/shared/ui/Icon';
import Arrow from '@/shared/assets/icons/arrow.svg';

interface CollapsibleBlockProps {
    className?: string;
    children?: ReactNode;
    baseHeight?: number;
}

export const CollapsibleBlock = memo((props: CollapsibleBlockProps) => {
    const {
        baseHeight = 300,
        children,
        className
    } = props;

    const [isCollapsibel, setIsCollapsibel] = useState<boolean>(false);
    const [collapse, setCollapse] = useState<boolean>(true);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const onCollapse = useCallback(() => {
        setCollapse(!collapse);
    }, [collapse]);

    useEffect(() => {
        if (wrapperRef && wrapperRef.current) {
            if (Number(wrapperRef.current.scrollHeight) <= baseHeight) {
                setIsCollapsibel(false);
            } else {
                setIsCollapsibel(true);
            }
        }
    }, [wrapperRef])

    return (
        <VStack
            className={classNames(cl.CollapsibleBlock, {}, [className])}
            max
        >
            <div
                className={cl.content}
                style={{
                    height: isCollapsibel ? collapse ? `${baseHeight}px` : "auto" : 'auto'
                }}
            >
                <div
                    ref={wrapperRef}
                >
                    {
                        children
                    }
                </div>
            </div>

            {
                isCollapsibel && (
                    <HStack
                        className={cl.arrowBlock}
                        max
                        justify='center'
                    >
                        <Icon
                            className={cl.arrow}
                            Svg={Arrow}
                            clickable
                            onClick={onCollapse}
                            style={{
                                transform: collapse ? 'rotate(90deg)' : 'rotate(-90deg)'
                            }}
                        />
                    </HStack>
                )
            }
        </VStack>
    );
});
