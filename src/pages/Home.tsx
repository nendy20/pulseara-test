import { Box, Snackbar, Typography } from "@mui/material"
import proceduresData from "@/data/procedures";
import NotData from "@/components/NotData";
import CustomButton from "@/components/CustomButton"
import { useState } from "react";
import SnackbarContent from '@mui/material/SnackbarContent';
import ProcedureModal from '@/components/ProcedureModal'
import { procedureType } from "@/types/procedure";
import ProcedureView from "@/components/procedureView";
import CreateIcon from '@mui/icons-material/Create';

const Home = () => {

    const [modalState, setmodalState] = useState<boolean>(false);
    const [isThere, setIsThere] = useState(false)
    const [useNotification, setUseNotification] = useState({ text: "jfdkhjdfjk", value: false })
    const openModal = () => setmodalState(true);
    const closeModal = () => setmodalState(false);

    const handleNotification = (text: string, value: boolean) => setUseNotification({ text, value })

    const handleIsThere = (value: boolean) => setIsThere(value)



    return (
        <Box minHeight="80vh" >
            <Typography
                color="#000"
                fontWeight="600"
                fontStyle="normal"
                fontSize="1.56rem"
                pb={4}
            >Procedimientos</Typography>
            {
                proceduresData.getProcedures().length >= 1 || isThere ?
                    <>
                        <Box pb={4} display="flex" gap={2} flexDirection={{ xs: "row", lg: "column" }} flexWrap="wrap">
                            {proceduresData.getProcedures().map((procedure: procedureType, index) =>
                                <ProcedureView procedure={procedure} key={procedure.id} index={index} />)}
                        </Box>
                        <CustomButton text="Editar procedimientos" handleClick={openModal} icon={CreateIcon} />
                    </>
                    : <NotData handleClick={openModal} />
            }
            <Snackbar
                open={useNotification.value}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                sx={{ borderRadius: "10px", fontFamily: "roboto", }}
            >
                <SnackbarContent sx={{ backgroundColor: "#306495", }} style={{ minWidth: "max-content" }} message={useNotification.text} />
            </Snackbar>
            <ProcedureModal modalstate={modalState} closeModal={closeModal} handleNotification={handleNotification} handleIsThere={handleIsThere} />
        </Box>
    )
}

export default Home