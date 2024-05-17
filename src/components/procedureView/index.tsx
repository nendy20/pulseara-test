import { procedureType } from "@/types/procedure"
import { Box } from "@mui/material"
import PVI from "./PVI";

const ProcedureView = ({ procedure, index }: { procedure: procedureType, index: number }) => {

    const { authorized, code, difference, reclaimed, name } = procedure;

    return (
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} flexWrap="wrap"
            maxWidth={{ xs: "15rem", lg: "64rem" }} minWidth={{ lg: "64rem" }} justifyContent="center"
            gap="4.8rem" bgcolor="#FFFFFF" borderRadius="10px" px="2rem" py="0.9rem">
            <PVI tittle={`Procedimiento ${index + 1}`} value={name} />
            <PVI tittle="Código" value={code} />
            <PVI tittle="Reclamado" value={reclaimed} />
            <PVI tittle="Diferencia RD$" value={difference} />
            <PVI tittle="Autorizado RD$" value={authorized} />
        </Box>
    )
}

export default ProcedureView