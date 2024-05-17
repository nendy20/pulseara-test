interface IPModal {
    modalstate: boolean,
    closeModal: () => void,
    handleIsThere?: (value: boolean) => void,
    handleNotification: (text: string, value: boolean) => void
}


export type { IPModal }