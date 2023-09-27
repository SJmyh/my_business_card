import { classNames } from "@/shared/lib/classNames/classNames"
import { Slider } from "@/shared/ui/Slider/Slider";
import cl from './MainPage.module.scss';
import { HStack, VStack } from "@/shared/ui/Stack";
import { MyPhoto } from "@/shared/ui/MyPhoto/MyPhoto";
import { SliderMainPage } from "@/widgets/sliderMainPage";

const MainPage = () => {
    return (
        <HStack
            className={classNames(cl.mainPage, {}, ['container'])}
            align="start"
        >
            <VStack maxHeight justify="center">
                <SliderMainPage />
            </VStack>

            <MyPhoto />
        </HStack>
    )
}

export default MainPage