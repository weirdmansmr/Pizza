import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
	<ContentLoader
		speed={1.75}
		width={280}
		height={463}
		viewBox="0 0 280 463"
		backgroundColor="#f5f5f5"
		foregroundColor="#fe5f1e"
		{...props}
	>
		<circle cx="140" cy="138" r="120" />
		<rect x="0" y="270" rx="5" ry="5" width="280" height="24" />
		<rect x="0" y="314" rx="10" ry="10" width="280" height="84" />
		<rect x="0" y="426" rx="5" ry="5" width="90" height="27" />
		<rect x="127" y="418" rx="30" ry="30" width="150" height="44" />
	</ContentLoader>
);

export default MyLoader;
