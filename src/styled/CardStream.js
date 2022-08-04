import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const CardStream = styled(Card)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export default CardStream;