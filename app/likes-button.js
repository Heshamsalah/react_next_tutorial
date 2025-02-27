import { useState } from 'react';

export default function LikesButton() {
    const [likesCount, setLikesCount] = useState(0);

    function handleClick() {
		setLikesCount(likesCount + 1);
	}

    return <button onClick={handleClick}>Like ({likesCount})</button>
}