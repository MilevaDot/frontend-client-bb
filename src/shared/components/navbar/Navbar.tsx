import { Avatar, Button, Flex, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, Tooltip } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../../router/routes"
import { DragHandleIcon } from "@chakra-ui/icons"

const Navbar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <>
            <Flex
                p='4px 20px'
                gap='20px'
                alignItems='center'
                justifyContent='space-between'
                backgroundColor='beautypink'
                >
                <Flex
                    gap='1em'
                    >
                    <HStack
                        alignItems='center'
                        >
                        <Tooltip label='Menú principal'>
                            <Link to={ Paths.WebsiteHome }>
                                <DragHandleIcon />
                            </Link>
                        </Tooltip>
                    </HStack>
                    <HStack>
                        <Heading
                            size='sm'
                            >
                            Beauty Bell
                        </Heading>
                    </HStack>
                </Flex>
                <HStack>
                    <Menu>
                        <MenuButton as={Button}>
                            <HStack>
                                <Heading size='sm'>{username}</Heading>
                                <Avatar size='sm' name={username || ''} />
                            </HStack>
                        </MenuButton>
                        <MenuList>
                            {
                                token ? 
                                <>
                                    <MenuItem onClick={logOut}>Cerrar sesión</MenuItem>
                                </>
                                :
                                <MenuItem as={Link} to={Paths.SignIn}>Iniciar sesión</MenuItem>
                            }
                        </MenuList>
                    </Menu>
                </HStack>
            </Flex>
        </>
    )
}

export default Navbar