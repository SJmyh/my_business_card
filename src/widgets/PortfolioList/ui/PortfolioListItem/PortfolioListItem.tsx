import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PortfolioListItem.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Carousel } from "@/shared/ui/Carousel/Carousel";
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
    index: number;
}

export const PortfolioListItem = memo((props: PortfolioListItemProps) => {
    const {
        project,
        className,
        index
    } = props;

    const returnIcons = useCallback(() => {
        const icons: ReactNode[] = [];

        project.stacks.map((elem: any, index: number) => {
            icons.push(<img key={index} src={elem} />);
        })

        return icons;
    }, [project])

    return (
        <HStack
            className={classNames(cl.PortfolioListItem, {}, [className])}
            id={`portfolio_${index}`}
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
                    max
                >
                    <Text
                        className={cl.body_title}
                        text='О проекте:'
                        variant='optional'
                        size='xs'
                    />

                    <CollapsibleBlock
                        id={`portfolio_${index}`}
                        baseContent={<Text
                            text={project.about[0]}
                            align='justify'
                            size='xs'
                        />}
                    >
                        {
                            (project.about.length > 1) &&
                            <VStack gap='16'>
                                {
                                    project.about.map((par, index) =>
                                        index !== 0 && <Text
                                            text={par}
                                            align='justify'
                                            size='xs'
                                            key={index}
                                        />
                                    )
                                }
                            </VStack>
                        }
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
                                returnIcons()
                            }
                        />
                    </HStack>
                </HStack>
            </VStack>
        </HStack>
    );
});
