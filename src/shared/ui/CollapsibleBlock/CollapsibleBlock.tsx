import { ReactNode, memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './CollapsibleBlock.module.scss';
import { HStack, VStack } from '../Stack';
import { Icon } from '@/shared/ui/Icon';
import Arrow from '@/shared/assets/icons/arrow.svg';

interface CollapsibleBlockProps {
    className?: string;
    children?: ReactNode;
    baseHeight?: string;
}

export const CollapsibleBlock = memo((props: CollapsibleBlockProps) => {
    const {
        baseHeight = '300px',
        children,
        className
    } = props;

    const [isCollapsibel, setIsCollapsibel] = useState<boolean>(true);

    const onCollapse = useCallback(() => {
        setIsCollapsibel(!isCollapsibel);
    }, [isCollapsibel]);

    return (
        <VStack
            className={classNames(cl.CollapsibleBlock, {}, [className])}
            max
        >
            <div
                className={cl.content}
                style={{
                    height: isCollapsibel ? baseHeight : "auto"
                }}
            >
                {
                    children
                }
            </div>

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
                        transform: isCollapsibel ? 'rotate(90deg)' : 'rotate(-90deg)'
                    }}
                />
            </HStack>
        </VStack>
    );
});
