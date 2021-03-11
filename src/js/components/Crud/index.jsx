import {Table, Button} from "antd";
import { ModalUpdateUser, ModalAddUser } from "../index";
import React from "react";
import "./index.scss"

const Crud = ({ users, userTableColumns, toggleAddUserModal, modalVisibility, createUser, modalUpdateVisibility, toggleUpdateUserModal, updateUser, updatingUser }) => {
    return <div className="crud">
        <div className="crud__actions">
            <Button onClick={toggleAddUserModal}>Add user</Button>
        </div>
        <Table dataSource={users}
               columns={userTableColumns}
               pagination={false}
        />
        <ModalAddUser
            toggleAddUserModal={toggleAddUserModal}
            modalVisibility={modalVisibility}
            createUser={createUser}
        />
        <ModalUpdateUser
            modalUpdateVisibility={modalUpdateVisibility}
            toggleUpdateUserModal={toggleUpdateUserModal}
            updateUser={updateUser}
            updatingUser={updatingUser}
        />
    </div>
};

export default Crud;
