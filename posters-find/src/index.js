import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import './App.css';

class Input extends React.Component{
	render() {
		return (
			<input className='test-input' 
			onChange={e => this.props.onChangeInput(e.target.value)}
			placeholder='Enter a movie name'/>
			);
	}
};


class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			link: null,
			itemsImage: []
		}
		this.onChangeInput=this.onChangeInput.bind(this);
	}

	
	onChangeInput(value) {
		this.setState({link: value}, function() {
			axios.get(`http://www.omdbapi.com/?s=${this.state.link}`)
			.then(results => {
				console.log(results.data);
				if(results.data.Error == undefined){
					this.setState({
						itemsImage: results.data.Search

					})
				}
				
			})
		})
	}

	render(){

		return (
			<div className="wrapper">
			<div className="left-side">
			<h1>Find posters of your favorite series or movie</h1>
			<Input onChangeInput={this.onChangeInput} />
			</div>

			<div className='movies'>

			{this.state.itemsImage.map(function(item){
				if((item.Poster != "N/A") && ( item.Poster.indexOf('http://ia.media-imdb.com') )) {
					return <img src={item.Poster} />
				}
				

			})}

			</div>
			</div>
			
			)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
	);
