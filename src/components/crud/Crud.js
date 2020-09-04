import React from 'react';

import { Tabs } from 'antd';

import User from '../user/User';
import Users from '../users/Users';
import UserNotFound from '../usernotfound/UserNotFound';
import Create from '../create/Create';
import Update from '../update/Update';
import Delete from '../delete/Delete';

const { TabPane } = Tabs;

export default function Crud() {
    return (
        <div className="crud">
            <Tabs type="card" className="crud__tabs">
                <TabPane tab="User" key="1" className="crud__tab-panel">
                   <User />
                </TabPane>
                <TabPane tab="Users" key="2" className="crud__tab-panel">
                    <Users />
                </TabPane>
                <TabPane tab="User Not Found" key="3" className="crud__tab-panel">
                    <UserNotFound />
                </TabPane>
                <TabPane tab="Create" key="4" className="crud__tab-panel">
                    <Create />  
                </TabPane>
                <TabPane tab="Update" key="5" className="crud__tab-panel">
                    <Update />
                </TabPane>
                <TabPane tab="Delete" key="6" className="crud__tab-panel">
                    <Delete />
                </TabPane>
            </Tabs>
        </div>
    );
}
