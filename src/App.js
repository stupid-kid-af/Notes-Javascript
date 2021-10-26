
import SignIn from './SignIn/signIn'
import home from './home'
import{
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"
import { firebase } from './firebase';
import { useState } from 'react';
import "firebase/auth";


const App = () => {
const [isUserSignedIn, setIsUserSignedIn] = useState(true);
firebase.auth().onAuthStateChanged((user) => {
	if(user){
		return setIsUserSignedIn(true);
	}

	setIsUserSignedIn(false);

})
if (isUserSignedIn === true) {
	return(
		<Router>
			<Switch>
				<Route path="/" component={home}/>
			</Switch>
		</Router>
	);
	}	else {
		return (
			
				<Router>
					<Switch>
						<Route path="/" component={SignIn}/>
					</Switch>
				</Router>
				
		);
	}
};

export default App;
