import { useEffect, useRef, useState } from "react"
import type { AppointmentType } from "../../declarations/Appointment"
import FetchAuth from "../../helpers/FetchAuth"
import { toast } from "sonner"
import HelperHelmet from "../../helpers/HelperHelmet"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, FormControl, FormLabel, HStack, Input, Select } from "@chakra-ui/react"
import { ChevronRightIcon, DeleteIcon } from "@chakra-ui/icons"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Paths } from "../../router/routes"
import type { ContactType } from "../../declarations/Contact"
import './appointment.css'

const AppointmentForm = () => {
    const [appointment, setAppointment] = useState<AppointmentType>()
    const [contacts, setContacts] = useState<Array<ContactType>>([])
    const [edit, setEdit] = useState<boolean>(false)
    const [invisible, setInvisible] = useState<boolean>(true)
    const formRef = useRef<HTMLFormElement>(null)
    const [contactId, setContactId] = useState(appointment?.contact.id || "")
    const [date, setDate] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()

    const getAppointment = async () => {
        await FetchAuth(`http://localhost:5000/appointment/${id}`, {
            method: 'GET'
        }).then( async (response) => {
            if ( !response ) {
                return
            }

            const res = await response.json()
            if (response.ok) {
                setContactId(res.data.contact_id)
                setDate(res.data.date)
                setAppointment(res.data as AppointmentType)
            } else {
                toast.error('Algo salió mal', {
                    description: res.message || 'No se pudo obtener el registro'
                })
            }
        }).catch((res) => {
            toast.error('Algo salió mal', {
                description: res.message || 'No se pudo obtener el registro'
            })
        })
    }

    const editAppointment = () => {
        setEdit(true)
        setInvisible(false)
    }

    const saveAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setEdit(false)
        setInvisible(true)
        const form = e.currentTarget
        const data = new FormData(form)
        const { name, contact_id, date } = Object.fromEntries(data.entries())

        await FetchAuth(`http://localhost:5000/appointment/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, contact_id, date })
        }).then(async (response) => {
            if (!response) {
                return
            }

            const res = await response.json()

            if ( response.ok ) {
                setAppointment(res.data as AppointmentType)
                toast.success('Cita actualizada con éxito')
            } else {
                toast.error('Algo salió mal', {
                    description: res.message || 'No se pudo actualizar la cita'
                })
            }
        }).catch((res) => {
            toast.error('Algo salió mal', {
                description: res.message || 'No se pudo actualizar el registros',
            })
        })
    }

    const deleteAppointment = async () => {
        await FetchAuth(`http://localhost:5000/appointment/${id}`, {
            method: 'DELETE'
        }).then(async (response) => {
            if (!response) {
                return
            }

            const res = await response.json()

            if ( response.ok ) {
                navigate('/appointment')
                toast.warning('Cita eliminada')
            } else {
                toast.error('Algo salió mal', {
                    description: res.message || 'No se pudo eliminar la cita'
                })
            }
        }).catch((res) => {
            toast.error('Algo salió mal', {
                description: res.message || 'No se pudo eliminar la cita'
            })
        })
    }

    useEffect(() => {
        getAppointment()
    }, [id])

    useEffect(() => {
        const getContacts = async () => {
            const response = await FetchAuth('http://localhost:5000/contact')
            if (!response) {
                return
            }

            const res = await response.json()

            if ( response.ok ) {
                setContacts(res.data)
            } else {
                toast.error('No se pudieron obtener los contactos', {
                    description: res.message
                })
            }
        }

        getContacts()
    }, [])

    return (
        <>
            <HelperHelmet title={`Beauty Bell | ${appointment?.name}`} />

            <Breadcrumb p='20px 20px 20px 20px' separator={<ChevronRightIcon />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={Paths.Appointment}>Citas</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color='beautypink'>{appointment?.name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <HStack p='0px 20px' justifyContent='space-between'>
                <Box display='flex' gap='1em'>
                    <Button size='sm' colorScheme='beautypink' onClick={editAppointment} className={invisible ? '' : 'inactive'} >Editar</Button>
                    <Button size='sm' colorScheme='beautypink' onClick={() => formRef.current?.requestSubmit()} className={invisible ? 'inactive' : ''}>Guardar</Button>
                    <Link to={ '/appointment' }>
                        <Button size='sm' colorScheme='beautypink'>Cancelar</Button>
                    </Link>
                </Box>
                <Box>
                    <Button
                        size='sm'
                        colorScheme='red'
                        leftIcon={<DeleteIcon />}
                        onClick={() => appointment && deleteAppointment()}
                        >
                        Eliminar
                    </Button>
                </Box>
            </HStack>
            <Box
                m='20px'
                p='0px 50px'
                borderRadius='10px'
                backgroundColor='var(--gray)'
                border='2px solid var(--gray-border)'
                >
                <Box
                    as='form'
                    p='20px'
                    onSubmit={saveAppointment}
                    ref={formRef}
                    >
                    <HStack gap='10em'>
                        <FormControl>
                            {/* <FormLabel>Nombre</FormLabel> */}
                            <Input type='text' name='name' disabled defaultValue={appointment?.name} required variant='unstyled'/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Contact</FormLabel>
                            <Select
                                name='contact_id'
                                disabled={edit ? false : true}
                                required
                                value={contactId}
                                onChange={(e) => setContactId(e.target.value)}
                                >
                                {contacts.map((contact) => (
                                    <option key={contact.id} value={contact.id}>
                                        {contact.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </HStack>
                    <HStack gap='10em'>
                        <FormControl>
                            <FormLabel>Fecha</FormLabel>
                            <Input
                                type='datetime-local'
                                name='date'
                                disabled={edit ? false : true}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                // defaultValue={appointment?.date}
                                required
                                />
                        </FormControl>
                        <FormControl></FormControl>
                    </HStack>
                </Box>
            </Box>
        </>
    )
}

export default AppointmentForm