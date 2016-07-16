import React from 'react';


//instead of basic (props) arg followed by const video = props.video;
//ES6 allows use of {video} to target only video property of props
//and also the other property passedthru, a callback function onVideoSelect
//instead of const onVideoSelect = props.onVideoSelect
const VideoListItem = ({video, onVideoSelect}) => {
	console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;

	return ( //onClick below means any click on list item delivers video thru onVideoSelect function to index
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;