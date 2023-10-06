import { AboutPage } from "../AboutPage";
import { ContactsPage } from "../ContactsPage";
import { ExperiencePage } from "../ExperiencePage";
import { PortfolioPage } from "../PortfolioPage";
import { SkillsPage } from "../SkillsPage";

const MainPage = () => {
    return (
        <>
            <AboutPage />
            <SkillsPage />
            <PortfolioPage />
            <ExperiencePage />
            <ContactsPage />
        </>
    )
}

export default MainPage