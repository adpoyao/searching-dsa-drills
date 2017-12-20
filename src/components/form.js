import React from 'react';
import Result from './result';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataArray: [],
			sortedArray: [],
			counter: null,
			index: null,
		};
    }
    
    render() {
        return (
            <div className="form-container">
                <form>
                    <input type="text" name="search-string" placeholder="input search query"></input>
                    <button type="button" onClick={e => console.log('linear clicked')}>Linear</button>
                    <button type="button" onClick={e => console.log('binary clicked')}>Binary</button>
                </form>
                <Result counter={this.state.counter} index={this.state.index} />
            </div>
        )
    }
}