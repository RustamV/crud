import React from 'react';
import AxiosService from "../../axios/axios-service";

export default function Delete() {
    const deleteUser = () => {
        AxiosService.delete()
            .then(response => {
                console.log(response);
                alert(`User deleted`);
            })
            .catch(e => {
                console.log(e);
            });
    }
    

    return (
        <div className="user">
            <h2 className="user__title">Delete user</h2>
            <button onClick={deleteUser}>Delete user</button>
        </div>
    );
}