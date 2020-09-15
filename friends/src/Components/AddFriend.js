import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class AddFriend extends React.Component {

    state = {
        info: {
            id: '',
            name: '',
            age: '',
            email: '',
        }
    }

    changeHandler = evt => {
        this.setState({
            info: {
                ...this.state.info,
                id: new Date(), 
                [evt.target.name]: evt.target.value,
            }
        })
    }

    onSubmit = evt => {
        evt.preventDefault();
        axiosWithAuth()
            .post('/api/friends', this.state.info)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                    type='text'
                    name='name'
                    placeholder='Your name'
                    value={this.state.info.name}
                    onChange={this.changeHandler}
                    />
                    <input 
                    type='number'
                    name='age'
                    placeholder='Your age'
                    value={this.state.info.age}
                    onChange={this.changeHandler}
                    />
                    <input 
                    type='text'
                    name='email'
                    placeholder='Your email'
                    value={this.state.info.email}
                    onChange={this.changeHandler}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddFriend;