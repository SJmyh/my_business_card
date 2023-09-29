import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PortfolioList.module.scss';
import { PortfolioListItem, ProjectProps } from '../PortfolioListItem/PortfolioListItem';
import js from '@/shared/assets/icons/instruments/js.png';
import ts from '@/shared/assets/icons/instruments/ts.png';
import screen_one from "@/shared/assets/screens/screen_one.png";
import { VStack } from '@/shared/ui/Stack';

interface PortfolioListProps {
    className?: string;
}

const mockData: ProjectProps[] = [
    {
        title: 'Чат + VK UI',
        about: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
        `,
        stacks: [js, ts],
        screen: screen_one,
    }
]

export const PortfolioList = memo(({ className }: PortfolioListProps) => {
    return (
        <VStack
            max
            className={classNames(cl.PortfolioList, {}, [className])}
            gap='32'
        >
            {
                mockData.map(elem =>
                    <PortfolioListItem
                        project={elem}
                    />
                )
            }
        </VStack>
    );
});
