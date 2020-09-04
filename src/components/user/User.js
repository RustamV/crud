import React, { useState } from 'react';
import AxiosService from "../../axios/axios-service";

import { Table } from 'antd';

export default function User() {
    const [user, setUser] = useState([{
        id: '1',
        first_name: 'John',
        last_name: 'Brown',
        email: 'johnbrown@gmail.com',
        key: '1'
    }]);
    const getUser = () => {
        AxiosService.get()
            .then(response => {
                console.log(response);
                setUser(user => [...user, response.data.data]);
            })
            .catch(e => {
                console.log(e);
            });
    }
    const columns = [
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name'
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }
    ];

    return (
        <div className="user">
            <h2 className="user__title">Get user</h2>
            <button onClick={getUser}>Get data from API</button>
            {
                user &&
                (
                    <Table columns={columns} dataSource={user} pagination={{ pageSize: 3 }} />
                )
            }
        </div>
    );
}