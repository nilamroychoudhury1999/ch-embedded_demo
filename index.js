npm install @mui/material @emotion/react @emotion/styled

import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { StyledPaper, GridItem, Container } from './styles';

const BaseLayout = () => {
    return (
        <>
            <Typography variant="h5" style={{ paddingLeft: '20px' }}>Performance Summary</Typography>
            <Container container spacing={2} justifyContent="center">
                <GridItem item xs={12} sm={6} md={6}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Performance Summary Card </Typography>
                    </StyledPaper>
                </GridItem>
                <GridItem item xs={12} sm={6} md={6}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Performance Summary Card </Typography>
                    </StyledPaper>
                </GridItem>
            </Container>
            <Container container spacing={2} justifyContent="center">
                <GridItem item xs={12} sm={6} md={4}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Performance Summary Card </Typography>
                    </StyledPaper>
                </GridItem>
                <GridItem item xs={12} sm={6} md={4}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Performance Summary Card </Typography>
                    </StyledPaper>
                </GridItem>
                <GridItem item xs={12} sm={6} md={4}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Performance Summary Card</Typography>
                    </StyledPaper>
                </GridItem>
            </Container>
            <Typography variant="h5" style={{ paddingLeft: '20px' }}>Deployment Summary</Typography>
            <Container container spacing={2} justifyContent="center">
                <GridItem item xs={12} sm={6} md={4}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Deployment Summary Card </Typography>
                    </StyledPaper>
                </GridItem>
                <GridItem item xs={12} sm={6} md={4}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Deployment Summary Card </Typography>
                    </StyledPaper>
                </GridItem>
                <GridItem item xs={12} sm={6} md={4}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Deployment Summary Card </Typography>
                    </StyledPaper>
                </GridItem>
            </Container>
            <Typography variant="h5" style={{ paddingLeft: '20px' }}>Opportunity Summary</Typography>
            <Container container spacing={2} justifyContent="center">
                <GridItem item xs={12} sm={6} md={6}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Opportunity Card </Typography>
                    </StyledPaper>
                </GridItem>
                <GridItem item xs={12} sm={6} md={6}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h6">Opportunity Card </Typography>
                    </StyledPaper>
                </GridItem>
            </Container>
        </>
    );
};

export default BaseLayout;

