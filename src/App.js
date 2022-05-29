import React, {Component} from 'react';
import Stocks from './components/stocks';
const numTickers = 5;

class App extends Component {
    render() {
        return (
            <Stocks tickers={this.state.tickers} />
        )
    }

    state = {
        tickers: []
    };
    
    componentDidMount() {
        // fetch data from the api every millesecond
        setInterval(() => {fetch('http://localhost:9000/testAPI')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tickers: data })
            })
            .catch(console.log)}, 1);
        
        // update data in the api every second
        for (let i = 1; i < numTickers + 1; i++){
            setInterval(() => {
                fetch(`http://localhost:9000/testAPI/${i}`, {method: 'PUT'})
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            }, 1000)
        }
    };
}

export default App;