import React from 'react';
import { Table } from 'antd';
import "./Academic.css"

const educationData = [
    { id: 1, Examination: 'Master Of Computer Application', Study: 'Raipur Institute Of Technology , Raipur', year: '2020-2022', Percentage: '81%' },
    { id: 2, Examination: 'Bachelor of Computer Science', Study: 'Pragati College ,Raipur', year: '2017-2020', Percentage: '67%' },
    { id: 3, Examination: '12th', Study: 'Gov High Secondary School Panduka ,Gariyaband', year: '2016-2017', Percentage: '65%' },
    { id: 3, Examination: '10th', Study: 'Gov High Secondary School Panduka ,Gariyaband', year: '2016-2017', Percentage: '68%' },
];


const columns = [
    { title: 'Examination', dataIndex: 'Examination', key: 'Examination' },
    { title: 'School/College', dataIndex: 'Study', key: 'Study' },
    { title: 'Year', dataIndex: 'year', key: 'year' },
    { title: 'Percentage', dataIndex: 'Percentage', key: 'Percentage' },
];

const EducationTable = () => {
    return (
        <Table
            className="education-table"
            columns={columns}
            dataSource={educationData}
            pagination={false}
            scroll={{ x: true }}
        />
    );
};

export default EducationTable;
