import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

//Custom Hook
import { useCustomTheme } from '../../customHooks/useCustomTheme';




export function AppContainer({children}) {
    const theme = useCustomTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    if(!matches) {
        return (
        <Box
          sx={{
            width: "100vw",
            height: "90vh",

            border: "1px solid",
            borderRadius: "15px",
            backgroundColor: 'background.paper',
            display: "grid",
            gridTemplateRows: "15% 15% 70%",
            '&:hover': {
              backgroundColor: 'background.default',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {children}
        </Box>
      );
        }
    else {
        return(
        <Box
            sx={{
            width: "50vw",
            height: "90vh",
            alignSelf: "center",
            border: "1px solid",
            borderRadius: "15px",
            backgroundColor: 'background.paper',
            display: "grid",
            gridTemplateRows: "15% 20% 65%",
            '&:hover': {
                backgroundColor: 'background.default',
                opacity: [0.9, 0.8, 0.7],
            },
            }}
        >{children}
        </Box>
    );
    }
}