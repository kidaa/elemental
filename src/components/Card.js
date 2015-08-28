var React = require('react/addons');
import E from '../constants';

module.exports = React.createClass({
	displayName: 'Card',
	propTypes: {
		children: React.PropTypes.node.isRequired,
	},
	render() {
		let style = {
			backgroundColor: 'white',
			borderRadius: E.borderRadius.sm,
			boxShadow: '0 2px 3px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(0,0,0,0.1)',
			marginBottom: E.spacing.md,
			padding: E.spacing.md,
		};
		return <div {...this.props} style={Object.assign(style, this.props.style)} />;
	}
});
