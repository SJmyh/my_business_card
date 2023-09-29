import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PortfolioListItem.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Slider } from '@/shared/ui/Slider/Slider';

export interface ProjectProps {
    title: string,
    about: string,
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
                        text={project.title}
                        align='justify'
                        size='xs'
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

                    <Text
                        text={project.about}
                        align='justify'
                        size='xs'
                    />
                </HStack>

                <HStack
                    gap='32'
                    align='start'
                >
                    <Text
                        className={cl.body_title}
                        text='Стек:'
                        variant='optional'
                        size='xs'
                    />

                    <Slider
                        className={classNames(cl.SliderMainPage, {}, [className])}
                        elems={[...returnIcons()]}
                    />
                </HStack>
            </VStack>
        </HStack>
    );
});
