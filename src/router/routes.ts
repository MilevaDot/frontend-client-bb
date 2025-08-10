import { lazy } from 'react'

export const Elements = {

    SignIn: lazy(() => import('../pages/auth/SignIn')),
    SignUp: lazy(() => import('../pages/auth/SignUp')),

    WebsiteHome: lazy(() => import('../pages/website/WebsiteHome')),

    Contact: lazy(() => import('../pages/contact/Contact')),
    ContactCreate: lazy(() => import('../pages/contact/ContactCreate')),
    ContactForm: lazy(() => import('../pages/contact/ContactForm')),

    Appointment: lazy(() => import('../pages/appointment/Appointment')),
    AppointmentCreate: lazy(() => import('../pages/appointment/AppointmentCreate')),
    AppointmentForm: lazy(() => import('../pages/appointment/AppointmentForm')),

}

export const Paths = {
    SignIn: '/signin',
    SignUp: '/signup',

    WebsiteHome: '/',

    Contact: '/contact',
    ContactCreate: '/contactcreate',
    ContactForm: '/contact/:id',

    Appointment: '/appointment',
    AppointmentCreate: '/appointmentcreate',
    AppointmentForm: '/appointment/:id',

}