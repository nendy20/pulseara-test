import { IPModal } from '@/components/ProcedureModal/IPModal'
import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from '@/components/CustomButton'
import proceduresData from "@/data/procedures";
import ProcedureChange from "@/components/ProcedureChange";
import { useState } from 'react';
import procedureData from '@/data/procedures'
import { v4 as uuidv4 } from 'uuid';
import CheckIcon from '@mui/icons-material/Check';
import { procedureType } from '@/types/procedure';
import styles from './modalStyles';

const defaultProcedure = { name: "", code: "", reclaimed: "", difference: "", authorized: "" }

const index = ({ handleNotification, modalstate, closeModal, handleIsThere }: IPModal) => {
    const [procedure, setProcedure] = useState<procedureType>(defaultProcedure)
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<string | undefined>("")

    const handleAdding = () => {
        setIsAdding(true)
        setIsEditing("")
        setProcedure(defaultProcedure)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProcedure(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addProcedure = () => {
        const isEvery = Object.values(procedure).every((p) => p !== "")
        if (!isEvery) {
            alert("completa los datos por favor");
            return
        }
        closeModal()
        setIsAdding(false)
        setIsEditing("")
        setProcedure(defaultProcedure)
        handleNotification("Procedimiento agregado", true)
        setTimeout(() => handleNotification("", false), 3000);
        procedureData.addProcedure({ ...procedure, id: uuidv4() })
        handleIsThere && handleIsThere(true)
    }

    const deleteProcedure = (deleteId?: string) => {
        closeModal()
        procedureData.deleteProcedure(deleteId)
        setIsEditing("")
        setIsAdding(false)
        handleNotification("procedimiento eliminado", true)
        setTimeout(() => handleNotification("", false), 3000);
        procedureData.getProcedures().length <= 0 && handleIsThere && handleIsThere(false)
    }

    const handleEditing = (editId?: string) => {
        setIsEditing(editId)
        setIsAdding(false)
        const finded = proceduresData.getProcedures().find((pro: procedureType) => pro.id === editId)
        finded && setProcedure(finded)
    }

    const handleEdit = () => {
        const finded = proceduresData.getProcedures().find((pro: procedureType) => pro.id === isEditing)
        handleIsThere && handleIsThere(true)
        const changed = { ...finded, ...procedure }
        changed && procedureData.editProcedure(changed)
        handleNotification("Procedimiento editado", true)
        setTimeout(() => handleNotification("", false), 3000);
        closeModal()
    }

    return (
        <Modal
            open={modalstate}
            onClose={closeModal}>
            <Box sx={styles} px={{ xs: 4, lg: 8 }} width={{ xs: "96%", md: "76%" }}
                display="flex" flexDirection="column" justifyContent="space-between">
                <Box>

                    <Box display="flex" flexDirection={{ xs: "column", lg: "row" }} alignItems={{ xs: "flex-start", lg: "center" }}
                        gap={1} >
                        <Typography fontSize="2rem" color="#1E2469" fontWeight={400}>
                            procedimientos
                        </Typography>
                        <Button onClick={handleAdding} startIcon={
                            <AddIcon sx={{ color: "#07B284", fontFamily: "roboto" }} />} sx={{ color: "#07B284", fontWeight: 700 }} >
                            crear procedimiento</Button>
                    </Box>
                    <Box mb={4} gap={4} display="flex" flexWrap="wrap" flexDirection={{ xs: "row", lg: "column" }}>


                        {procedureData.getProcedures().length >= 1 ? proceduresData.getProcedures().map((p) =>
                            <ProcedureChange key={p.id} handleChange={handleChange}
                                handleEditing={handleEditing} procedure={p}
                                isEditing={isEditing} deleteProcedure={deleteProcedure}
                                handleEdit={handleEdit}
                            />) : !isAdding && <Typography mt={2}>no hay datos</Typography>}
                    </Box>
                    {isAdding && <Box my={4}>

                        <ProcedureChange isAdding={isAdding} procedure={procedure}
                            handleChange={handleChange} />
                    </Box>
                    }
                </Box>

                <IconButton onClick={closeModal} sx={{ position: "absolute", right: 0, top: 0 }}  >
                    <CloseIcon />
                </IconButton>
                <Box display="flex" flexDirection={{ xs: "column-reverse", md: "row" }} pr={3}
                    justifyContent={{ xs: "center", md: "end" }} alignItems="flex-start" gap={2}>
                    <Button onClick={closeModal} variant="outlined" size="small"
                        sx={{
                            color: "#6E6D8C", px: 3,
                            fontWeight: 700, fontSize: "14px", borderWidth: "2px", borderColor: "#D6D6EB", '&:hover': {
                                borderWidth: "2px"
                            },
                        }}
                    >Cancelar</Button>
                    <CustomButton text='Guardar cambios' handleClick={isEditing ? handleEdit : addProcedure} icon={CheckIcon}></CustomButton>
                </Box>
            </Box>

        </Modal>
    )
}

export default index