import type { ContactType } from "./Contact"

export interface AppointmentType {
    id: number
    name: string
    date: string
    contact_id: number
    contact: ContactType
    create_date: string
    write_date: string
}