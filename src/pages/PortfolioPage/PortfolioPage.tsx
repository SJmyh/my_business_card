import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import cl from './PortfolioPage.module.scss';
import { Title } from "@/shared/ui/Title/Title";
import { PortfolioList } from "@/widgets/PortfolioList";

interface PortfolioPageProps {
    className?: string;
}

const PortfolioPage = (props: PortfolioPageProps) => {
    const {
        className
    } = props;

    return (
        <VStack
            id="portfolio"
            className={classNames(cl.PortfolioPage, {}, ['container', className])}
            gap='32'
        >
            <Title
                className={cl.title}
                position='center'
                title='Портфолио'
            />

            <PortfolioList />
        </VStack>
    );
}

export default PortfolioPage