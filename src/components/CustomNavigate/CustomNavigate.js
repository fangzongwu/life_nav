import React, {Component} from "react";

const NavigationDecorator = NavigateComponent => class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		}
	}
	componentDidMount() {
		this.setState({
			isActive: true,
		})
	}
	render() {
		return (
			<NavigateComponent {...this.props} {...this.state} />
		);
	}
}

export default NavigationDecorator;