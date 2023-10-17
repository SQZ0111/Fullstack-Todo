import { TextField } from "@mui/material"


export function TextFieldWithoutFill({inputRef}) {

    return(
        <TextField
        inputRef={inputRef}
        required
        id="filled-required"
        label="Required"
        defaultValue="Todo"
        sx={{fontWeight:'bold'}} 
        variant="filled"
        />
    )
}
