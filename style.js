import { Paper, Grid, styled } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '300px',
}));

export const GridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const Container = styled(Grid)(({ theme }) => ({
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
}));
