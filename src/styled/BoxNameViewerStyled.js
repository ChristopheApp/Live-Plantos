import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { purple } from '@mui/material/colors';


const BoxNameViewerStyled = styled(Box)((props) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: { md: 345 },
  }));

export default BoxNameViewerStyled;