import { procedureType } from "@/types/procedure";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

class Procedure {
    private static instance: Procedure;
    private procedures: any = [];

    private constructor() {
        if (!Procedure.instance) {
            this.procedures = getLocalStorage("data");
            Procedure.instance = this;
        }
        return Procedure.instance;
    }

    public static getInstance(): Procedure {
        if (!Procedure.instance) {
            Procedure.instance = new Procedure();
        }
        return Procedure.instance;
    }

    public getProcedures(): procedureType[] {
        return this.procedures;
    }
    public Arethereprocedures(): boolean {
        return this.procedures.length >= 1
    }

    public addProcedure(procedure: any): void {
        this.procedures = [...this.procedures, procedure]

        setLocalStorage("data", this.procedures)
    }

    public editProcedure(data: procedureType): void {
        this.procedures = this.procedures.map((pro: procedureType) => pro.id === data.id ? data : pro)
        setLocalStorage("data", this.procedures)
    }

    public deleteProcedure(id?: string): void {
        this.procedures = this.procedures.filter((procedure: procedureType) => procedure.id !== id);
        setLocalStorage("data", this.procedures)
    }
}

const instance = Procedure.getInstance();
//Object.freeze(instance);

//export { Procedure }
export default instance;

