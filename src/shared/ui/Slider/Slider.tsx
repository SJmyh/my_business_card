import cl from './Slider.module.scss';
import Arrow from '@/shared/assets/icons/arrow.svg';
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '../Stack';
import { Icon } from '../Icon';

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

interface SliderProps {
    elems: ReactNode[];
    className?: string;
}

export const Slider = (props: SliderProps) => {
    const {
        elems,
        className
    } = props;

    const [[page, direction], setPage] = useState([0, 0]);
    const childrenIndex = wrap(0, elems.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className={classNames(cl.exampleContainer, {}, [])}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    className={cl.content}
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                >
                    {
                        elems[childrenIndex]
                    }
                </motion.div>
            </AnimatePresence>
            <div className={cl.next} onClick={() => paginate(1)}>
                <VStack className={cl.leftArrow}>
                    <Icon
                        Svg={Arrow}
                    />
                </VStack>
            </div>
            <div className={cl.prev} onClick={() => paginate(-1)}>
                <VStack className={cl.rightArrow}>
                    <Icon
                        fill='red'
                        Svg={Arrow}
                    />
                </VStack>
            </div>
        </div >
    );
};

