import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Marquee from './components/Marquee';
import NavBar from './components/navBar'

let pages = {
	"pages": [
		{
			"title": "Industries",
			"slug": "industries",
			"blocks": [
				{
					"type": "marquee",
					"headline": "Industries",
					"subhead": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
					"cta": "Vestibulum id ligula porta felis euismod semper.",
					"background": "slide_one.jpg"
				}
			]
		},
		{
			"title": "Services",
			"slug": "services",
			"blocks": [
				{
					"type": "marquee",
					"headline": "Services",
					"subhead": "Cras mattis consectetur purus sit amet fermentum.",
					"cta": "Donec id elit non mi porta gravida at eget metus.",
					"background": "slide_two.jpg"
				}
			]
		},
		{
			"title": "About Us",
			"slug": "about-us",
			"blocks": [
				{
					"type": "marquee",
					"headline": "Maecenas sed diam eget risus varius blandit sit amet non magna",
					"subhead": "Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.",
					"cta": "Nullam quis risus eget urna mollis ornare vel eu leo.",
					"background": "slide_three.jpg"
				}
			]
		}
	]
}


function App() {
  // usually destructor the array ex: [state, setState] but figured since I won't
  // be setting state again do it this way. 
  const state = useState(pages.pages);

  return (
    <BrowserRouter>
      <NavBar />
      <Route path='/' exact={true}>
        <Marquee info={state[0][0].blocks[0]} />
      </Route>
      <Route path='/services'>
        <Marquee info={state[0][1].blocks[0]} />
      </Route>
      <Route path='/aboutUs'>
        <Marquee info={state[0][2].blocks[0]} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
