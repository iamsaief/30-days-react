import React from 'react';

function DisplayImages({ images, secTitle }) {
	const imageJSX = images.map((img) => (
		<img src={img} className="col-md-3 " key={img.substring(img.length - 10)} alt={img.substring(img.length - 10)} />
	));
	return (
		<div className="container">
			<h3 className="text-center mb-4">{secTitle}</h3>
			<div className="row">{imageJSX}</div>
		</div>
	);
}

export default DisplayImages;
