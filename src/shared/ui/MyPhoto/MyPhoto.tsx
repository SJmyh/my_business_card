import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './MyPhoto.module.scss';
import photo from '../../assets/icons/myPhoto.png';

interface MyPhotoProps {
    className?: string;
}

export const MyPhoto = memo(({ className }: MyPhotoProps) => {
    return (
        <div className={classNames(cl.MyPhoto, {}, [className])}>
            <div className={cl.block}/>

            <img
                className={cl.photo}
                src={photo}
            />
        </div>
    );
});
