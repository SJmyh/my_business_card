import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRoutes, getPathMain, getPathNotFoundPage } from "@/shared/const/router";
import { RouteProps } from "react-router";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getPathMain(),
        element: <MainPage />
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: getPathNotFoundPage(),
        element: <NotFoundPage />
    },
}