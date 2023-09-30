import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import cl from './PortfolioPage.module.scss';
import { Title } from "@/shared/ui/Title/Title";
import { PortfolioList } from "@/widgets/PortfolioList";
import { Carousel } from "@/shared/ui/Carousel/Carousel";
import js from '@/shared/assets/icons/instruments/js.png';
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

            <div style={{ width: '370px', background: 'red' }}>
                <Carousel
                    items={
                        [
                            <img src={js} />,
                            <img src={ts} />,
                            <img src={js} />,
                            <img src={ts} />,
                            <img src={js} />,
                            <img src={ts} />,
                            <img src={js} />,
                            <img src={ts} />,
                            <img src={js} />,
                            <img src={ts} />,
                            <img src={js} />,
                            <img src={ts} />,
                        ]
                    }
                />
            </div>
        </VStack>
    );
}

export default PortfolioPage