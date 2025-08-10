import { Skeleton, Td, Tr } from "@chakra-ui/react"

const HelperSkeleton = ({ column } : {
    column: number
}) => {
    return (
        <>
            {
                Array.from({ length: 5 }).map((_, rowIndex) => (
                    <Tr key={rowIndex}>
                        {
                            Array.from({ length: column }).map((_, columnIndex) => (
                                <Td key={columnIndex}>
                                    <Skeleton height='20px' />
                                </Td>
                            ))
                        }
                    </Tr>
                ))
            }
        </>
    )
}

export default HelperSkeleton