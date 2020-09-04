import React, { useState } from 'react';
import AxiosService from "../../axios/axios-service";

import { Form, Input, Button } from 'antd';

export default function Update() {
    const [name, setName] = useState();
    const [job, setJob] = useState();
    const createUser = (name, job) => {
        AxiosService.update({
            "name": name,
            "job": job
        })
            .then(response => {
                console.log(response);
                alert(`User updated: 
                name: ${response.data.name}, 
                job: ${response.data.job}
                updatedAt: ${response.data.updatedAt}
                `);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    return (
        <div className="user">
            <h2 className="user__title">Update user</h2>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Job"
                    name="job"
                    rules={[{ required: true, message: 'Please input your job!' }]}
                    value={job || ''}
                    onChange={(e) => setJob(e.target.value)}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={() => createUser(name, job)}>
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}