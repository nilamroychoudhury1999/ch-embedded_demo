import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const data1 = {
    labels: ['2%+', '4%+', '6%+', 'Overall'],
    datasets: [
        {
            label: 'LFL PSW (K)',
            data: [32, 35, 28, 30],
            backgroundColor: '#0071BC',
        },
        {
            label: 'LFL PSW YoY',
            data: [22, 25, 20, 24],
            backgroundColor: '#49A942',
        },
        {
            label: 'NSO PSW',
            data: [27, 30, 25, 28],
            backgroundColor: '#F78828',
        },
        {
            label: 'Total PSW (K)',
            data: [29, 32, 27, 30],
            backgroundColor: '#8E44AD',
        },
    ],
};

const data2 = {
    labels: ['2%+', '4%+', '6%+', 'Overall'],
    datasets: [
        {
            label: 'APP',
            data: [20, 25, 30, 28],
            backgroundColor: '#0071BC',
        },
        {
            label: 'Mono AAR',
            data: [18, 23, 28, 26],
            backgroundColor: '#49A942',
        },
        {
            label: 'Mono ARR',
            data: [22, 27, 32, 30],
            backgroundColor: '#F78828',
        },
    ],
};

const data3 = {
    labels: ['APP', 'APR', 'Mono AAR'],
    datasets: [
        {
            label: '2%+',
            data: [3.9, 4.8, 3.8],
            backgroundColor: '#3EA6FF',
        },
        {
            label: '4%+',
            data: [3.8, 4.6, 3.6],
            backgroundColor: '#5A79FF',
        },
        {
            label: '6%+',
            data: [3.6, 4.4, 3.4],
            backgroundColor: '#8C4BFF',
        },
        {
            label: 'Overall',
            data: [3.4, 4.2, 3.2],
            backgroundColor: '#A923FF',
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false, // Hide x-axis
            grid: {
                display: false,
            },
        },
        y: {
            display: false, // Hide y-axis
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                usePointStyle: true,
                pointStyle: 'rect',
                padding: 20,
                color: '#333',
            },
        },
        tooltip: {
            enabled: true,
            backgroundColor: '#000',
            titleFont: { size: 16 },
            bodyFont: { size: 14 },
            footerFont: { size: 12 },
        },
        datalabels: {
            display: true,
            color: '#000',
            anchor: 'end',
            align: 'top',
            font: {
                weight: 'bold',
                size: 12,
            },
        },
    },
    layout: {
        padding: {
            top: 10,
        },
    },
};

const lastCardOptions = {
    ...options,
    scales: {
        x: {
            display: false, // Hide x-axis
            grid: {
                display: false,
            },
            categoryPercentage: 0.5, // Adjust this to control the space between the group of bars
        },
        y: {
            display: false, // Hide y-axis
            grid: {
                display: false,
            },
        },
    },
    elements: {
        bar: {
            barPercentage: 0.3, // Adjust this to control the width of the bars
            categoryPercentage: 0.5,
        },
    },
};

const CardComponent = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                City-tier wise PSW
                            </Typography>
                            <div style={{ height: '300px' }}>
                                <Bar data={data1} options={options} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Program wise PSW
                            </Typography>
                            <div style={{ height: '300px' }}>
                                <Bar data={data2} options={options} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Average RR of Monobrand
                            </Typography>
                            <div style={{ height: '300px' }}>
                                <Bar data={data3} options={lastCardOptions} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CardComponent;

            data: [29, 32, 27, 30],
            backgroundColor: '#8E44AD',
        },
    ],
};

const data2 = {
    labels: ['2%+', '4%+', '6%+', 'Overall'],
    datasets: [
        {
            label: 'APP',
            data: [20, 25, 30, 28],
            backgroundColor: '#0071BC',
        },
        {
            label: 'Mono AAR',
            data: [18, 23, 28, 26],
            backgroundColor: '#49A942',
        },
        {
            label: 'Mono ARR',
            data: [22, 27, 32, 30],
            backgroundColor: '#F78828',
        },
    ],
};

const data3 = {
    labels: ['APP', 'APR', 'Mono AAR'],
    datasets: [
        {
            label: 'Q1',
            data: [15, 20, 25],
            backgroundColor: '#0071BC',
        },
        {
            label: 'Q2',
            data: [18, 22, 28],
            backgroundColor: '#49A942',
        },
        {
            label: 'Q3',
            data: [20, 24, 30],
            backgroundColor: '#F78828',
        },
        {
            label: 'Q4',
            data: [22, 26, 32],
            backgroundColor: '#8E44AD',
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false, // Hide x-axis
            grid: {
                display: false,
            },
        },
        y: {
            display: false, // Hide y-axis
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                usePointStyle: true,
                pointStyle: 'rect',
                padding: 20,
                color: '#333',
            },
        },
        tooltip: {
            enabled: true,
            backgroundColor: '#000',
            titleFont: { size: 16 },
            bodyFont: { size: 14 },
            footerFont: { size: 12 },
        },
    },
    layout: {
        padding: {
            top: 10,
        },
    },
};

const lastCardOptions = {
    ...options,
    scales: {
        x: {
            display: false, // Hide x-axis
            grid: {
                display: false,
            },
            categoryPercentage: 0.5, // Adjust this to control the space between the group of bars
        },
        y: {
            display: false, // Hide y-axis
            grid: {
                display: false,
            },
        },
    },
    elements: {
        bar: {
            barPercentage: 0.3, // Adjust this to control the width of the bars
            categoryPercentage: 0.5,
        },
    },
};

const CardComponent = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                City-tier wise PSW
                            </Typography>
                            <div style={{ height: '300px' }}>
                                <Bar data={data1} options={options} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Program wise PSW
                            </Typography>
                            <div style={{ height: '300px' }}>
                                <Bar data={data2} options={options} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3} sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Average RR of Monobrand
                            </Typography>
                            <div style={{ height: '300px' }}>
                                <Bar data={data3} options={lastCardOptions} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CardComponent;
