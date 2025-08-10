import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import HelperHelmet from "../../helpers/HelperHelmet"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import HelperSkeleton from "../../helpers/HelperSkeleton"
import type { ContactType } from "../../declarations/Contact"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { Paths } from "../../router/routes"
import FetchAuth from "../../helpers/FetchAuth"

const Contact = () => {
    const [contacts, setContacts] = useState<Array<ContactType>>()
    const [loading, setLoading] = useState<boolean>(false)
    const [checkdItem, setCheckedItems] = useState([false, false])

    const allChecked = checkdItem.length > 0 && checkdItem.every(Boolean)
    const isIndeterminate = checkdItem.some(Boolean) && !allChecked

    const anyContact = () => {
        if (contacts) {
            setCheckedItems(new Array(contacts.length).fill(false))
        }
    }

    const handleCheckAll = (checked : boolean) => {
        setCheckedItems(new Array(contacts!.length).fill(checked))
    }

    const handleCheckItem = (index: number, checked: boolean) => {
        const newChecked = [...checkdItem]
        newChecked[index] = checked
        setCheckedItems(newChecked)
    }

    const getContacts = async () => {
        setLoading(true)
        await FetchAuth('http://localhost:5000/contact').then(async (response) => {
            if (!response) {
                return
            }

            const res = await response.json()

            if (response.ok) {
                setContacts(res.data)
            } else {
                toast.error('Algo salió mal', {
                    description: res.message || 'No se pudieron obtener los registros',
                })
            }
        }).catch((res) => {
            toast.error('Algo salió mal', {
                description: res.message || 'No se pudo obtener los registros',
            })
        })
        setLoading(false)
    }

    useEffect(() => {
        anyContact();
    }, [contacts])

    useEffect(() => {
        getContacts();
    }, [])

    return (
        <>
            <HelperHelmet title='Beauty Bell | Contactos' />

            <Breadcrumb p='20px' separator={ <ChevronRightIcon /> }>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color='beautypink'>Contacto</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <HStack
                p='0px 20px'
                justifyContent='space-between'
                >
                <Box>
                    <Link to={ Paths.ContactCreate }>
                        <Button size='sm' colorScheme='beautypink'>Crear</Button>
                    </Link>
                </Box>
            </HStack>
            <Box
                p='20px'
                >
                <TableContainer
                    border='2px solid #F1F2F5'
                    borderRadius='10px'
                    >
                    <Table
                        size='sm'
                        >
                        <Thead
                            backgroundColor='#F9FAFC'
                            >
                            <Tr>
                                <Th paddingY='0.8em'>
                                    <Checkbox
                                        colorScheme='beautypink'
                                        isChecked={allChecked}
                                        isIndeterminate={isIndeterminate}
                                        onChange={(e) => handleCheckAll(e.target.checked)}
                                        >
                                    </Checkbox>
                                </Th>
                                <Th paddingY='0.8em'>Nombre</Th>
                                <Th paddingY='0.8em'>DNI</Th>
                                <Th paddingY='0.8em'>Celular</Th>
                                <Th paddingY='0.8em'>Email</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                loading ?
                                    <>
                                        <HelperSkeleton column={5} />
                                    </>
                                :
                                contacts?.map((contact, index) => (
                                    <Tr key={contact.id}>
                                        <Td>
                                            <Checkbox
                                                colorScheme='beautypink'
                                                isChecked={checkdItem[index]}
                                                onChange={(e) => handleCheckItem(index, e.target.checked)}
                                                >
                                            </Checkbox>
                                        </Td>
                                        <Td>
                                            <Link to={`/contact/${contact.id}`}>
                                                <Box>
                                                    {contact.name}
                                                </Box>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link to={`/contact/${contact.id}`}>
                                                <Box>
                                                    {contact.vat}
                                                </Box>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link to={`/contact/${contact.id}`}>
                                                <Box>
                                                    {contact.phone}
                                                </Box>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link to={`/contact/${contact.id}`}>
                                                <Box>
                                                    {contact.email}
                                                </Box>
                                            </Link>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Contact