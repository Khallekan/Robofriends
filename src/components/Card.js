import React from 'react';
// import './card.css';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div >
				<img alt='Robots goes here' src={`https://robohash.org/${id}?200x200`}/>
			</div>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;