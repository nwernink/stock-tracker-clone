import React from 'react';
import './stocks.css';

const Stocks = ({tickers}) => {
    return (
        <div class = "app">
            <div class="header">
                <img src='http://howardlindzon.com/wp-content/uploads/2016/01/robinhood-logo-green.png' width="450px" alt="robinhood logo" />
            </div>

            {tickers.map((ticker) => (
                <div class="ticker-body">
                    <div class="ticker-image">
                        <img src={ticker.image} height='50' alt="company logo" />
                    </div>
                    <div class="ticker-name">
                        <h5 class="card-title">{ticker.name}</h5>
                    </div>
                    <div class="ticker-price">
                        <h6 class="card-subtitle mb-2 text-muted">${ticker.price}</h6>
                    </div>
                </div>
            ))}

        </div>
    )
};

export default Stocks;