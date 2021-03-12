import React, { useEffect, useState } from "react";
import { Crud as CrudComponent }  from "../components";
import { Button } from "antd";
import { mainAPI } from "../../api";

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalUpdateVisibility, setModalUpdateVisibility] = useState(false);
  const [updatingUser, setUpdatingUser] = useState();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (page = 1) => {
    try {
      const { data } = await mainAPI.getAllUsers(page);
      setUsers((users) =>
        [...users, ...data.data].map((item, index) => {
          return { ...item, key: index };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAddUserModal = () => {
    setModalVisibility((state) => !state);
  };

  const toggleUpdateUserModal = (user) => {
    setUpdatingUser(user);
    setModalUpdateVisibility((state) => !state);
  };

  const createUser = async (queryData) => {
    try {
      await mainAPI.createUser({
        first_name: queryData.first_name,
        last_name: queryData.last_name,
        email: queryData.email,
      });

      const newUsers = [
        ...users,
        {
          first_name: queryData.first_name,
          email: queryData.email,
          last_name: queryData.last_name,
          id: users.length + 1,
          key: users.length + 1,
        },
      ];
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (queryData) => {
    try {
      await mainAPI.deleteUser(queryData.id);
      const newUsers = users.filter((item) => item.id !== queryData.id);
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (queryData, updatingUser) => {
    try {
      await mainAPI.updateUser(queryData);
      const newUsers = users.map((item) => {
        if (item.id === updatingUser.id)
          return { ...queryData, id: item.id, key: item.id - 1 };
        return item;
      });
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const userTableColumns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            <Button onClick={() => toggleUpdateUserModal(record)}>
              Update
            </Button>
            <Button onClick={() => deleteUser(record)}>Delete</Button>
          </>
        );
      },
    },
  ];

  return (
    <CrudComponent
      userTableColumns={userTableColumns}
      users={users}
      modalVisibility={modalVisibility}
      modalUpdateVisibility={modalUpdateVisibility}
      toggleAddUserModal={toggleAddUserModal}
      toggleUpdateUserModal={toggleUpdateUserModal}
      createUser={createUser}
      updateUser={updateUser}
      updatingUser={updatingUser}
    />
  );
};

export default Crud;
