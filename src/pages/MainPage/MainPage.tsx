import { AboutPage } from "../AboutPage";
import { ContactsPage } from "../ContactsPage";
import { ExperiencePage } from "../ExperiencePage";
import { PortfolioPage } from "../PortfolioPage";
import { SkillsPage } from "../SkillsPage";

const MainPage = () => {
    return (
        <div>
            <AboutPage />
            <SkillsPage />
            <PortfolioPage />
            <ExperiencePage />
            <ContactsPage />
        </div>
    )
}

export default MainPage