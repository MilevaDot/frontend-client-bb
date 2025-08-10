import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import HelperHelmet from "../../helpers/HelperHelmet"
import { FaLock, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Paths } from "../../router/routes"

const SignIn = () => {
    const navigate = useNavigate()
    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        if (form) {
            const data = new FormData(form)
            const { user, password } = Object.fromEntries(data.entries()) as {
                [k: string]: string
            }
            await fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user, password }),
            }).then(async (response) => {
                const res = await response.json()
                if ( response.ok && res.token ) {
                    localStorage.setItem('token', res.token)
                    localStorage.setItem('username', res.username)
                    localStorage.setItem('refresh_token', res.refresh_token)
                    navigate(Paths.WebsiteHome)
                    toast.success('Iniciaste sesión')
                } else {
                    toast.error('Algo salió mal', {
                        description: res.message || 'La información no se envió correctamente'
                    })
                }
            }).catch(() => {
                toast.error('Algo salió mal', {
                    description: 'No se pudo iniciar sesión'
                })
            })
        }
    }

    return (
        <>
            <HelperHelmet title='BeautyBell | Iniciar sesión' />

            <Center
                h='100vh'
                >
                <Box
                    as='form'
                    onSubmit={signIn}
                    w='300px'
                    display='flex'
                    flexDirection='column'
                    gap='1em'
                    padding='1em'
                    >
                    <Heading
                        as='h4'
                        size='md'
                        textAlign='center'>
                        Iniciar Sesión    
                    </Heading>
                    <FormControl
                        borderBottom='1px solid black'
                        display='flex'
                        alignItems='center'>
                        <FormLabel>
                            <FaUser />
                        </FormLabel>
                        <Input
                            required
                            border='none'
                            outline='none'
                            focusBorderColor='transparent'
                            type='text'
                            name='user'
                            placeholder='beauty.bell@gmail.com'
                            />
                    </FormControl>
                    <FormControl
                        borderBottom='1px solid black'
                        display='flex'
                        alignItems='center'
                        >
                        <FormLabel>
                            <FaLock />
                        </FormLabel>
                        <Input
                            required
                            border='none'
                            focusBorderColor='transparent'
                            type='password'
                            name='password'
                            placeholder='************'
                            />
                    </FormControl>
                    <Box
                        display='flex'
                        justifyContent='end'
                        >
                        <Link to='/signup'>
                            <Text
                                fontSize='0.7em'>
                                Eres nuevo? Regístrate
                            </Text>
                        </Link>
                    </Box>
                    <Button
                        type='submit'
                        colorScheme='beautypink'
                        >
                        Ingresar
                    </Button>
                </Box>
                
            </Center>
        </>
    )
}

export default SignIn