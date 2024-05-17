import { Button } from "@mui/material"
import IcustomButton from "./ICustomButton";

const index = ({ text, handleClick, icon: Icon }: IcustomButton) => {
    return (
        <Button
            startIcon={<Icon style={{ fontSize: "14px" }} />}
            onClick={() => handleClick()}
            sx={{
                px: "0.6rem", py: "0.3rem", fontSize: "0.75rem",
                fontWeight: 700, bgcolor: (theme) => theme.palette.primary.main, color: "#FFFFFF", fontStyle: "normal", '&:hover': {
                    backgroundColor: (theme) => theme.palette.primary.main
                },
            }} >
            {text}</Button>
    )
}

export default index