import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Text.module.scss';

export type TextAlign = 'left' | 'right' | 'center' | 'justify';
export type TextVariant = 'default' | 'optional' | 'optional_light';
export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type HeaderTagType = 'h1' | 'h2' | 'h3';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    variant?: TextVariant;
}

const mapSizeToClass: Record<TextSize, string> = {
    xs: cl.size_xs,
    s: cl.size_s,
    m: cl.size_m,
    l: cl.size_l,
    xl: cl.size_xl,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    xs: 'h3',
    s: 'h3',
    m: 'h2',
    l: 'h1',
    xl: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        align = 'left',
        size = 'm',
        bold,
        variant = 'default',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cl[align], sizeClass, cl[variant]];

    return (
        <div className={classNames(cl.Text, { [cl.bold]: bold }, additionalClasses)}>
            {title && (
                <HeaderTag
                    className={cl.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cl.text}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
