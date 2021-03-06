import React, { Component } from 'react';
import { Button, SoundsProvider, ThemeProvider, createSounds, createTheme, withSounds } from 'arwes';

const theme = createTheme();

const ButtonSounds = {
	shared  : { volume:1, },
	players : {
		deploy:{
			sound : { src : [ 'static/sound/deploy.mp3' ]}
		},
		expand:{
			sound : { src : [ 'static/sound/expand.mp3' ]}
		},
		logo:{
			sound : { src : ['static/sound/logo.mp3' ]}
		},
	}
};

const buttonSounds = createSounds( ButtonSounds );

const SubmitButton = withSounds()( props =>(
	<ThemeProvider theme = { theme }>
	    <Button
		type    = { "submit" }
		onClick = { ()=>{ props.sounds.expand.play() }}
		{ ...props }
	    >Submit</Button>
	</ThemeProvider>
));

const menuOnClick = ( menu, sound )=>{
	menu.toggleMenu();
	sound.play();
}

const MenuButton = withSounds()( props=>(
	<ThemeProvider theme = { theme }>
	    <Button
		onClick = { ()=>{
		    menuOnClick( props.menu, props.sounds.deploy )
		}}
	    >Menu</Button>
	</ThemeProvider>
));

class Buttons extends Component
{
	render()
	{
		const children = this.props.children;
		return(
			<SoundsProvider 
			    sounds = { buttonSounds }
			    theme  = { theme }
			>
				{ children }
			</SoundsProvider>
		);
	}
}

export { Buttons, MenuButton, SubmitButton };
