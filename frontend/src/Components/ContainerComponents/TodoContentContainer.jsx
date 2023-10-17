import { Box } from "@mui/material"

export function TodoContentContainer({children,contentFor}) {
        return(
            <Box sx={
                {
                    display:"flex",
                    columnGap: "10px",
                    flexDirection: contentFor === "vertical" ?  "column" : "row",
                    justifyContent: contentFor.toLowerCase()==="icons" ? "space-between" : "center",
                    height: "90%",
                    width: "90%",
                    border: "1px solid black",
                    justifySelf: "center"

                }
            }>{children}
            </Box>
        ) 
}