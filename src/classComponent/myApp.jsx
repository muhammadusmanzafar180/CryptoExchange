import React from 'react';
import Header from './header';

class MyApp extends React.Component {
    //state is defined in constructor in class components
    //state has data that is mutable (changeable)
    //props has data that is immutable (not-changeable)

    constructor() {
        console.log("one");
        super();
        this.state = {
            title: "Initial Title"
        }
    }

    componentDidMount() {
        console.log("two");
        setTimeout(() => {
            this.setState({ title: 'Title changed' })
        }, 3000)
    }
    render() {
        return (
            <>
                <Header title={this.state.title} />
                <h1>This is main App</h1>
            </>
        );
    }
}

export default MyApp;