import React, { Fragment } from 'react';
import Graph from '../../common/graph/index'
import DateTimeRangeSelector from '../../common/filters/date-time-range'
const Dashboard = () => {
    console.log('dashboard');
    return(
        <Fragment>
            <h1>Dashboard</h1>
            <DateTimeRangeSelector/>
            <Graph/>
        </Fragment>
    )
}

export default Dashboard;