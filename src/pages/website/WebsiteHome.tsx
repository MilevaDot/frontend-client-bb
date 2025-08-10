import { Center, Heading, VStack } from "@chakra-ui/react"
import { TfiAgenda } from "react-icons/tfi";
import HelperHelmet from "../../helpers/HelperHelmet"
import { Link } from "react-router-dom";
import { Paths } from "../../router/routes";
import { LuCalendarFold } from "react-icons/lu";

const WebsiteHome = () => {
    return (
        <>
            <HelperHelmet title='Beauty Bell | Inicio' />
            <Center gap='5em'>
                <Link to={Paths.Contact}>
                    <VStack w='50px'>
                        <TfiAgenda size='50px'/>
                        <Heading as='h3' size='lg'>Agenda</Heading>
                    </VStack>
                </Link>
                <Link to={Paths.Appointment}>
                    <VStack w='50px'>
                        <LuCalendarFold size='54px' />
                        <Heading as='h3' size='lg' colorScheme='beautypink'>Citas</Heading>
                    </VStack>
                </Link>
            </Center>
        </>
    )
}

export default WebsiteHome