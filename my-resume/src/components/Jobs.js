import React from "react";
import {  Fab,  Tab, Tabs } from "@mui/material";

export function Jobs() {
    const jobList = [{id: 1,name: "Rapido"},{id: 2,name: "nearbuy.com"}];
	const jobs= jobList.map((job) => {
		return (
			<Tab disableRipple label={
			<Fab variant="extended">
				{job.name}
			</Fab>}
			/>
		)
	});
	return (
		<Tabs variant="scrollable">
			{jobs}
		</Tabs>
	);
}
