import React from "react";
import Counter from "./Count";

const Home = () => {
	return (
		<div className="base-count mt-3 position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center gap-4">
			<Counter number={0}/>
		</div>
	);
};

export default Home;