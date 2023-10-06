import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './AboutPage.module.scss';
import { MyPhoto } from '@/shared/ui/MyPhoto/MyPhoto';
import { HStack, VStack } from '@/shared/ui/Stack';
import { SliderMainPage } from '@/widgets/sliderMainPage';

interface AboutPageProps {
    className?: string;
}

const AboutPage = memo(({ className }: AboutPageProps) => {
    return (
        <HStack
            id="about"
            className={classNames(cl.mainPage, {}, ['container'])}
            align="start"
            justify='between'
        >
            <VStack className={cl.slider} maxHeight justify="center">
                <SliderMainPage />
            </VStack>

            <MyPhoto />
        </HStack>
    );
});

export default AboutPage