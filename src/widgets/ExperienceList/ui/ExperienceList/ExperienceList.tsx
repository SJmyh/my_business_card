import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ExperienceList.module.scss';
import { ExperienceListItem, ExperienceProps } from '../ExperienceListItem/ExperienceListItem';
import js from '@/shared/assets/icons/instruments/js.png';
import ts from '@/shared/assets/icons/instruments/ts.png';
import { VStack } from '@/shared/ui/Stack';

interface ExperienceListProps {
    className?: string;
}

const mockData: ExperienceProps[] = [
    {
        date: 'Апрель 2023 - по настоящее время',
        companyName: 'ТрансКапиталБанк',
        post: 'Frontend-разработчик',
        tasks: [
            'Решение таких проблем',
            'Решение других проблем',
            'Решение еще каких-то проблем',
        ],
        stacks: [js, ts],
    },
    {
        date: 'Август 2020 - Апрель 2023',
        companyName: 'Технопарк РГСУ',
        post: 'Frontend-разработчик',
        tasks: [
            'Решение таких проблем',
            'Решение других проблем',
            'Решение еще каких-то проблем',
        ],
        stacks: [js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, ],
    },
]

export const ExperienceList = memo(({ className }: ExperienceListProps) => {
    return (
        <VStack
            max
            className={classNames(cl.experienceList, {}, [className])}
            gap='32'
        >
            {
                mockData.map(elem =>
                    <ExperienceListItem
                        experience={elem}
                        key={elem.date}
                    />
                )
            }
        </VStack>
    );
});
