import loadable from "loadable-components";
import Loader from "../components/Loader";

const HomePage = loadable(() => import("./Home"), {
  LoadingComponent: Loader,
});

const AboutPage = loadable(() => import("./About"), {
  LoadingComponent: Loader,
});

const ContactPage = loadable(() => import("./Contact"), {
  LoadingComponent: Loader,
});


export default {
  HomePage,
  AboutPage,
  ContactPage,
};
