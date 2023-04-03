import React from 'react';
import { EmployeeProduct } from '../../components';
import { EmployeeMenu } from '../../components';

import {PieChart, Pie, Sector, Cell } from  "recharts";

import './EmployeeDashboard.css';

const EmployeeDashboard = () => {

    const data = [
       { name: 'user' }
    ];


    return (
        <div className="employee__dashboard">
            <EmployeeMenu />
            <h1 className="employee__header">Dashboards</h1>

            <div className="employee__total">
                <div className="employee__total-sales">

                </div>
                <div className="employee__total-profit">
                    
                </div>
                <div className="employee__total-orders">
                    
                </div>
            </div>

                <div className="employee__user">
                    <PieChart width={730} height={250}>
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    </PieChart>
                </div>

                <div className="employee__bars">
                    
                </div>
        </div>
    ) 
}

export default EmployeeDashboard;