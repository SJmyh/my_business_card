import { classNames } from "@/shared/lib/classNames/classNames"
import photo from '@/shared/assets/icons/myPhotoTwo.png';

const MainPage = () => {
    return (
        <div className={classNames('', {}, [])}>
            Main page

            <img src={photo} />
        </div>
    )
}

export default MainPage