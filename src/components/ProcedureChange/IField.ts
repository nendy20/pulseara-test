import { procedureType } from "@/types/procedure"

interface IField {
    procedure: procedureType,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    tittle: string,
    name: string,
    isAdding?: boolean,
    value: string,
    isEditing?: string
    id?: string
}

export default IField;