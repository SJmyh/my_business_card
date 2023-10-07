import { ReactNode, memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './CollapsibleBlock.module.scss';
import Arrow from '@/shared/assets/icons/arrow.svg';
import { motion, AnimatePresence } from "framer-motion";
import { HStack, VStack } from '../Stack';
import { Icon } from '../Icon';
import { onSmooth } from '@/shared/lib/onSmooth/onSmooth';

interface CollapsibleBlockProps {
    className?: string;
    children?: ReactNode;
    baseContent: ReactNode;
    id: string;
}

export const CollapsibleBlock = memo((props: CollapsibleBlockProps) => {
    const {
        className,
        children,
        baseContent,
        id
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onChangeOpen = useCallback(() => {
        setIsOpen(!isOpen);

        if (isOpen) {
            onSmooth(id, 60);
        }
    }, [setIsOpen, id, onSmooth, isOpen])

    return (
        <VStack
            className={classNames(cl.CollapsibleBlock, {}, [className])}
            max
        >
            <div>
                {baseContent}
            </div>
            {
                children && (
                    <VStack gap='16' max>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.section
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    {children}
                                </motion.section>
                            )}
                        </AnimatePresence>
                        <motion.header
                            initial={false}
                            onClick={() => onChangeOpen()}
                        >
                            <HStack
                                className={cl.arrowBlock}
                                max
                                justify='center'
                            >
                                <Icon
                                    className={cl.arrow}
                                    Svg={Arrow}
                                    style={{
                                        transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)'
                                    }}
                                />
                            </HStack>
                        </motion.header>
                    </VStack>
                )
            }
        </VStack >
    );
});