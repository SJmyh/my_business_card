import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ExperienceListItem.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { Text } from '@/shared/ui/Text';

export interface ExperienceProps {
    date: string;
    companyName: string;
    post: string;
    tasks: string[];
    stacks: any;
}

interface ExperienceListItemProps {
    className?: string;
    experience: ExperienceProps;
}

export const ExperienceListItem = memo((props: ExperienceListItemProps) => {
    const {
        className,
        experience
    } = props;

    const {
        date,
        companyName,
        post,
        tasks,
        stacks,
    } = experience;

    const returnIcons = useCallback(() => {
        const icons: ReactNode[] = [];

        console.log(stacks);

        stacks.map((elem: any) => {
            icons.push(<img src={elem} />);
        })

        console.log(icons);

        return icons;
    }, [stacks])

    return (
        <VStack
            className={classNames(cl.experienceListItem, {}, [className])}
            gap='32'
            max
        >
            <div className={cl.date}>
                <Text
                    text={date}
                    size='m'
                />
            </div>

            <HStack
                justify='between'
                align='start'
                max
            >
                <VStack
                    justify='start'
                    gap='24'
                >
                    <HStack
                        gap='32'
                        align='start'
                    >
                        <Text
                            text='Компания: '
                            variant='optional'
                            size='xs'
                        />

                        <Text
                            text={companyName}
                            align='justify'
                            size='xs'
                        />
                    </HStack>

                    <HStack
                        gap='32'
                        align='start'
                    >
                        <Text
                            text='Должность: '
                            variant='optional'
                            size='xs'
                        />

                        <Text
                            text={post}
                            align='justify'
                            size='xs'
                        />
                    </HStack>
                </VStack>

                <VStack>
                    <HStack
                        gap='32'
                        align='start'
                    >
                        <Text
                            text='Задачи: '
                            variant='optional'
                            size='xs'
                        />

                        <VStack
                            gap='8'
                        >
                            {
                                tasks.map(task =>
                                    <Text
                                        text={`>${task}`}
                                        align='justify'
                                        size='xs'
                                    />
                                )
                            }
                        </VStack>
                    </HStack>
                </VStack>
            </HStack>

            <HStack
                max
            >
                <Carousel
                    items={
                        returnIcons()
                    }
                />
            </HStack>
        </VStack>
    );
});
