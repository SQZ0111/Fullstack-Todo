import { Card,Typography,CardContent } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { LinearProgress } from '@mui/material';
//Compponents
import { useCustomTheme } from "../../customHooks/useCustomTheme";



export function TodoAppCategoryProgressCard({text,activeTodos,type}) {
    const theme = useCustomTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    console.log(activeTodos);
    return(
        <Card sx={{ 
            width: "30%",
            height: "80%",
            textAlign: "center",

         }}>
        <CardContent>
        <Typography sx={{
            color: type === "code" ? theme.palette.text.primary : theme.palette.primary.contrastText,
            fontSize: matches ? theme.typography.textMd : theme.typography.textSm,
        }} gutterBottom>
            {activeTodos}
        </Typography>
        <Typography sx={{
            color: type === "code" ? theme.palette.text.primary : theme.palette.primary.contrastText,
            fontSize: matches ? theme.typography.h4 : theme.typography.h6 
        }}>
            {text}
        </Typography>
        <LinearProgress value={activeTodos} variant='determinate' sx={{
        color: type==="code" ? theme.palette.primary.main : theme.palette.secondary.light //does not show other color
        }}/>
        </CardContent> 

    </Card>
    )
}