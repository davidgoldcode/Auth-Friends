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
                <form onSubmit={null}>
                    <input 
                    type='text'
                    name='name'
                    placeholder='Your name'
                    value={this.state.info.name}
                    onChange={this.changeHandler}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddFriend;