import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PortfolioListItem.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Carousel } from "@/shared/ui/Carousel/Carousel";
import babel from '@/shared/assets/icons/instruments/babel.png';
import css from '@/shared/assets/icons/instruments/css.png';
import eslint from '@/shared/assets/icons/instruments/eslint.png';
import html from '@/shared/assets/icons/instruments/html.png';
import js from '@/shared/assets/icons/instruments/js.png';
import scss from '@/shared/assets/icons/instruments/scss.png';
import ts from '@/shared/assets/icons/instruments/ts.png';
import { CollapsibleBlock } from '@/shared/ui/CollapsibleBlock/CollapsibleBlock';

export interface ProjectProps {
    title: string,
    about: string[],
    stacks: any,
    screen: any,
}

interface PortfolioListItemProps {
    className?: string;
    project: ProjectProps;
}

export const PortfolioListItem = memo((props: PortfolioListItemProps) => {
    const {
        project,
        className
    } = props;

    const returnIcons = useCallback(() => {
        const icons: ReactNode[] = [];

        project.stacks.map((elem: any) => {
            icons.push(<img src={elem} />);
        })

        return icons;
    }, [project])

    return (
        <HStack
            className={classNames(cl.PortfolioListItem, {}, [className])}
            max
            gap='24'
            align='start'
        >
            <div className={cl.photoWrapper}>
                <img src={project.screen} className={cl.photo} />
            </div>

            <VStack
                className={cl.body}
                gap='8'
                justify='between'
                maxHeight
            >
                <HStack
                    gap='32'
                    align='start'
                >
                    <Text
                        className={cl.body_title}
                        text='Название: '
                        variant='optional'
                        size='xs'
                    />

                    <Text
                        title={project.title}
                        align='justify'
                        size='m'
                        bold
                    />
                </HStack>

                <HStack
                    gap='32'
                    align='start'
                >
                    <Text
                        className={cl.body_title}
                        text='О проекте:'
                        variant='optional'
                        size='xs'
                    />

                    <CollapsibleBlock>
                        <VStack gap='16'>
                            {
                                project.about.map(par =>
                                    <Text
                                        text={par}
                                        align='justify'
                                        size='xs'
                                    />
                                )
                            }
                        </VStack>
                    </CollapsibleBlock>
                </HStack>

                <HStack
                    align='start'
                    gap='32'
                    max
                >
                    <Text
                        className={cl.body_title}
                        text='Стек:'
                        variant='optional'
                        size='xs'
                    />

                    <HStack
                        max
                    >
                        <Carousel
                            items={
                                [
                                    <img src={babel} />,
                                    <img src={css} />,
                                    <img src={eslint} />,
                                    <img src={html} />,
                                    <img src={js} />,
                                    <img src={scss} />,
                                    <img src={ts} />,
                                    <img src={babel} />,
                                    <img src={css} />,
                                    <img src={eslint} />,
                                    <img src={html} />,
                                    <img src={js} />,
                                    <img src={scss} />,
                                    <img src={ts} />,
                                ]
                            }
                        />
                    </HStack>
                </HStack>
            </VStack>
        </HStack>
    );
});
