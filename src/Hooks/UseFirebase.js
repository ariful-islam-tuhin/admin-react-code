import initializeFirebase from "../Component/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import AllServicesFetch from "../Component/AllServicesFetc/AllServicesFetch";




// this is initialize firebase app
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState();
    const [admin, setAdmin] = useState(false);  
    const auth = getAuth();
    const [AllService] = AllServicesFetch();


    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();



    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError("");
                const destination = location?.state?.from || "/";
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name after creation register
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => { })
                    .catch((error) => { });
                history.replace("/");

            })
            .catch((error) => {

                const setAuthError = error.message;

            })
            .finally(() => setIsLoading(false));


    }



    // logout user
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // user state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);
    
    useEffect(()=>{
        fetch(`https://glacial-ocean-90361.herokuapp.com/users/${user?.email}`)
        .then((res)=>res.json())
        .then((data)=>setAdmin(data))
    },[user?.email])

    // login system with email password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                const setAuthError = error.message;
            })
            .finally(() => setIsLoading(false));
    }

  


    // save user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://glacial-ocean-90361.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };





    return {
        user,
        admin,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError,
        signInWithGoogle,
        AllService
    }

}
export default useFirebase; 