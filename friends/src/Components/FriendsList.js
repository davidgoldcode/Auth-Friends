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
                
                <div className='friends-list' id={item.id}>
                    <h3>{item.name}</h3>
                    <h3>{item.age}</h3>
                    <h3>{item.email}</h3>
                </div>
            ))}
            <AddFriend setFriends={setFriends}/>
        </div>
    );
}

export default FriendsList;