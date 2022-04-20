import jwtDecode from 'jwt-decode';
import { authUserSignin, handleLogout } from '../redux/actions/authAction';
import setAuthToken from './setAuthToken';
const checkTokenAuth = (store) => {

    let jwtToken = localStorage.getItem('jwtToken');
    let decoded;

    if (jwtToken) {
        setAuthToken(jwtToken);
        decoded = jwtDecode(jwtToken);
        store.dispatch(authUserSignin(jwtToken));
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            store.dispatch(handleLogout());
            window.location.href = '/sign-in';
            //logout
            //redirect
        }
    }
    return;
}

export default checkTokenAuth;
