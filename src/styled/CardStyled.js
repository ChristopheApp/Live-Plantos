import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { purple } from '@mui/material/colors';


const CardStyled = styled(Card)((props) => ({
    width: 345,
    height: 300,
    color: 'white',
    backgroundColor: purple[900],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export default CardStyled;