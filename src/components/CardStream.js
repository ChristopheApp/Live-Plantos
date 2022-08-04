import React, {useEffect, useState} from "react";

import CardStyled from "../styled/CardStyled";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

import ViewerCountBox from "../components/ViewerCountBox";



export default function CardStream(props) {

    const [data, setData] = useState(props.data);
    const [urlThumbnail, setUrlThumbnail] = useState('');

    useEffect (() => {
        console.log(data)
        let url = data.thumbnail_url
        url = url.replace('{width}', '1920');
        url = url.replace('{height}', '1080');
        setUrlThumbnail(url)
        console.log(url)
    },[])

  return (
    <CardStyled sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component='img'
          height="140"
          image={urlThumbnail}
          alt={data.user_login}
        />
        <CardContent>
            <Box component="div" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: { md: 345 },
                    }}>

                <Typography gutterBottom variant="h5"  component="div">
                    {data.user_name}
                </Typography>
                
                <ViewerCountBox viewerCount={data.viewer_count}/>

            </Box>
          <Typography variant="body2" color="white">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardStyled>
  );
}
