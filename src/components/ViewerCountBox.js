import React, {useEffect, useState} from "react";

import Card from '@mui/material/Card';
import CardStyled from "../styled/CardStyled";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

import BoxViewerCountStyled from "../styled/BoxViewerCountStyled";

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
