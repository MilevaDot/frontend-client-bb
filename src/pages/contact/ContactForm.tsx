import { useEffect, useRef, useState } from "react"
import HelperHelmet from "../../helpers/HelperHelmet"
import type { ContactType } from "../../declarations/Contact"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react"
import { ChevronRightIcon, DeleteIcon } from "@chakra-ui/icons"
import { Paths } from "../../router/routes"
import './contact.css'
import FetchAuth from "../../helpers/FetchAuth"

const ContactForm = () => {
    const [contact, setContact] = useState<ContactType>()
    const [edit, setEdit] = useState<boolean>(false)
    const [invisible, setInvisible] = useState<boolean>(true)
    const formRef = useRef<HTMLFormElement>(null)

    const navigate = useNavigate()
    const { id } = useParams()

    const getContact = async () => {
        await FetchAuth(`http://localhost:5000/contact/${id}`, {
            method: 'GET'
        }).then(async (response) => {
            if ( !response ) {
                return
            }
            const res = await response.json()
            if ( response.ok ) {
                setContact(res.data as ContactType)
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

    const editContact = () => {
        setEdit(true)
        setInvisible(false)
    }

    const saveContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setEdit(false)
        setInvisible(true)

        const form = e.currentTarget
        const data = new FormData(form)
        const { name, email, phone, vat } = Object.fromEntries(data.entries())


        await FetchAuth(`http://localhost:5000/contact/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, email, phone, vat }),
        }).then(async (response) => {
            if ( !response ) {
                return
            }

            const res = await response.json()

            if ( response.ok ) {
                setContact(res.data as ContactType)
                toast.success('Contacto actualizado con éxito')
            } else {
                toast.error('Algo salió mal', {
                    description: res.message || 'No se pudo actualizar el contacto'
                })
            }
        }).catch((res) => {
            toast.error('Algo salió mal', {
                description: res.message || 'No se pudo actualizar el registro'
            })
        })
    }
    
    const deleteContact = async () => {
        await FetchAuth(`http://localhost:5000/contact/${id}`, {
            method: 'DELETE'
        }).then(async (response) => {
            if (!response) {
                return
            }

            const res = await response.json()

            if ( response.ok ) {
                navigate('/contact')
                toast.warning('Contacto eliminado')
            } else {
                toast.error('Algo salió mal', {
                    description: res.message || 'No se pudo eliminar el contacto'
                })
            }
        }).catch((res) => {
            toast.error('Algo salió mal', {
                description: res.message || 'No se pudo eliminar el contacto'
            })
        })
    }
    
    useEffect(() => {
        getContact()
    }, [id])

    return (
        <>
            <HelperHelmet title={`Beauty Bell | ${contact?.name}`} />

            <Breadcrumb p='20px 20px 20px 20px' separator={<ChevronRightIcon />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={Paths.Contact}>Contactos</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color='beautypink'>{contact?.name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <HStack p='0px 20px' justifyContent='space-between'>
                <Box display='flex' gap='1em'>
                    <Button size='sm' colorScheme='beautypink' onClick={editContact} className={invisible ? '' : 'inactive'} >Editar</Button>
                    <Button size='sm' colorScheme='beautypink' onClick={() => formRef.current?.requestSubmit()} className={invisible ? 'inactive' : ''}>Guardar</Button>
                    <Link to={ '/contact' }>
                        <Button size='sm' colorScheme='beautypink'>Cancelar</Button>
                    </Link>
                </Box>
                <Box>
                    <Button
                        size='sm'
                        colorScheme='red'
                        leftIcon={<DeleteIcon />}
                        onClick={() => contact && deleteContact()}
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
                    onSubmit={saveContact}
                    ref={formRef}
                    >
                    <HStack gap='10em'>
                        <FormControl>
                            <Input type='text' name='name' disabled={edit ? false : true} defaultValue={contact?.name} required />
                        </FormControl>
                    </HStack>
                    <HStack gap='10em'>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' name='email' disabled={edit ? false : true} defaultValue={contact?.email} required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Celular</FormLabel>
                            <Input type='tel' name='phone' disabled={edit ? false : true} defaultValue={contact?.phone} required />
                        </FormControl>
                    </HStack>
                    <HStack gap='10em'>
                        <FormControl>
                            <FormLabel>DNI</FormLabel>
                            <Input type='text' name='vat' disabled={edit ? false : true} defaultValue={contact?.vat} required />
                        </FormControl>
                    </HStack>
                </Box>
            </Box>
        </>
    )
}

export default ContactForm