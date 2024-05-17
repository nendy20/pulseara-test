import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

interface IcustomButton {
    text: string,
    handleClick: () => void
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
}

export default IcustomButton;