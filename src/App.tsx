import { ChakraProvider } from "@chakra-ui/react"
import AppRoutes from "./router/AppRoutes"
import theme from "./theme/theme"
import { Toaster } from "sonner"

const App = () => {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Toaster richColors/>
				<AppRoutes />
			</ChakraProvider>
		</>
	)
}

export default App
