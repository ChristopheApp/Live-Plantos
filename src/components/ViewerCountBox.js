import React, {useEffect, useState} from "react";

import Card from '@mui/material/Card';
import CardStyled from "../styled/CardStyled";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

import ViewerCountStyled from "../styled/ViewerCountStyled";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';



export default function CardStreamBox(props) {

    const [data, setData] = useState(props)

    useEffect (() => {
        console.log(data)
    },[])

  return (
        <ViewerCountStyled component='div'>
            <PersonOutlineOutlinedIcon sx={{
                color: 'inherit',
                }} />
            <Typography gutterBottom variant="h5" color="inherit" component="div">
                {props.viewerCount}
            </Typography>
        </ViewerCountStyled>           
  );
}
