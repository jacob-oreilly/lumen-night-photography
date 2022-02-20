import React from "react";
import ImageCard from "../imageCard/ImageCard";
import "./ImageGrid.scss";
function importAll(folder) {
	let images = {};
	console.log(folder)
	folder.keys().map((item, index) => { images[item.replace('./', '')] = folder(item); });
	return images;
}

const images = importAll(require.context('../../../static/images/Seattle-2022', false, /\.(png|jpe?g|svg)$/));
console.log(images)
const ImageGrid = () => {
	return (
	<div className="image-grid">
		<ul>
		{
			Object.keys(images).map((image, i) => {
				return(
				<li><ImageCard props={images[image]}/></li>)
			})
		}
		</ul>
	</div>)
}

export default ImageGrid