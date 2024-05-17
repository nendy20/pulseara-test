import { Box, Typography } from '@mui/material'
import folderIcon from "@/assets/icons/folder_icon_svg.svg"
import CreateIcon from '@mui/icons-material/Create';

import CustomButton from "@/components/CustomButton"
const notData = ({ handleClick }: { handleClick: () => void }) => {
    return (
        <Box display='flex' flexDirection='column' minHeight="70vh"
            justifyContent="center" alignItems="center" gap="1.25rem" >
            <Box component="img" src={folderIcon} width="8.37rem" height="8.37rem" />
            <Typography fontWeight={400} letterSpacing="0.15px" fontSize="1rem" fontFamily="roboto" >No hay datos que mostrar</Typography>
            <CustomButton text='Editar procedimientos' handleClick={handleClick} icon={CreateIcon}></CustomButton>

        </Box>
    )
}

export default notData