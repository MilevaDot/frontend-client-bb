    import React, { useEffect, useRef, useState } from "react"
    import { Link, useNavigate } from "react-router-dom"
    import FetchAuth from "../../helpers/FetchAuth"
    import { toast } from "sonner"
    import HelperHelmet from "../../helpers/HelperHelmet"
    import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, FormControl, FormLabel, HStack, Input, Select } from "@chakra-ui/react"
    import { ChevronRightIcon } from "@chakra-ui/icons"
    import { Paths } from "../../router/routes"
    import type { ContactType } from "../../declarations/Contact"

    const AppointmentCreate = () => {
        const formRef = useRef<HTMLFormElement>(null)
        const navigate = useNavigate()
        const [contacts, setContacts] = useState<Array<ContactType>>([])

        const now = new Date()
        const pad = (n: number) => String(n).padStart(2, '0')
        const formattedNow = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`

        const createForm = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            const form = e.currentTarget
            const data = new FormData(form)
            const { name, contact_id, date } = Object.fromEntries(data.entries())

            await FetchAuth('http://localhost:5000/appointment', {
                method: 'POST',
                body: JSON.stringify({ name, contact_id, date }),
            }).then(async (response) => {
                if ( !response ) {
                    return
                }
                const res = await response.json()

                if ( !response.ok ) {
                    toast.error('Algo salió mal', {
                        description: res.message || 'La información de no se envió correctamente'
                    })
                } else {
                    navigate(`/appointment/${res.data['id']}`)
                    toast.success('Cita creada')
                }
            }).catch(() => {
                toast.error('Algo salió mal', {
                    description: 'No se pudo crear la cita'
                })
            })
        }

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
                <HelperHelmet title='Beauty Bell | Crear Cita' />

                <Breadcrumb p='20px' separator={ <ChevronRightIcon /> }>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to={Paths.Appointment}>Cita</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink color='beautypink'>Creando cita</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <HStack p='0px 20px' justifyContent='space-between'>
                    <Box display='flex' gap='1em'>
                        <Link to={'/appointmentcreate'}>
                            <Button size='sm' colorScheme='beautypink' onClick={() => formRef.current?.requestSubmit()}>Guardar</Button>
                        </Link>
                        <Link to={'/appointment'}>
                            <Button size='sm' colorScheme='gray'>Cancelar</Button>
                        </Link>
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
                        onSubmit={createForm}
                        ref={formRef}
                        >
                        <HStack gap='10em'>
                            <FormControl>
                                <FormLabel>Nombre</FormLabel>
                                <Input type='text' name='name' required disabled defaultValue='Borrador' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Contacto</FormLabel>
                                <Select name='contact_id' placeholder='Selecciona un contacto' required>
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
                                <Input type='datetime-local' name='date' required defaultValue={formattedNow} />
                            </FormControl>
                            <FormControl></FormControl>
                        </HStack>
                    </Box>
                </Box>
            </>
        )
    }

    export default AppointmentCreate