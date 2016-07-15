import React from 'react';
// take data prepped on a different component page
import VideoListItem from './video_list_item';

//note: below use of className is JSX sub for HTML class, to avoid naming conflicts w React
//many are Bootstrap items
const VideoList = (props) => {
	//below creates videoItems array of new JSX/HTML list items from mapping props.videos
	//thru VideoListItem function
	const videoItems = props.videos.map((video) => {
		//running the videos items through VideoListItem JSX function
		//uses YT etag property to create unique key for each list item
		return <VideoListItem key={video.etag} video={video} />
	});

	//below const "videoItems array" of JSX/HTML is interpreted by React into HTML indiv list items
	return (
		<ul className="col-md-4 list-group">

			{videoItems}
		</ul>
	);
};

export default VideoList;