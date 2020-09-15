import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

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
                <h1>{item.name}</h1>
            ))}
        </div>
    );
}

export default FriendsList;