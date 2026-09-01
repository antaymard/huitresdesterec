import CnilPage from './pages/CnilPage';
import CommandePage from './pages/CommandePage';
import ContactPage from './pages/ContactPage';
import CoquillagesPage from './pages/CoquillagesPage';
import DegustationPage from './pages/DegustationPage';
import HomePage from './pages/HomePage';
import MentionsPage from './pages/MentionsPage';
import PointsDeVente from './pages/PointsDeVentePage';

const routes = [
    {
        path: "/",
        name: "Accueil",
        element: <HomePage />
    },
    {
        path: "/huitres-et-coquillages",
        name: "Huîtres et Coquillages",
        element: <CoquillagesPage />
    },
    {
        path: "/contact",
        name: "Nous contacter",
        element: <ContactPage />
    },
    {
        path: "/degustation",
        name: "Dégustation sur place",
        element: <DegustationPage />
    },
    {
        path: "/commande",
        name: "Commander en ligne",
        element: <CommandePage />
    },
    {
        path: "/points-de-vente",
        name: "Points de vente",
        element: <PointsDeVente />
    },
    {
        path: "/mentions-legales",
        name: "Mentions légales",
        element: <MentionsPage />
    },
    {
        path: "/cnil",
        name: "Mentions CNIL",
        element: <CnilPage />
    }
];

export default routes;