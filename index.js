import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const BaseLayout = () => {
    return (
        <>
            <Typography variant="h5" style={{ paddingLeft: '20px' }}>Performance Summary</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Performance Summary Card</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Performance Summary Card</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Performance Summary Card</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Performance Summary Card</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Performance Summary Card</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="h5" style={{ paddingLeft: '20px' }}>Deployment Summary</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Deployment Summary Card</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Deployment Summary Card</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Deployment Summary Card</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="h5" style={{ paddingLeft: '20px' }}>Opportunity Summary</Typography>
            <Grid container spacing={2} justifyContent="center" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Opportunity Card</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
                        <Typography variant="h6">Opportunity Card</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default BaseLayout;
