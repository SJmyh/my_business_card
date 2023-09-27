import { classNames } from "@/shared/lib/classNames/classNames"
import photo from '@/shared/assets/icons/myPhotoTwo.png';
import { Slider } from "@/shared/ui/Slider/Slider";

const MainPage = () => {
    return (
        <div className={classNames('', {}, [])}>
            Main page

            <Slider
                elems={[
                    <div style={{width: '300px', height: '300px', background: "red"}}>1</div>,
                    <div style={{width: '300px', height: '300px', background: "blue"}}>2</div>,
                    <div style={{width: '300px', height: '300px', background: "yellow"}}>3</div>,
                    <div style={{width: '300px', height: '300px', background: "green"}}>4</div>,
                    <div style={{width: '300px', height: '300px', background: "pink"}}>5</div>,
                ]}
            />

            <img src={photo} />
        </div>
    )
}

export default MainPage