import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Form } from './Form';
import { setUser } from "./../store/slices/userSlice";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            <Form title={'register'} handleClick={handleRegister} />
        </div>
    )

}
export { SignUp }