import "./App.css";
// import Slider from './Components/Slider/Slider'
// import Onboarding from './Components/InicioDialog/Onboarding'
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RegisterIcesi from "./Pages/Register/RegisterIcesi";
import RegisterExterno from "./Pages/Register/RegisterExterno";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterOtherNext from "./Pages/Register/RegisterOtherNext";
import Home from "./Pages/home/home";
import Layout from "./Pages/Layout/Layout";
import ConfirmedProfile from "./Pages/ConfirmedProfile/ConfirmedPerfil";
import Profile from "./Pages/Profile/Profile";
import ProfileCreate from "./Pages/ProfileCreate/ProfilesCreate";
import Events from "./Pages/Events/Events";
// import EventSchedule from "./Pages/Events/eventSchedule/EventSchedule";
import EventReady from "./Pages/Events/eventSchedule/EventReady";
import Reports from "./Pages/Profile/MyReports/Reports";
import Conect from "./Pages/Conectate/Conect";
import Equality from "./Pages/Conectate/PoliticaIgualdad/Equality";
import { MyEvents } from "./Pages/Profile/MyEvents/MyEvents";
import { DetailEvents } from "./Pages/Profile/MyEvents/DetailEvents/DetailEvents";
import RouteForm from "./Pages/RouteForm/RouteForm";
import RouteFormSend from "./Pages/RouteForm/RouteFormSend/RouteFormSend";
// import QuestionCard from "./Components/QuestionCard/QuestionCard";
import Questions from "./Pages/Questions/Questions";
import HomeOthers from "./Pages/home/HomeOthers";
import OnboardingEvents from "./Pages/Events/onboardingEvents/OnboardingEvents";
import PrincipalSchedule from "./Pages/Events/eventOptionsScheduled/PrincipalSchedule";
import OnboardingIceberg from "./Pages/Iceberg/OnboardingIceberg";
import HappenedMeFalse from "./Pages/HappenedMe/HappenedMeFalse";
import HappenedMeTrue from "./Pages/HappenedMe/HappendMeTrue";
import HappenedMeResponse from "./Pages/HappenedMe/HappenedMeResponse";
import UnboardingLearn from "./Pages/Learm/UnboardingLearn";
import Learn from "./Pages/Learm/Learn";
import Onboarding from "./Pages/RegisterProfile/Onboarding";
import RegisterProfile from "./Pages/RegisterProfile/RegisterProfile";
import RegisterForm from "./Pages/RegisterProfile/RegisterForm";
import RegisterEndForm from "./Pages/RegisterProfile/RegisterEndForm";
import OnboardingRoute from "./Pages/Route/OnboardingRoute";
import RouteOferts from "./Pages/Route/RouteOferts";
import RouteFormNew from "./Pages/Route/RouteFormNew";
import OnboardingRouteEnd from "./Pages/Route/OnboardingRouteEnd";
import LearnBooks from "./Pages/LearnBooks/LearnBooks";
import Instagram from "./Pages/Instagram/Instagram";
import HearVoices from "./Pages/HearVoices/HearVoices";
import HearVoices1 from "./Pages/HearVoices/HearVoices1";
import HearVoices2 from "./Pages/HearVoices/HearVoices2";
import IceBerg from "./Pages/Iceberg/IceBerg";
import IceBergOthers from "./Pages/Iceberg/IcebergOthers";
import Ofertas from "./Pages/ofertas/Ofertas";
import OnboardingOfertas from "./Pages/ofertas/onboardingOfertas/OnboardingOfertas";
import SubTypesOfertas from "./Pages/ofertas/ofertasOptionWidgets/SubTypesOfertas";
import OnboardingIceberg2 from "./Pages/Iceberg/OnboardingIceberg2";
import Ceaf from "./Pages/Events/eventOptions/Ceaf";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/CreateProfile",
        element: <ProfileCreate />,
    },
    {
        path: "/home",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/home/profile",
                element: <Profile />,
            },
            {
                path: "/home/unboarding-aprende",
                element: <UnboardingLearn />,
            },
            {
                path: "/home/Aprende",
                element: <Learn />,
            },
            {
                path: "/home/Escucha-Voces",
                element: <HearVoices />,
            },
            {
                path: "/home/AprendeLibros",
                element: <LearnBooks />,
            },
            {
                path: "/home/profile/Reports",
                element: <Reports />,
            },
            {
                path: "/home/MeHaPasado",
                element: <Questions />,
            },
            {
                path: "/home/MeHaPasado/1",
                element: <HappenedMeFalse />,
            },
            {
                path: "/home/MeHaPasado/2",
                element: <HappenedMeTrue />,
            },
            {
                path: "/home/MeHaPasado/Response",
                element: <HappenedMeResponse />,
            },
            {
                path: "/home/MyEvents",
                element: <MyEvents />,
            },
            {
                path: "/home/DetailEvents/:id",
                element: <DetailEvents />,
            },
            {
                path: "/home/Events",
                element: <OnboardingEvents />,
            },
            {
                path: "/home/Events/next",
                element: <Events />,
            },
            {
                path: "/home/Iceberg/onboard/1",
                element: <OnboardingIceberg />,
            },
            {
                path: "/home/Iceberg/onboard/2",
                element: <OnboardingIceberg2 />,
            },
            {
                path: "/home/Iceberg",
                element: <IceBerg />,
            },
            {
                path: "/home/Iceberg/:id",
                element: <IceBergOthers />,
            },
            {
                path: "/home/Events/Schedule",
                element: <PrincipalSchedule />,
            },
            {
                path: "/home/Events/Ready",
                element: <EventReady />,
            },
            {
                path: "/home/Menu",
                element: <EventReady />,
            },
            {
                path: "/home/Conectate",
                element: <Conect />,
            },
            {
                path: "/home/Conectate/Politicas",
                element: <Equality />,
            },
            {
                path: "/home/Ruta",
                element: <OnboardingRoute />,
            },
            {
                path: "/home/Ruta/Ofertas",
                element: <RouteOferts />,
            },
            {
                path: "/home/Instagram",
                element: <Instagram />,
            },
            {
                path: "/home/Ruta/Ofertas/Form",
                element: <RouteFormNew />,
            },
            {
                path: "/home/RouteForm",
                element: <RouteForm />,
            },
            {
                path: "/home/RouteFormSend",
                element: <RouteFormSend />,
            },
            {
                path: "/home/others/:id",
                element: <HomeOthers />,
            },
            {
                path: "/home/iceberg/onboard",
                element: <OnboardingIceberg />,
            },
            {
                path: "/home/ofertas",
                element: <OnboardingOfertas />,
            },
            {
                path: "/home/ofertas/next",
                element: <Ofertas />,
            },
            {
                path: "/home/ofertas/next/card",
                element: <SubTypesOfertas />,
            },
            {
                path: "/home/ruta/end",
                element: <OnboardingRouteEnd />,
            },
        ],
    },
    {
        path: "/RegisterProfile",
        element: <RegisterProfile />,
    },
    {
        path: "/Escuchas-Voces/2",
        element: <HearVoices2 />,
    },
    {
        path: "/Escuchas-Voces/1",
        element: <HearVoices1 />,
    },
    {
        path: "/RegisterProfile/Form",
        element: <RegisterForm />,
    },
    {
        path: "/RegisterProfile/Form/End",
        element: <RegisterEndForm />,
    },
    {
        path: "/RegisterProfile/Form/End/Activada",
        element: <OnboardingRouteEnd />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/RegisterIcesi",
        element: <RegisterIcesi />,
    },
    {
        path: "/RegisterOthers",
        element: <RegisterExterno />,
    },
    {
        path: "/RegisterOthersNext",
        element: <RegisterOtherNext />,
    },

    {
        path: "/Intro",
        element: <Onboarding />,
    },
    {
        path: "/perfil3",
        element: <ConfirmedProfile />,
    },
    {
        path: "/Profile",
        element: <ProfileCreate />,
    },
]);

export default function () {
    return <RouterProvider router={router} />;
}
