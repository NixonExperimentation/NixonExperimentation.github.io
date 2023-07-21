import { Fab, Tab, Tabs } from "@mui/material";
import React from "react";

export function Projects() { 
    const projectList = [{id: 1,name: "F1 racer"},{id: 2,name: "Autonomous Rover"},{id:3,name:"Pixi colorbook"}];
	const projects = projectList.map((project)=>{
		return (
		<Tab disableRipple label={
		<Fab variant="extended">
			{project.name}
		</Fab>} 
		value={project.id}
		/>
		);
	});
	
	return (
		<Tabs variant="scrollable">
			{projects}
		</Tabs>
	);
}