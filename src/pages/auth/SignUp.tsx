import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import HelperHelmet from "../../helpers/HelperHelmet"
import { FaLock, FaUser } from "react-icons/fa"
import { LuIdCard } from "react-icons/lu"
import { EmailIcon } from "@chakra-ui/icons"
import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../router/routes"
import { toast } from "sonner"

const SignUp = () => {
    const navigate = useNavigate()
    const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;
        const data = new FormData(form);

        const { name, user, password } = Object.fromEntries(data.entries()) as {
            [k: string]: string
        }

        await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, user, password}),
        }).then(async (response) => {
            const res = await response.json()
            if ( !response.ok ) {
                toast.error('Algo salió mal', {
                    description: res.message || 'La información no se envió correctamente'
                })
            } else {
                toast.success('Se registró con éxito')
                navigate(Paths.SignIn)
            }
        }).catch(() => {
            toast.error('Algo salió mal', {
                description: 'No se pudo registrar la cuenta'
            })
        })
    }
    return (
        <>
            <HelperHelmet title="Beauty Bell | Registrar" />

            <Center
                h='100vh'
                >
                <Box
                    as='form'
                    w='300px'
                    display='flex'
                    flexDirection='column'
                    gap='1em'
                    padding='1em'
                    onSubmit={createAccount}
                    >
                    <Heading
                        size='md'
                        textAlign='center'
                        >
                        Crear cuenta
                    </Heading>
                    <FormControl
                        borderBottom='1px solid black'
                        display='flex'
                        alignItems='center'
                        >
                        <FormLabel>
                            <FaUser />
                        </FormLabel>
                        <Input
                            required
                            border='none'
                            outline='none'
                            focusBorderColor='transparent'
                            type='text'
                            name='name'
                            placeholder='Nombre completo'
                            />
                    </FormControl>
                    <FormControl
                        borderBottom='1px solid black'
                        display='flex'
                        alignItems='center'
                        >
                        <FormLabel>
                            <LuIdCard />
                        </FormLabel>
                        <Input
                            border='none'
                            outline='none'
                            focusBorderColor='transparent'
                            type='text'
                            name='dni'
                            placeholder='DNI'
                            />
                    </FormControl>
                    <FormControl
                        borderBottom='1px solid black'
                        display='flex'
                        alignItems='center'
                        >
                        <FormLabel>
                            <EmailIcon />
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
                            outline='none'
                            focusBorderColor='transparent'
                            type='password'
                            name='password'
                            placeholder='*********'
                            />
                    </FormControl>
                    <Box display='flex' justifyContent='end'>
                        <Link to='/signin'>
                            <Text
                                fontSize='0.7em'
                                >
                                Ya tengo una cuenta
                            </Text>
                        </Link>
                    </Box>
                    <Button
                        type='submit'
                        colorScheme='beautypink'
                        >
                        Registrarme
                    </Button>
                </Box>
            </Center>
        </>
    )
}

export default SignUp