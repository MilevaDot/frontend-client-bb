import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react"
import HelperHelmet from "../../helpers/HelperHelmet"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../router/routes"
import { useRef } from "react"
import { toast } from "sonner"
import FetchAuth from "../../helpers/FetchAuth"

const ContactCreate = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const navigate = useNavigate()

    const createForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const form = e.currentTarget
        const data = new FormData(form)
        const { name, email, phone, vat } = Object.fromEntries(data.entries())

        await FetchAuth('http://localhost:5000/contact', {
            method: 'POST',
            body: JSON.stringify({ name, email, phone, vat }),
        }).then(async (response) => {
            if ( !response ) {
                return
            }
            const res = await response.json()

            if ( !response.ok ) {
                toast.error('Algo salió mal', {
                    description: res.message || 'La información no se envió correctamente'
                })
            } else {
                navigate(`/contact/${res.data['id']}`)
                toast.success('Contacto creado')
            }
        }).catch(() => {
            toast.error('Algo salió mal', {
                description: 'No se pudo crear el contacto'
            })
        })
    }

    return (
        <>
            <HelperHelmet title='Beauty Bell | Crear contacto' />

            <Breadcrumb p='20px' separator={<ChevronRightIcon />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={Paths.Contact}>Agenda</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color='beautypink'>Creando contacto</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <HStack p='0px 20px' justifyContent='space-between'>
                <Box display='flex' gap='1em'>
                    <Link to={ '/contactcreate' }>
                        <Button size='sm' colorScheme='beautypink' onClick={() => formRef.current?.requestSubmit()}>Guardar</Button>
                    </Link>
                    <Link to={ '/contact' }>
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
                            <Input placeholder='Pedro Páramo Escobar' type='text' name='name' required />
                        </FormControl>
                    </HStack>
                    <HStack gap='10em'>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' name='email' required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Celular</FormLabel>
                            <Input type='tel' name='phone' required />
                        </FormControl>
                    </HStack>
                    <HStack>
                        <FormControl>
                            <FormLabel>DNI</FormLabel>
                            <Input type='text' name='vat' required />
                        </FormControl>
                    </HStack>
                </Box>
            </Box>
        </>
    )
}

export default ContactCreate