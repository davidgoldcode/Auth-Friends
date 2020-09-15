import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    
    useEffect(() => {

    }, [friends])

    axiosWithAuth() 
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))

    return (
        <div>
            {friends.map((item) => (
                
                <div id={item.id}>
                    <h1>{item.name}</h1>
                    <h3>{item.age}</h3>
                    <h3>{item.email}</h3>
                </div>
            ))}
            <AddFriend />
        </div>
    );
}

export default FriendsList;