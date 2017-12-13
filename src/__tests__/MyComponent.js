import MyComponent from '../MyComponent';

describe('MyComponent', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('renders', () => {
		component = new MyComponent();

		expect(component).toMatchSnapshot();
	});
});
