import React from "react";
import "./ImageCard.scss"

const ImageCard = (props) => {
	console.log(props)
	return (
	<div className="image-card">
		<img src={props.props} loading="lazy"/>
	</div>)
}

export default ImageCard