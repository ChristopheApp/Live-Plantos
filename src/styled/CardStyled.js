import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { purple } from '@mui/material/colors';


const CardStyled = styled(Card)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[900],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export default CardStyled;