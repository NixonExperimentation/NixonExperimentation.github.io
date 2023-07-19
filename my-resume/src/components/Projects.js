import React from "react";

export function Projects() { 
    const projectList = [{id: 1,name: "F1 racer"},{id: 2,name: "Autonomous Rover"}];
    console.log(projectList);
	return (
		<p>{projectList.name}</p>
	);
}