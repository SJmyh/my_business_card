import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Icon.module.scss';

type SVGProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

type SVGVariatn = "default" | "dark" | 'disabled';

interface IconBaseProps extends SVGProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    variant?: SVGVariatn;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        variant = 'default',
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames("", { }, [className, cl[variant]])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={cl.button}
                onClick={props.onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
