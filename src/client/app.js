import react, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Welcome to React Boilerplate App</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
