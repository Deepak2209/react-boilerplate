import Paths from "./routeConstants";
import views from "../pages";

const HomePage = {
    exact: true,
    path : Paths.HOME_PATH,
    component : views.HomePage
}

const AboutPage = {
    exact: true,
    path : Paths.ABOUT_PATH,
    component : views.AboutPage,
}

const ContactPage = {
    exact: true,
    path : Paths.CONTACT_PATH,
    component : views.ContactPage,
}

export default [
    HomePage,
    AboutPage,
    ContactPage
]