import AuthOutlet from "./outlets/AuthOutlet";
import ErpOutlet from "./outlets/ErpOutlet";
import WebsiteOutlet from "./outlets/WebsiteOutlet";
import { Elements, Paths } from "./routes";
import { Route, Routes } from "react-router-dom";

const {
        Appointment,
        AppointmentCreate,
        AppointmentForm,
        SignIn,
        SignUp,
        Contact,
        ContactCreate,
        ContactForm,
        WebsiteHome
    } = Elements

const AppRoutes = () => {
    return (
        <Routes>

            <Route element={ <AuthOutlet /> }>
                <Route path={Paths.SignIn} element={ <SignIn /> } />
                <Route path={Paths.SignUp} element={ <SignUp /> } />
            </Route>

            <Route element={ <ErpOutlet /> }>
                <Route path={Paths.Contact} element={ <Contact /> } />
                <Route path={Paths.ContactCreate} element={ <ContactCreate /> } />
                <Route path={Paths.ContactForm} element={ <ContactForm /> } />

                <Route path={Paths.Appointment} element={ <Appointment /> }  />
                <Route path={Paths.AppointmentCreate} element={ <AppointmentCreate /> } />
                <Route path={Paths.AppointmentForm} element={ <AppointmentForm /> } />
            </Route>

            <Route element={ <WebsiteOutlet /> }>
                <Route path={Paths.WebsiteHome} element={ <WebsiteHome /> } />
            </Route>

        </Routes>
    )
}

export default AppRoutes