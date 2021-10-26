import React from "react";
import firebase from "firebase";

const SignIn = ()=> {

    const SignInWithFirebase = ()=>{
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    return(
        <button onClick={SignInWithFirebase}> Sign With Google</button>       
    )
}

export default SignIn