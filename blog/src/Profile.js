import React from 'react'

class Profile extends React.Component {
    constructor() {
        super()
        this.state = { name: 'Hyeon Yu Jin', age: 25 }
    }

    changeAge = () => {
        this.setState({ age: 26 })
    }

    render() {
        return (
            <div>
                <h3>This is Profile</h3>
                <p>My name is { this.state.name }.</p>
                <p>My age is { this.state.age } years old.</p>

                <button onClick={ this.changeAge }>Button</button>
            </div>
        )
    }
}

export default Profile