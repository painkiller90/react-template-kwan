import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

if (process.env.NODE_ENV !== 'production') {
    const dataTable = [
        {
            id: 1,
            values: ['1', 'Bill', 'Gates']
        },
        {
            id: 2,
            values: ['2', 'Jeff', 'Bezos']
        },
        {
            id: 3,
            values: ['3', 'Mark', 'Zuckerberg']
        }
    ];
    ReactDOM.render(
        <App data={dataTable} />,
        document.getElementById('root')
    );
}

export default App;



