import React, { Component } from 'react';
import CustomNavigate from "../../components/CustomNavigate/CustomNavigate";
import './HomePage.scss';

@CustomNavigate
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	nav: "12"
    }
  }
  // componentWillReceiveProps(nextProps) {
  // 	const {isActive} = nextProps;
  // 	console.log(nextProps);
  	
  // }
  handleClick() {
  	this.setState({
  		nav: "34"
  	})
  }
  render() {
  	const {isActive} = this.props;
  	console.log(isActive);
    return (
    	<div>
    		<span>{this.state.nav}</span>
    		<button onClick={this.handleClick.bind(this)}>点击更新</button>
    	</div>
	);
  }
}

HomePage.propTypes = {
};

export default HomePage;
