import React from "react";

export function Jobs({jobProp}) {
    const jobList = [{id: 1,name: "Rapido"},{id: 1,name: "nearbuy.com"}];
 
	return (
		<li>{jobList.name}</li>
	);
}
