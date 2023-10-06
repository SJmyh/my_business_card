import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Title.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

type PositionTitle = 'start' | 'center' | 'end';

interface TitleProps {
    className?: string;
    position?: PositionTitle;
    title: string;
}

export const Title = memo((props: TitleProps) => {
    const {
        title,
        className,
        position,
    } = props;

    const { theme } = useTheme();

    return (
        <HStack className={classNames(theme === 'app_light_theme' ? cl.TitleLight : cl.TitleDark, {}, [className])} max>
            {
                (position === 'center' || position === 'end') &&
                <div className={classNames(cl.line, {}, [])} />
            }

            <Text
                className={classNames(cl.text, {
                    [cl.left]: position === 'center' || position === 'end',
                    [cl.right]: position === 'center' || position === 'start',
                }, [])}
                title={title}
                size='xl'
            />

            {
                (position === 'center' || position === 'start') &&
                <div className={classNames(cl.line, {}, [])} />
            }
        </HStack>
    );
});
