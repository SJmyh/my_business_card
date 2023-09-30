import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import cl from './PortfolioPage.module.scss';
import { Title } from "@/shared/ui/Title/Title";
import { PortfolioList } from "@/widgets/PortfolioList";
import { Carousel } from "@/shared/ui/Carousel/Carousel";
import babel from '@/shared/assets/icons/instruments/babel.png';
import css from '@/shared/assets/icons/instruments/css.png';
import eslint from '@/shared/assets/icons/instruments/eslint.png';
import html from '@/shared/assets/icons/instruments/html.png';
import js from '@/shared/assets/icons/instruments/js.png';
import scss from '@/shared/assets/icons/instruments/scss.png';
import ts from '@/shared/assets/icons/instruments/ts.png';

interface PortfolioPageProps {
    className?: string;
}

const PortfolioPage = (props: PortfolioPageProps) => {
    const {
        className
    } = props;

    return (
        <VStack
            className={classNames(cl.PortfolioPage, {}, ['container', className])}
            gap='32'
        >
            <Title
                className={cl.title}
                position='center'
                title='Портфолио'
            />

            <PortfolioList />

            <div style={{ width: '350px', border: '1px solid red' }}>
                <Carousel
                    items={
                        [
                            <img src={babel} />,
                            <img src={css} />,
                            <img src={eslint} />,
                            <img src={html} />,
                            <img src={js} />,
                            <img src={scss} />,
                            <img src={ts} />,
                        ]
                    }
                />
            </div>
        </VStack>
    );
}

export default PortfolioPage