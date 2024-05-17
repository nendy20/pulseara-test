import { Box, Typography } from "@mui/material"

const PVI = ({ tittle, value }: { tittle: string, value: string }) => {
    return (
        <Box minWidth="7.5rem">
            <Typography color="#949494" fontSize="1rem" fontWeight={400} textOverflow="ellipsis" > {tittle} </Typography>
            <Typography fontWeight={600} fontSize="1rem" > {value} </Typography>
        </Box>
    )
}


export default PVI 