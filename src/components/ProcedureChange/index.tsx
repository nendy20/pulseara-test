import { Box, Button, } from "@mui/material";
import trashIcon from "@/assets/icons/delete_icon.svg"
import EditIcon from '@mui/icons-material/Edit';
import IProcedurechange from "@/components/ProcedureChange/IprocedureChange";
import FieldP from "@/components/ProcedureChange/FieldP";

const index = (props: IProcedurechange) => {

  const { handleChange, procedure, isAdding, handleEditing, isEditing, deleteProcedure, } = props;

  return (
    <Box display="flex" pl={{ lg: isAdding ? '2.2rem' : 0 }} flexDirection={{ xs: "column", lg: "row" }} alignItems={{ xs: "center", lg: "flex-end" }}
      pr={{ lg: isAdding ? '1.5rem' : 0 }}>

      {!isAdding && <Box display="flex" alignItems="end" justifyContent={{ xs: "start", lg: "end" }} mb={1.4}>
        <Button endIcon={<Box component="img" src={trashIcon} />} sx={{ p: 0, mr: 2, minWidth: 4 }}
          onClick={() => deleteProcedure && deleteProcedure(procedure?.id)} />
      </Box>}
      <Box display="flex" gap={3} flexDirection={{ xs: 'column', lg: "row" }}>
        <FieldP handleChange={handleChange} isAdding={isAdding}
          procedure={procedure} tittle="Procedimiento 01" name="name" isEditing={isEditing} value={procedure?.name} id={procedure?.id} />
        <FieldP handleChange={handleChange} isAdding={isAdding}
          procedure={procedure} tittle="Código" name="code" isEditing={isEditing} value={procedure?.code} id={procedure?.id} />
        <FieldP handleChange={handleChange} isAdding={isAdding}
          procedure={procedure} tittle="Reclamado RD$" name="reclaimed" isEditing={isEditing} value={procedure?.reclaimed} id={procedure?.id} />
        <FieldP handleChange={handleChange} isAdding={isAdding}
          procedure={procedure} tittle="Diferencia RD$" name="difference" isEditing={isEditing} value={procedure?.difference} id={procedure?.id} />
        <FieldP handleChange={handleChange} isAdding={isAdding}
          procedure={procedure} tittle="Autorizado RD$" name="authorized" isEditing={isEditing} value={procedure?.authorized} id={procedure?.id} />
      </Box>
      {
        !isAdding &&
        <Box display="flex" alignItems="end" justifyContent={{ xs: "start", lg: "end" }} mb={1.4} mt={2}>
          <Button endIcon={<EditIcon />} sx={{ p: 0, minWidth: 4 }} onClick={() => handleEditing && handleEditing(procedure.id)} />
        </Box>}
    </Box>
  )
}

export default index;