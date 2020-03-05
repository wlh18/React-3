import React, {Component} from 'react';
import axios from 'axios';

class Lifecycle extends Component {
    // The constructor invokes during the initialization phase of the component lifecycle
    constructor(props){
        super(props);
        this.state = {
            people: []
        }
    }

    //componentDidMount fires after the mounting of the component to the viewport (after the first time render is invoked)
    componentDidMount(){
        axios.get('https://swapi.co/api/people')
        .then(res => this.setState({people: res.data.results}))
        .catch(err => console.log(err))
    }

    //componentDidUpdate invokes during the updating phase, which means when state and props are updated. It doesn't fire after the first time render is invoked, but every subsequent time.
    componentDidUpdate(){
        console.log('componentDidUpdate invoked!')
    }

    //render is required for class components, but is also a lifecycle method. It fires after state and props have been initialized(mounting phase), and then will fire again anytime state or props changes(updating phase).
    render(){
        return(
            <div></div>
        )
    }
}

export default Lifecycle;