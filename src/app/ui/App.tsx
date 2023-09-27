import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/navbar/ui/Navbar';
import { AppRouter } from '../providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}