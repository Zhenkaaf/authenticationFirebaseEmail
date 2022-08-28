import { useDispatch } from "react-redux";
import { Form } from './Form';
import { setUser } from "./../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            navigate('/');
        })
        .catch(console.error)
    }
    return (
        <div>
            <Form title={'sign in'} handleClick={handleLogin} />
        </div>
    )

}

export { Login }










/* signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); */