import { useEffect, useState } from "react"
import type { AppointmentType } from "../../declarations/Appointment"
import FetchAuth from "../../helpers/FetchAuth"
import { toast } from "sonner"
import HelperHelmet from "../../helpers/HelperHelmet"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { Paths } from "../../router/routes"
import HelperSkeleton from "../../helpers/HelperSkeleton"

const Appointment = () => {
    const [appointments, setAppointments] = useState<Array<AppointmentType>>()
    const [loading, setLoading] = useState<boolean>(false)
    const [checkedItems, setCheckedItems] = useState([false])

    const allChecked = checkedItems.length > 0 && checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  
    const anyAppointment = () => {
        if (appointments) {
            setCheckedItems(new Array(appointments.length).fill(false))
        }
    }

    const handleCheckAll = (checked: boolean) => {
        setCheckedItems(new Array(appointments!.length).fill(checked))
    }

    const handleCheckItem = (index: number, checked: boolean) => {
        const newChecked = [...checkedItems]
        newChecked[index] = checked
        setCheckedItems(newChecked)
    }

    const getAppointments = async () => {
        setLoading(true)
        await FetchAuth('http://localhost:5000/appointment').then(async (response) => {
            if (!response) {
                return
            }

            const res = await response.json()

            if (response.ok) {
                console.log(res.data)
                setAppointments(res.data)
            } else {
                toast.error('Algo salió mal', {
                    description: res.message || 'No se pudieron obtener los registros',
                })
            }
        }).catch((res) => {
            toast.error('Algo salió mal', {
                description: res.message || 'No se pudieron obtener los registros,'
            })
        })
        setLoading(false)
    }

    useEffect(() => {
        anyAppointment();
    }, [appointments])

    useEffect(() => {
        getAppointments();
    }, [])

    return (
        <>
            <HelperHelmet title='Beauty Bell | Citas' />

            <Breadcrumb p='20px' separator={<ChevronRightIcon />}>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color='beautypink'>Cita</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <HStack p='0px 20px' justifyContent='space-between'>
                <Box>
                    <Link to={ Paths.AppointmentCreate }>
                        <Button size='sm' colorScheme='beautypink'>Crear</Button>
                    </Link>
                </Box>
            </HStack>
            <Box p='20px'>
                <TableContainer border='2px solid #F1F2F5' borderRadius='10px'>
                    <Table size='sm'>
                        <Thead backgroundColor='#F9FAFC'>
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
                                <Th paddingY='0.8em'>Contacto</Th>
                                <Th paddingY='0.8em'>Fecha</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                loading ? 
                                    <>
                                        <HelperSkeleton column={4} />
                                    </>
                                :
                                appointments?.map((appointment, index) => (
                                    <Tr key={appointment.id}>
                                        <Td>
                                            <Checkbox
                                                colorScheme='beautypink'
                                                isChecked={checkedItems[index]}
                                                onChange={(e) => handleCheckItem(index, e.target.checked)}
                                                >
                                            </Checkbox>
                                        </Td>
                                        <Td>
                                            <Link to={`/appointment/${appointment.id}`}>
                                                <Box>
                                                    {appointment.name}
                                                </Box>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link to={`/appointment/${appointment.id}`}>
                                                <Box>
                                                    {appointment.contact.name}
                                                </Box>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link to={`/appointment/${appointment.id}`}>
                                                <Box>
                                                    {appointment.date}
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

export default Appointment