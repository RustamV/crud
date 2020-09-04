import React, { useState } from 'react';
import AxiosService from "../../axios/axios-service";

import { Table } from 'antd';

export default function Users() {
    const [users, setUsers] = useState([{
        id: '1',
        first_name: 'John',
        last_name: 'Brown',
        email: 'johnbrown@gmail.com',
        key: '1'
    }]);
    const getUsers = () => {
        AxiosService.getAll()
            .then(response => {
                console.log(response);
                setUsers(users => [...users, ...response.data.data]);
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
            <h2 className="user__title">Get users</h2>
            <button onClick={getUsers}>Get data from API</button>
            {
                users &&
                (
                    <Table columns={columns} dataSource={users} pagination={{ pageSize: 4 }} />
                )
            }
        </div>
    );
}