import { memo, useCallback, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Burger.module.scss';
import { motion, useCycle } from "framer-motion";
import { useDimensions } from '@/shared/lib/hooks/useDimensions/useDimensions';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { onSmooth } from '@/shared/lib/onSmooth/onSmooth';

interface BurgerProps {
    className?: string;
}

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const Burger = memo(({ className }: BurgerProps) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    const { theme } = useTheme();

    const onClose = useCallback((id: string) => {
        onSmooth(id, 34);
        toggleOpen();
    }, [onSmooth, toggleOpen])

    return (
        <div className={classNames(cl.Burger, {}, [className])}>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}

            >
                <motion.div className={cl.background} variants={sidebar}>
                    <VStack
                        className={cl.linksBlock}
                        gap='32'
                    >
                        <div
                            className={cl.item}
                            onClick={() => onClose('about')}
                        >
                            <Text size="s" title="Обо мне" />
                        </div>

                        <div
                            className={cl.item}
                            onClick={() => onClose('skills')}
                        >
                            <Text size="s" title="Навыки" />
                        </div>

                        <div
                            className={cl.item}
                            onClick={() => onClose('portfolio')}
                        >
                            <Text size="s" title="Портфолио" />
                        </div>

                        <div
                            className={cl.item}
                            onClick={() => onClose('experience')}
                        >
                            <Text size="s" title="Опыт" />
                        </div>

                        <div
                            className={cl.item}
                            onClick={() => onClose('contacts')}
                        >
                            <Text size="s" title="Контакты" />
                        </div>
                    </VStack>
                </motion.div>

                <button
                    className={cl.button}
                    onClick={() => toggleOpen()}
                >
                    <svg
                        className={cl.svg}
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                    >
                        <Path
                            theme={theme === 'app_light_theme' ? 'light' : 'dark'}
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5" },
                                open: { d: "M 3 16.5 L 17 2.5" }
                            }}
                        />
                        <Path
                            theme={theme === 'app_light_theme' ? 'light' : 'dark'}
                            d="M 2 9.423 L 20 9.423"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            transition={{ duration: 0.1 }}
                        />
                        <Path
                            theme={theme === 'app_light_theme' ? 'light' : 'dark'}
                            variants={{
                                closed: { d: "M 2 16.346 L 20 16.346" },
                                open: { d: "M 3 2.5 L 17 16.346" }
                            }}
                        />
                    </svg>
                </button>
            </motion.nav>
        </div>
    );
});

const Path = (props: any) => (
    <motion.path
        strokeWidth="3"
        stroke={props.theme === 'light' ? '#000000' : 'rgb(255, 255, 255)'}
        strokeLinecap="round"
        {...props}
    />
);
