import React from "react";

import BoxViewerCountStyled from "../styled/BoxViewerCountStyled";

import Typography from '@mui/material/Typography';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function CardStreamBox(props) {

  return (
        <BoxViewerCountStyled component='div'>
            <PersonOutlineOutlinedIcon sx={{
                color: 'inherit',
                }} />
            <Typography gutterBottom variant="h5" color="inherit" component="div">
                {props.viewerCount}
            </Typography>
        </BoxViewerCountStyled>           
  );
}
