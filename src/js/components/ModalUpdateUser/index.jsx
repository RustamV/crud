import {Button, Form, Input, Modal} from "antd";
import React from "react";

const ModalUpdateUser = ({updateUser, updatingUser, modalUpdateVisibility, toggleUpdateUserModal}) => {
    return (
        <Modal visible={modalUpdateVisibility} onCancel={toggleUpdateUserModal} footer={null}>
            <div>
                <h2>Update user</h2>
                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={(queryData)=>updateUser(queryData, updatingUser)}
                >
                    <Form.Item
                        label="First Name"
                        name="first_name"
                        rules={[{ required: true, message: 'Please input first name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                        name="last_name"
                        rules={[{ required: true, message: 'Please input last name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ type: 'email', required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default ModalUpdateUser;