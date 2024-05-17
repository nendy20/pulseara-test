import { Box, TextField, Typography } from '@mui/material';
import IField from './IField';

const FieldP = (props: IField) => {
    const { handleChange, name, tittle, value, isEditing, id } = props;
    const con = !(isEditing === id)

    return (
        <Box display="flex" gap={1} flexDirection="column" flexGrow={0} >
            <Typography color="#000000" fontSize="1rem" fontWeight={400} fontFamily="Open Sans" sx={{ textWrap: "nowrap" }}>{tittle}</Typography>
            <TextField required defaultValue={value} disabled={con}
                sx={{
                    input: {
                        borderWidth: "2px",
                        fontSize: '16px',
                        fontWeight: '400',
                        backgroundColor: '#F6F6FB',
                        '&::placeholder': {
                            color: '#007bff',
                            fontFamily: "Open Sans",
                        },
                    },
                }}
                variant="outlined" size="small" name={name} onChange={handleChange} />
        </Box>
    )
}

export default FieldP;