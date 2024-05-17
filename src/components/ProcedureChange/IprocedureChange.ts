import { procedureType } from "@/types/procedure"

interface IProcedurechange {
    procedure: procedureType,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isAdding?: boolean,
    isEditing?: string,
    handleEditing?: (editId?: string) => void
    deleteProcedure?: (deleteId?: string) => void
    handleEdit?: () => void
}

export default IProcedurechange;