import Component, {Config} from 'metal-jsx';

class MyComponent extends Component {
	render() {
		return <div>{name}</div>;
	}
}

MyComponent.PROPS = {
	name: Config.string().value('MyComponent')
};

MyComponent.STATE = {};

export default MyComponent;
