import { Box } from "@mui/material"
import { ExpandMinifyMenuIcon } from "./ExpandMinifyMenuIcon";
import { SearchLoupeIcon } from "./SearchLoupeIcon";
import { NotifyIcon } from "./NotifyIcon";
export function IconsStacked(){
   return(
    <>
        <ExpandMinifyMenuIcon/>
        <Box sx={{
            display: "flex",
            justifyContent:"flex-end",
            width: "100%"
        }}>
            <SearchLoupeIcon/>
            <NotifyIcon/>
            </Box>
    </>
    ) 
}