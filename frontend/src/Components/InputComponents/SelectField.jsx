import { TextField } from "@mui/material"


const categoriesObject = [
    {
        value: "code",
        label: "👩🏻‍💻🧑🏾‍💻"
    },
    {
        value: "university",
        label: "🏫🧠✒️"
    }
]
export function SelectField({categoryRef}) {

    return(
        <TextField
          inputRef={categoryRef}
          id="outlined-select-currency-native"
          select
          required
          label="Native select"
          defaultValue=""
          SelectProps={{
            native: true,
          }}
          helperText="Wähle deine Kategorie[Code/Universität] aus"
          sx={{
            width: "80%",
            height: "auto",
            fontWeight:'bold'
          }}
        >
          {categoriesObject.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
    )
}