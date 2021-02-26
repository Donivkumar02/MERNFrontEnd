import React from 'react'; 
import UserList from '../components/UserList';

const Users=()=>{
    const USERS= [
        {
            id:'u1', 
            name:'max',
            image:'https://www.filepicker.io/api/file/TBHtUzkDTCykklB8apdG',
            places:3
        }
    ]
    return <UserList items={USERS}/>;
};


export default Users;