import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/navbar/ui/Navbar';
import { AppRouter } from '../providers/router';

export const App = () => {
    return (
        <div className={classNames('app', {}, ['app_dark_theme'])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}