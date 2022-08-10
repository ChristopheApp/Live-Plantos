import React, {useEffect, useState} from "react";

import CardStyled from "../styled/CardStyled";
import BoxNameViewerStyled from "../styled/BoxNameViewerStyled";
import ViewerCountBox from "../components/ViewerCountBox";

import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




export default function CardStream(props) {

    const [data, setData] = useState(props.data);
    const [urlThumbnail, setUrlThumbnail] = useState('');

    useEffect (() => {
        let url = data.thumbnail_url
        url = url.replace('{width}', '1920');
        url = url.replace('{height}', '1080');
        setUrlThumbnail(url)
    },[])

  return (
    <CardStyled >
      <CardActionArea >
        <CardMedia
          component='img'
          height="140"
          image={urlThumbnail}
          alt={data.user_login}
        />
        <CardContent>
            <BoxNameViewerStyled component="div" >

                <Typography gutterBottom variant="h5"  component="div">
                    {data.user_name}
                </Typography>
                
                <ViewerCountBox viewerCount={data.viewer_count}/>

            </BoxNameViewerStyled >
          <Typography variant="body2" color="white">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardStyled>
  );
}
