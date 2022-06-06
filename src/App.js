import './App.css';

function App() {
	const classes = {
		bg: 'bg-gray-700 h-[100vh] flex flex-col',
		title: 'text-4xl text-red-500 m-auto',
	};

	return (
		<div className={classes.bg}>
			<p className={classes.title}>Coming soon! Project Timer App!</p>
		</div>
	);
}

export default App;
