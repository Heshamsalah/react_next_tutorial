'use client';

import LikesButton from "./likes-button";

// Create a Header component.
function Header({ title }) {
	return (<h1>{title ? title : 'Default Title'}</h1>);
}

// HomaPage component.
export default function HomePage() {
	const peakyNames = [
		'Tommy Shelby',
		'Arthur Shelby',
		'John Shelby',
		'Ada Shelby',
		'Finn Shelby',
		'Polly Gray'
	];

	return (
		<div>
			<Header title="Peaky Blinders"/>
			<ul>
				{peakyNames.map((name) => (<li key={name}>{name}</li>))}
			</ul>
			<LikesButton />
		</div>
	);
}
