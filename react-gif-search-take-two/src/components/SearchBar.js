import React from 'react'; 

class SearchBar extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {term: ''}
	}
	render() {
		return (
			<div className="search"> 
				<input onChange={event => this.onInputChange(event.target.value)} />
			</div>
		); 
	}
}

export default SearchBar; 