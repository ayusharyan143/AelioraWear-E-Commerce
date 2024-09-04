import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Achievement from './Achievement'; // Ensure correct spelling
import MonthlyOverview from './MonthlyOverview';
import OrderTable from './OrderTable';
import ProductsTableView from '../view/ProductTableView';
import LineChart from '../AdminSrc/src/components/LineChart';
import PieChart from '../AdminSrc/src/components/PieChart';
import BarChart from '../AdminSrc/src/components/BarChart';
import GeographyChart from '../AdminSrc/src/components/GeographyChart';

const Dashboard = () => {
    return (
        <div className='p-10'>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} className='p-4'>
                        <Achievement />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper elevation={3} className='p-4'>
                        <MonthlyOverview />
                    </Paper>
                </Grid>

                {/* Top row: LineChart and PieChart */}
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} style={{ height: '400px' }} className='p-4'>
                            <Typography variant="h6" fontWeight="600" gutterBottom>
                                Revenue Trend
                            </Typography>
                            <LineChart />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ height: '400px' }} className='p-4'>
                            <Typography variant="h6" fontWeight="600" gutterBottom>
                                Sales Distribution
                            </Typography>
                            <PieChart />
                        </Paper>
                    </Grid>
                </Grid>

                {/* Middle row: BarChart and GeographyChart */}
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ height: '450px' }} className='p-4'>
                            <Typography variant="h6" fontWeight="600" gutterBottom>
                                Monthly Sales
                            </Typography>
                            <BarChart />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{ height: '450px' }} className='p-4'>
                            <Typography variant="h6" fontWeight="600" gutterBottom>
                                Traffic by Region
                            </Typography>
                            <GeographyChart />
                        </Paper>
                    </Grid>
                </Grid>
                {/* Bottom row: OrderTable and ProductsTableView */}
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} className='p-4'>
                            <OrderTable />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} className='p-4'>
                            <ProductsTableView />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    );
};

export default Dashboard;
