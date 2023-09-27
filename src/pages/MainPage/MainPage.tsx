import { classNames } from "@/shared/lib/classNames/classNames"
import { Slider } from "@/shared/ui/Slider/Slider";
import cl from './MainPage.module.scss';
import { HStack } from "@/shared/ui/Stack";
import { MyPhoto } from "@/shared/ui/MyPhoto/MyPhoto";

const MainPage = () => {
    return (
        <HStack
            className={classNames(cl.mainPage, {}, ['container'])}
            align="start"
        >
            <Slider
                elems={[
                    <div style={{ width: '300px', height: '300px', background: "red" }}>1</div>,
                    <div style={{ width: '300px', height: '300px', background: "blue" }}>2</div>,
                    <div style={{ width: '300px', height: '300px', background: "yellow" }}>3</div>,
                    <div style={{ width: '300px', height: '300px', background: "green" }}>4</div>,
                    <div style={{ width: '300px', height: '300px', background: "pink" }}>5</div>,
                ]}
            />

            <MyPhoto />
        </HStack>
    )
}

export default MainPage