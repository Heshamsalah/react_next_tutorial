import { useState } from 'react';

// Create a Header component.
function Header({ title }) {
	return (<h1>{title ? title : 'Default Title'}</h1>);
}

// HomaPage component.
function HomePage() {
	const [likesCount, setLikesCount] = useState(0);
	const peakyNames = [ 'Tommy Shelby', 'Arthur Shelby', 'John Shelby', 'Ada Shelby', 'Finn Shelby', 'Polly Gray' ];

	function handleClick() {
		setLikesCount(likesCount + 1);
	}

	return (
		<div>
			<Header title="Peaky Blinders"/>
			<ul>
				{peakyNames.map((name) => (<li key={name}>{name}</li>))}
			</ul>
			<button onClick={handleClick}>Like ({likesCount})</button>
		</div>
	);
}
