import React, {useEffect, useState} from "react";
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';

import TypographyLP from '../styled/TypographyLP';

export default function LoadingComponent(props) {

  return (
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ textAlign: 'center' }}
                >

                <TypographyLP gutterBottom variant="h3" component="h3">
                    Recherche de streams en cours...
                </TypographyLP>
                <CircularProgress  />
            </Stack>
  );
}