import { Box } from "@mui/material"
import { TextFieldWithoutFill } from "./TextFieldWithoutFill"
import { SelectField } from "./SelectField"

//hooks



export function FormInput({inputRef,categoryRef}) {
   
    return(
        <Box
        component="form"
        
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch'},
          height: "80%",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        noValidate
        autoComplete="off"
        >
            <TextFieldWithoutFill  inputRef={inputRef}/>
            <SelectField categoryRef={categoryRef}/>
        </Box> 
    )
}