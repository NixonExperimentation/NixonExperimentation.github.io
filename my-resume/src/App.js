import { Container, Grid, Box, AppBar, Typography, Card, CardContent, CardMedia, CardHeader, List, Stack, IconButton, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import { Nav } from './components/Nav';
import { Jobs } from './components/Jobs';
import { Projects } from './components/Projects';
import profile from './profile.png'
import { useState } from 'react';

export default function App(){
	const [anchor,setAnchor]= useState("null");
	const [direction,setDirection]= useState("row")
	let open = Boolean(anchor);
	const handleClick =(event)=>{
		setAnchor(event.currentTarget);
		setDirection("column");
	};
	const handleClose = ()=>{
		setAnchor(null);
		setDirection("row");
	};

	return (
		<Container maxWidth="lg">
			<Grid container spacing={4} > lg
				<Grid item xs={12} sm={12} xl={12} md={12}>
					<AppBar position='static' color=''>
						<Container sx={{flexGrow:1 }}>
							<Stack direction="row" justifyContent="space-between">
								<Box padding={1}>
									<Typography variant='h4' textAlign='center'>
										Nixon Nelson
									</Typography>
								</Box>
								<Box sx={{display:{xs:'none', md:'flex'}}}>
									<Nav direction={direction}/>
								</Box>
								<IconButton onClick={handleClick} sx={{display:{md:'none', xs:'flex'}}}>
											<MenuIcon/>
											<Popover open={open} onClose={handleClose} anchorEl={anchor} 
													anchorOrigin={{vertical: 'bottom',horizontal: 'left'}} 
													sx={{display:{md:'none',xs:'flex'}}}>
												<Nav direction={direction}/>
											</Popover>
								</IconButton>
							</Stack>
						</Container>
					</AppBar>
				</Grid>
				<Grid item xs={12} sm={12} xl={12} md={12}>
					<Section />
				</Grid>
				<Grid item xs={12} sm={12} xl={12} md={12}>
					<Footer />
				</Grid>
			</Grid>
		</Container>		
		// <Nav/>
	);
}



function Section(){
	return (
			<section>
				<Grid container columnSpacing={2} rowSpacing={4} justifyContent={'space-around'} >
					<Grid item xs={12} sm={12} md={12} xl={12}>
						<Card  sx={{ display: 'flex' }}>
							<CardMedia component='img' sx={{width:128}} image={profile}/>
							<CardContent>
									<Typography >
									Curious tinkerer with a particular interest in embedded devices and Linux.<br/> 
									Loves creating digital art and is currently working on projects like autonomous rover and “F1 racer” a pixel art style racer game being built using C#.<br/> Has a habit of
									making projects and improving or adding to them, learning new things and experimenting with available knowledge, and
									takes an interest in aesthetics and function.<br/> Has a keen eye towards details and receives satisfaction in structure.<br/>
									</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={12} md={12} >
						<Projects />
					</Grid>
					<Grid item xs={12} sm={12} md={12} >
						<Card elevation={2}>
							<CardContent>
								<Typography>
								Programming languages: Proficient - C, PowerShell, Java SE, Html5, JS, CSS3; Intermediate - C++, Processing, C#, bash.<br/>
								Frameworks: React JS, Java Fx.<br/>
								Technologies: Docker, LXD, Linux - Debian, Arch.<br/>
								Software: Unity, Adobe Illustrator, Autodesk 360, Krita, Gimp<br/>
								Embedded systems: MSP430, Esp8266, Atmega328p.<br/>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={12} md={12} >
						<Jobs />
					</Grid>
					<Grid item xs={12} sm={12} md={12} >
						<Card >
							<CardContent>
								<Typography>
								What i am Currently learning and reading.
								</Typography>
							</CardContent>

						</Card>
					</Grid>
				</Grid>
			</section>
	);
}
function  Footer(){
	return (
			<footer>
				<Box>
					<p>This Project is made using React</p>
				</Box>
			</footer>

	);
}