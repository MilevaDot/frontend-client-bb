import { Box, Button, Center, Divider, FormControl, FormLabel, Heading, HStack, Image, Input, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import HelperHelmet from '../../helpers/HelperHelmet'
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaWalking, FaWhatsapp } from 'react-icons/fa';
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import '../../app.css'
import L from 'leaflet'
import { useEffect } from 'react';
import "leaflet/dist/leaflet.css";


const WebsiteHome = () => {
    useEffect(() => {
        const map = L.map('map', {
            center: [-12.0269, -77.0045],
            zoom: 16,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

        L.marker([-12.0269, -77.0045])
        .addTo(map)
        .bindPopup("Av. Gran Chimú N°1002, Zárate, Lima")
        .openPopup();

        return () => {
        map.remove(); // limpiar al desmontar el componente
        };

    }, [])
    return (
        <>
            <HelperHelmet title='Beauty Bell | Inicio' />

            <Box w='100%' h='100vh' display='flex' flexDirection='column'>

                <Center w='100%' padding='4px 0' backgroundColor='#E62D88'>
                    <Text as='h6' size='xs' color='white' fontFamily='roboto-medium' fontWeight='10' letterSpacing='3px'>
                        REGALA UN DÍA DE BELLEZA A ESA PERSONA ESPECIAL <span style={{'fontWeight': 700}}>AQUÍ</span>
                    </Text>
                </Center>

                <HStack w='100%' justifyContent='space-around' backgroundColor='#f8f8f8' padding='16px 0'>
                    <HStack color='#E62D88' gap='1em'>
                        <Link to='https://www.instagram.com/beautybell.pe/' target='_blank'>
                            <FaInstagram size='30px' />
                        </Link>
                        <Link to='https://www.tiktok.com/@beautybell.pe?is_from_webapp=1&sender_device=pc' target='_blank'>
                            <FaTiktok size='30px' />
                        </Link>
                        <Link to='https://wa.link/902ak0' target='_blank'>
                            <FaWhatsapp size='30px' />
                        </Link>
                    </HStack>

                    <Box marginLeft='100px'>
                        <Image src='/logo.png' width='200px' alt='Beauty Bell logo' />
                    </Box>

                    <VStack alignItems='end' gap='1.5em'>
                        <FormControl pb='4px' minWidth='240px' display='flex' borderBottom='2px solid #E62D88' alignItems='flex-end'>
                            <FormLabel m='0' p='0'>
                                <Image src='/icon_search.png' alt='Search icon' />
                            </FormLabel>
                            <Input
                                color='#E62D88'
                                height='14px'
                                px='2px'
                                type='text'
                                placeholder='Buscar'
                                border='none'
                                outline='none'
                                focusBorderColor='transparent'
                                _placeholder={{ fontFamily: 'roboto-medium', color: 'rgba(230, 45, 136, 0.5)'}}
                                />
                        </FormControl>
                        <HStack display='flex' gap='1.5em' alignItems='end' color='#E62D88' justifyContent='right' alignContent='end'>
                            <Image src='/icon_user.png' alt='User icon' w='20px' />
                            <Image src='/icon_favorite.png' alt='Favorite icon' w='20px' />
                            <Image src='/icon_wallet.png' alt='Wallet icon' w='20px' />
                        </HStack>
                    </VStack>

                </HStack>

                <Center fontSize='14px' padding='6px 0' fontFamily='roboto-semibold' color='white' gap='2.5em' w='100%' backgroundColor='#E62D88'>
                    <Text>Nosotras</Text>
                    <Text>Servicios</Text>
                    <Text>Promos</Text>
                    <Text>Galería</Text>
                    <Text>Tienda</Text>
                    <Text>Reservar Cita</Text>
                    <Text>Contacto</Text>
                </Center>

                <Box position='relative' w='100%' h='100%' backgroundImage="url('/bcg_01.png')" backgroundSize='cover' backgroundPosition='center'>
                    <Center w='100%' h='100%' justifyContent='flex-end' pr='16%'>
                        <VStack gap='0' marginTop='-20px'>
                            <Text fontFamily='georgia1' color='#D89816' fontSize='26px' alignSelf='flex-end'>
                                Descubre una nueva forma de sentirte bella.
                            </Text>
                            <VStack w='100%' justifyContent='flex-end' gap='0'>
                                <HStack>
                                    <Heading fontFamily='georgia3' fontSize='56px' color='#A80E5F'>&lsquo;&rsquo;Manos </Heading>
                                    <Text margin='0px 10px' fontFamily='georgia1' fontWeight='100' fontSize='56px' color='#A80E5F'> y </Text>
                                    <Heading fontFamily='georgia3' fontSize='56px' color='#A80E5F'> miradas</Heading>
                                </HStack>
                                <Heading fontFamily='georgia1' fontWeight='100' fontSize='56px' color='#A80E5F' alignSelf='flex-end'>que brillan.&rdquo;</Heading>
                                <HStack alignSelf='self-end' marginTop='12px' marginRight='10px' borderRadius='40px' backgroundColor='#D89816' fontFamily='georgia1' padding='2px 40px'fontSize='28px' color='white'>
                                    <Text>
                                        Reserva tu cita
                                    </Text>
                                </HStack>
                            </VStack>
                        </VStack>
                    </Center>
                </Box>

                <Box backgroundColor='#F8F8F8' padding='20px 0'>
                    <VStack color='#8B124E' gap='0' lineHeight='1.2'>
                        <Text fontSize='30px' fontWeight='100' alignSelf='center' fontFamily='georgia1'>
                            Somos un salón especializado en
                        </Text>
                        <Text fontSize='34px' fontWeight='900' alignSelf='center' fontFamily='georgia2'>
                            uñas, cejas y pestañas.
                        </Text>
                    </VStack>
                </Box>

            </Box>

            <Box backgroundColor='white' margin='40px 0'>
                <Center color='#D89816' fontSize='32px' margin='20px 0'>    
                    <Text fontFamily='roboto-semibold' letterSpacing='2px'>CONOCE</Text>
                    <Image src='/logo.png' width='240px' alt='Beauty Bell logo' margin='0px 20px' />
                    <Text fontFamily='roboto-semibold' letterSpacing='2px'>SALÓN PROFESIONAL</Text>
                </Center>
                <Center gap='1.5em'>
                    <Box position='relative' width='240px'>
                        <Image src='/card_nail.jpg' alt='Card nail' />
                        <Box position='absolute' width='100%' bottom='0' padding='20px 0' backgroundColor='rgba(255, 255, 255, 0.4)'>
                            <Center color='#630539' fontFamily='roboto-semibold' fontSize='36px'>UÑAS</Center>
                        </Box>
                    </Box>
                    <Box position='relative' width='240px'>
                        <Image src='/card_eyelash.jpg' alt='Card eye lash' />
                        <Box position='absolute' width='100%' bottom='0' padding='20px 0' backgroundColor='rgba(255, 255, 255, 0.4)'>
                            <Center color='#630539' fontFamily='roboto-semibold' fontSize='36px'>PESTAÑAS</Center>
                        </Box>
                    </Box>
                    <Box position='relative' width='240px'>
                        <Image src='/card_blog.jpg' alt='Card blog' />
                        <Box position='absolute' width='100%' bottom='0' padding='20px 0' backgroundColor='rgba(255, 255, 255, 0.4)'>
                            <Center color='#630539' fontFamily='roboto-semibold' fontSize='36px'>BLOG</Center>
                        </Box>
                    </Box>
                    <Box position='relative' width='240px'>
                        <Image src='/card_product.jpg' alt='Card product' />
                        <Box position='absolute' width='100%' bottom='0' padding='20px 0' backgroundColor='rgba(255, 255, 255, 0.4)'>
                            <Center color='#630539' fontFamily='roboto-semibold' fontSize='36px'>PRODUCTOS</Center>
                        </Box>
                    </Box>
                    <Box position='relative' width='240px'>
                        <Image src='/card_galery.jpg' alt='Card galery' />
                        <Box position='absolute' width='100%' bottom='0' padding='20px 0' backgroundColor='rgba(255, 255, 255, 0.4)'>
                            <Center color='#630539' fontFamily='roboto-semibold' fontSize='36px'>GALERÍA</Center>
                        </Box>
                    </Box>
                </Center>
            </Box>

            <Box backgroundImage="url('/bcg_02.png')" backgroundSize='cover' backgroundPosition='center' w='100%' h='100%'>
                <Center color='white' fontSize='50px'>
                    <Text fontWeight='100' fontFamily='roboto-medium' letterSpacing='0.1em'>PROMOS DESTACADAS</Text>
                </Center>
                <HStack gap='1.5em' padding='10px 180px'>
                    {/* <Box position='relative' width='500px'>
                        <Image src='/card_highlight.png' alt='Card Highlight' />
                        <Box position='absolute' width='100%' bottom='0'>
                            <Box padding='0px 10px'>
                                <HStack gap='0.4em'>
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Text fontWeight='100' fontSize='10px' color='#666666'>5.0</Text>
                                </HStack>
                                <Text fontFamily='roboto-semibold' fontSize='26px'>&lsquo;&lsquo;Mirada Perfecta&rsquo;&rsquo;</Text>
                                <Text color='#E62D88' fontSize='10px' fontFamily='roboto-medium'>LIFTING DE PESTAÑAS + LAMINADO DE CEJAS + PERFILADO DE CEJAS</Text>
                                <Text color='#666666' fontSize='10px' fontFamily='roboto-medium'>Ideal para realzar la mirada con un toque natural.</Text>
                                <HStack justifyContent='space-between' margin='4px 0'>
                                    <Button
                                        backgroundColor='#E62D88'
                                        fontFamily='georgia1'
                                        color='white'
                                        fontSize='10px'
                                        padding='4px 4px'
                                        fontWeight='100'
                                        height='100%'
                                        borderRadius='20px'
                                        >
                                        Ver detalles
                                    </Button>
                                    <VStack gap={0}>
                                        <Text textDecor='line-through' color='#666666' fontFamily='roboto-medium' fontSize='8px'>Precio regular: S/120.00</Text>
                                        <Text fontFamily='roboto-semibold' color='#E62D88' fontSize='24px'>S/70.00</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </Box>
                    </Box> */}
                    <Box position='relative' width='500px'>
                        <Image src='/card_highlight.png' alt='Card Highlight' />
                        <Box position='absolute' width='100%' bottom='0'>
                            <Box padding='0px 10px'>
                                <HStack gap='0.4em'>
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Text fontWeight='100' fontSize='10px' color='#666666'>5.0</Text>
                                </HStack>
                                <Text fontFamily='roboto-semibold' fontSize='26px'>&lsquo;&lsquo;Mirada Perfecta&rsquo;&rsquo;</Text>
                                <Text color='#E62D88' fontSize='10px' fontFamily='roboto-medium'>LIFTING DE PESTAÑAS + LAMINADO DE CEJAS + PERFILADO DE CEJAS</Text>
                                <Text color='#666666' fontSize='10px' fontFamily='roboto-medium'>Ideal para realzar la mirada con un toque natural.</Text>
                                <HStack justifyContent='space-between' margin='4px 0'>
                                    <Button
                                        backgroundColor='#E62D88'
                                        fontFamily='georgia1'
                                        color='white'
                                        fontSize='10px'
                                        padding='4px 4px'
                                        fontWeight='100'
                                        height='100%'
                                        borderRadius='20px'
                                        >
                                        Ver detalles
                                    </Button>
                                    <VStack gap={0}>
                                        <Text textDecor='line-through' color='#666666' fontFamily='roboto-medium' fontSize='8px'>Precio regular: S/120.00</Text>
                                        <Text fontFamily='roboto-semibold' color='#E62D88' fontSize='24px'>S/70.00</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                    <Box position='relative' width='500px'>
                        <Image src='/card_highlight.png' alt='Card Highlight' />
                        <Box position='absolute' width='100%' bottom='0'>
                            <Box padding='0px 10px'>
                                <HStack gap='0.4em'>
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Text fontWeight='100' fontSize='10px' color='#666666'>5.0</Text>
                                </HStack>
                                <Text fontFamily='roboto-semibold' fontSize='26px'>&lsquo;&lsquo;Mirada Perfecta&rsquo;&rsquo;</Text>
                                <Text color='#E62D88' fontSize='10px' fontFamily='roboto-medium'>LIFTING DE PESTAÑAS + LAMINADO DE CEJAS + PERFILADO DE CEJAS</Text>
                                <Text color='#666666' fontSize='10px' fontFamily='roboto-medium'>Ideal para realzar la mirada con un toque natural.</Text>
                                <HStack justifyContent='space-between' margin='4px 0'>
                                    <Button
                                        backgroundColor='#E62D88'
                                        fontFamily='georgia1'
                                        color='white'
                                        fontSize='10px'
                                        padding='4px 4px'
                                        fontWeight='100'
                                        height='100%'
                                        borderRadius='20px'
                                        >
                                        Ver detalles
                                    </Button>
                                    <VStack gap={0}>
                                        <Text textDecor='line-through' color='#666666' fontFamily='roboto-medium' fontSize='8px'>Precio regular: S/120.00</Text>
                                        <Text fontFamily='roboto-semibold' color='#E62D88' fontSize='24px'>S/70.00</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                    <Box position='relative' width='500px'>
                        <Image src='/card_highlight.png' alt='Card Highlight' />
                        <Box position='absolute' width='100%' bottom='0'>
                            <Box padding='0px 10px'>
                                <HStack gap='0.4em'>
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Image src='/star.png' width='13px' />
                                    <Text fontWeight='100' fontSize='10px' color='#666666'>5.0</Text>
                                </HStack>
                                <Text fontFamily='roboto-semibold' fontSize='26px'>&lsquo;&lsquo;Mirada Perfecta&rsquo;&rsquo;</Text>
                                <Text color='#E62D88' fontSize='10px' fontFamily='roboto-medium'>LIFTING DE PESTAÑAS + LAMINADO DE CEJAS + PERFILADO DE CEJAS</Text>
                                <Text color='#666666' fontSize='10px' fontFamily='roboto-medium'>Ideal para realzar la mirada con un toque natural.</Text>
                                <HStack justifyContent='space-between' margin='4px 0'>
                                    <Button
                                        backgroundColor='#E62D88'
                                        fontFamily='georgia1'
                                        color='white'
                                        fontSize='10px'
                                        padding='4px 4px'
                                        fontWeight='100'
                                        height='100%'
                                        borderRadius='20px'
                                        >
                                        Ver detalles
                                    </Button>
                                    <VStack gap={0}>
                                        <Text textDecor='line-through' color='#666666' fontFamily='roboto-medium' fontSize='8px'>Precio regular: S/120.00</Text>
                                        <Text fontFamily='roboto-semibold' color='#E62D88' fontSize='24px'>S/70.00</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                </HStack>
            </Box>

            <Box backgroundImage="url('bcg_03.png')" backgroundSize='cover' backgroundPosition='center' w='100%' h='100%'>
                <HStack justifyContent='space-between'>
                    <Center padding='40px 100px' position='relative' width='50%'>
                        <Image src='/set_nail_01.png' width='400px' zIndex='1' marginRight='130px'/>
                        <Image src='/set_nail_02.png' width='260px' zIndex='2' position='absolute' left='460px' bottom='70px' />
                    </Center>
                    <VStack align='start' padding='40px 120px 0px 40px' width='50%' gap='20px'>
                        <Box fontFamily='roboto-medium'>
                            <Text color='#D89816' fontSize='16px'>SET's DE UÑAS</Text>
                            <Text color='#333333' fontSize='30px'>Extensiones Acrílicas</Text>
                            <Text color='#333333' fontSize='14px'>Técnica de esculpido que combina un polvo acrílico con líquido especial para crear una superficie dura y resistente sobre tus uñas naturales.</Text>
                            <Text color='#333333' fontSize='14px'>Permite alargar, dar forma y decorar las uñas con acabados duraderos y personalizados.</Text>
                        </Box>
                        <Box>
                            <Text fontFamily='roboto-medium' color='#333333' fontSize='16px'>Diseños que se pueden realizar:</Text>
                            <UnorderedList fontFamily='roboto-medium' color='#333333' fontSize='16px' styleType='square' alignItems='left' alignContent='left'>
                                <ListItem marginLeft='16px'>Francesas clásicas o invertidas</ListItem>
                                <ListItem marginLeft='16px'>Baby boomer</ListItem>
                                <ListItem marginLeft='16px'>Encapsulados con glitter, flores secas o arte 3D</ListItem>
                                <ListItem marginLeft='16px'>Efecto mármol, ombré o mate</ListItem>
                                <ListItem marginLeft='16px'>Diseños minimalistas o cargados, según tu estilo</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box fontFamily='roboto-medium'>
                            <Text color='#333333' fontSize='12px'>Tiempo de aplicación: Aproximádamente 2 horas a 2 horas y media aproximado.</Text>
                            <Text color='#333333' fontSize='12px'>Duración del set: Entre 3 a 4 semanas, con cuidados adecuados.</Text>
                            <Text color='#333333' fontSize='12px'>Retoque: cada 2 a 3 semanas para mantener el largo, forma y diseño.</Text>
                        </Box>
                        <Button
                            fontFamily='roboto-medium'
                            fontWeight='200'
                            backgroundColor='#000000'
                            color='#E6E6E6'
                            fontSize='20px'
                            borderRadius='0px'
                            padding='4px 30px'
                            >
                            Reservar cita
                        </Button>
                    </VStack>

                </HStack>

            </Box>
            
            <Box height='40px' backgroundColor='#E62D88'></Box>


            <Box width='100%' height='100%' position='relative'>
                <Image src='/bcg_03.png' transform='rotateY(3.142rad)' position='absolute' zIndex='1'/>
                <HStack justifyContent='space-between' width='100%' position='absolute' zIndex='2' gap='1em' >
                    <VStack width='50%' align='start' gap='20px' paddingTop='120px' paddingLeft='130px' paddingRight='20px'>
                        <Box fontFamily='roboto-medium'>
                            <Text color='#D89816' fontSize='14px'>SET's DE PESTAÑAS</Text>
                            <Text color='#333333' fontSize='28px'>Efecto Volumen Russo</Text>
                            <Text color='#333333' fontSize='14px'>Técnica avanzada de extensiones de pestañas que consiste en aplicar varias pestañas finas (2D a 6D) en cada pestaña natural, creando un efecto de volumen completo, esponjoso y elegante.</Text>
                        </Box>
                        <Box>
                            <Text color='#333333' fontWeight='100' fontSize='14px'>Perfecto para ojos o medianos, ojos caídos o tristes; y personas que desean una mirada profunda y definida</Text>
                        </Box>
                        <Box>
                            <Text fontFamily='roboto-medium' color='#333333' fontSize='14px'>Beneficios:</Text>
                            <UnorderedList fontFamily='roboto-medium' color='#333333' fontSize='14px' styleType='square' alignItems='left' alignContent='left'>
                                <ListItem marginLeft='14px'>Mayor densidad y dramatismo</ListItem>
                                <ListItem marginLeft='14px'>Efecto glamuroso pero delicado</ListItem>
                                <ListItem marginLeft='14px'>No se siente pesado ni incómodo</ListItem>
                                <ListItem marginLeft='14px'>Ideal para quienes tienen pestañas naturales finas o escasas</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box fontFamily='roboto-medium'>
                            <Text color='#333333' fontSize='12px'>Tiempo de aplicación: Aproximádamente 2 horas a 2 horas y media aproximado.</Text>
                            <Text color='#333333' fontSize='12px'>Duración del set: Entre 3 a 4 semanas, con cuidados adecuados.</Text>
                            <Text color='#333333' fontSize='12px'>Retoque: cada 2 a 3 semanas para mantener el diseño completo y evitar vacíos.</Text>
                        </Box>
                        <Button
                            fontFamily='roboto-medium'
                            fontWeight='200'
                            backgroundColor='#000000'
                            color='#E6E6E6'
                            fontSize='18px'
                            borderRadius='0px'
                            padding='4px 30px'
                            >
                            Reservar cita
                        </Button>
                    </VStack>
                    <Center width='50%' position='relative'>
                        <Image src='/set_eye_01.png' width='230px' position='absolute' left='20px' top='80px' />
                        <Image src='/set_eye_02.png' width='360px' />
                    </Center>
                </HStack>
            </Box>


            <Box width='100%' height='360px' bgGradient="linear(to-r, #e62183, #ba1d6c)" marginTop='560px' position='relative'>
                <Box id='map' width='820px' height='360px' marginLeft='150px ' marginTop='200px' zIndex='1'>
                </Box>
                <Box position='absolute' zIndex='2' right='210px' top='60px' backgroundColor='#E62183'padding='30px' borderRadius='40px'>
                    <VStack color='#FFFFFF' minWidth='460px'>
                        <VStack lineHeight='0.8'>
                            <Text fontFamily='georgia2' fontSize='40px'>UBÍCANOS EN:</Text>
                            <Text fontFamily='georgia1' fontSize='24px'>Av. Gran Chimú N° 1002, Zárate</Text>
                            <Text fontFamily='georgia1' fontSize='24px'>San Juan de Lurigancho - Lima, Perú.</Text>
                        </VStack>
                        <Divider borderWidth='1px' borderColor='white' margin='10px 0px' />
                        <VStack lineHeight='0.9'>
                            <Text fontFamily='georgia2' fontSize='24px'>Horario de atención</Text>
                            <HStack>
                                <Text fontFamily='georgia1' fontSize='16px'>Lunes a sábado: </Text>
                                <Text fontFamily='georgia2' fontSize='16px'>10:00 am - 10:00 pm</Text>
                            </HStack>
                            <HStack>
                                <Text fontFamily='georgia1' fontSize='16px'>Domingos y feriados: </Text>
                                <Text fontFamily='georgia2' fontSize='16px'>11:00 am - 04:00 pm</Text>
                            </HStack>
                        </VStack>
                    </VStack>
                </Box>
            </Box>

            <Box width='100%' height='100%' backgroundColor='#F8F8F8' padding='60px 40px' alignItems='start'>
                <HStack justifyContent='space-between' alignItems='start'>
                    <VStack width='30%' gap='1em' padding='0px 92px' paddingTop='60px'>
                        <Box>
                            <Image src='/logo.png' width='240px' />
                        </Box>
                        <Box textAlign='center'>
                            <Text display='inline' textAlign='center' fontFamily='georgia1' fontSize='12px'>Salón especializado en aplicación de </Text>
                            <Text display='inline' textAlign='center' fontFamily='georgia2' fontSize='12px'>set's de uñas y pestañas postizas, </Text>
                            <Text display='inline' textAlign='center' fontFamily='georgia1' fontSize='12px'>diseño de cejas y depilación para realzar tu belleza natural.</Text>
                        </Box>
                        <HStack color='#E62D88'>
                            <Box border='2px solid #ba1d6c' borderRadius='50%' padding='10px'>
                                <Link to='https://www.instagram.com/beautybell.pe/' target='_blank'>
                                    <FaInstagram size='24px' />
                                </Link>
                            </Box>
                            <Box border='2px solid #ba1d6c' borderRadius='50%' padding='10px'>
                                <Link to='https://www.tiktok.com/@beautybell.pe?is_from_webapp=1&sender_device=pc' target='_blank'>
                                    <FaTiktok size='20px'/>
                                </Link>
                            </Box>
                            <Box border='2px solid #ba1d6c' borderRadius='50%' padding='10px'>
                                <Link to='https://wa.link/902ak0' target='_blank'>
                                    <FaWhatsapp size='24px'/>
                                </Link>
                            </Box>
                        </HStack>
                    </VStack>
                    
                    <HStack width='70%' borderLeft='3px solid #E62D88' alignItems='start' paddingTop='60px'>
                        <VStack width='50%' padding='0px' >
                            <HStack alignItems='start' gap='6em'>
                                <VStack alignItems='start' lineHeight='1.3'>
                                    <Text fontFamily='georgia2' color='#ba1d6c' fontSize='20px'>INFORMACIÓN</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Preguntas Frecuentes</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Términos y Condiciones</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Política de Privacidad</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Libro de reclamaciones</Text>
                                    <Image src='/book.png' width='140px' />
                                </VStack>
                                <VStack alignItems='start' lineHeight='1.3'>
                                    <Text fontFamily='georgia2' color='#ba1d6c' fontSize='20px'>MENÚ</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Quiénes somos</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Servicios</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Galería</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Promociones</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Tienda Virtual</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Reservar citas</Text>
                                    <Text fontFamily='georgia1' fontSize='16px'>Contacto</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack width='50%' alignItems='start' gap='1.5em'>
                            <Text fontFamily='georgia2' color='#ba1d6c' fontSize='20px'>CONTACTO</Text>
                            <Box borderRadius='20px'>
                                <HStack border='1px solid black' borderRadius='10px' padding='10px 18px'>
                                    <FaWhatsapp size='60px'/>
                                    <VStack lineHeight='0.8'>
                                        <Text fontFamily='georgia1' fontSize='20px'>Atención al cliente</Text>
                                        <Text fontFamily='georgia2' fontSize='30px'>Whatsapp</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                            <VStack alignItems='start' gap='1em'>
                                <Box>
                                    <HStack>
                                        <FaLocationDot color='#ba1d6c' size='24px' />
                                        <VStack alignItems='start' lineHeight='0.5'>
                                            <Text fontFamily='georgia1'>Av. Gran Chimú N°1002, Zárate</Text>
                                            <Text fontFamily='georgia1'>San Juan de Lurigancho - Lima, Perú.</Text>
                                        </VStack>
                                    </HStack>
                                </Box>
                                <Box>
                                    <HStack>
                                        <PiPhoneCallFill color='#ba1d6c' size='20px' />
                                        <Text fontFamily='georgia1'>913 330 059</Text>
                                    </HStack>
                                </Box>
                                <Box>
                                    <HStack>
                                        <TfiEmail color='#ba1d6c' size='16px' />
                                        <Text fontFamily='georgia1'>informes@beautybell.com</Text>
                                    </HStack>
                                </Box>
                            </VStack>
                            <Box>
                                <Text fontFamily='georgia2' color='#ba1d6c' fontSize='28px'>Horario de atención</Text>
                                <Box>
                                    <Text display='inline' fontFamily='georgia1'>Lunes a Sábado: </Text>
                                    <Text display='inline' fontFamily='georgia2'>10:00 am - 10:00 pm</Text>
                                </Box>
                                <Box>
                                    <Text display='inline' fontFamily='georgia1'>Domingos y feriados: </Text>
                                    <Text display='inline' fontFamily='georgia2'>11:00 am - 04:00 pm</Text>
                                </Box>
                            </Box>
                        </VStack>
                    </HStack>
                </HStack>
            </Box>
        </>
    )
}

export default WebsiteHome