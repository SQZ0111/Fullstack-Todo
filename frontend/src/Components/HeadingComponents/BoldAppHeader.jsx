import { useCustomTheme } from "../../customHooks/useCustomTheme";

import { Typography } from "@mui/material";

export function BoldAppHeader({fontSizeHeader,text}) {
    const theme = useCustomTheme();
    if(fontSizeHeader === "sm") {
    return(
        <Typography sx={{
            fontSize: `${theme.typography.h3.fontSize}`,
            fontFamily: `${theme.typography.fontFamily}`
        }}>{text}</Typography>
    )
    } else if(fontSizeHeader === "md") {
        return(
            <Typography sx={{
                fontSize: `${theme.typography.h2.fontSize}`,
                fontFamily: `${theme.typography.fontFamily}` 
            }}>{text}</Typography>
        )
    } else {
        return(
            <Typography sx={{
                fontSize: `${theme.typography.h1.fontSize}`,
                fontFamily: `${theme.typography.fontFamily}`
            }}>{text}</Typography>
        )
    }
}