import { Box } from "@mui/material";


export function AppHeaderIconsBox({content}) {
    return(
        <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            gap: "10px",
            border: "1px solid red"
            
        }}>
            {content} 
        </Box>
    )
}  