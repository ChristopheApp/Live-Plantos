import React, {useEffect, useState} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function CardStream(props) {

    const [data, setData] = useState(props.data)

    useEffect (() => {
        console.log(data)
    },[])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height="140"
          image="https://static-cdn.jtvnw.net/previews-ttv/live_user_dylan_del_rey.jpg"
          alt={data.user_login}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.user_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
