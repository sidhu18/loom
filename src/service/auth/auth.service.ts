import Auth0 from "react-native-auth0";
import Constants from "../../constants/Constants";

const auth0 = new Auth0({
    domain: Constants.OAUTH_DOMAIN,
    clientId: Constants.OAUTH_CLIENT_ID
});

export const getLoggedInUserInfo = (accessToken: string) => {
    const userInfo = auth0.users(accessToken);
    return userInfo;
}

export const authorize = async () => {
    try {
        const response = await auth0.webAuth.authorize();
        return response.accessToken;
    } catch (err) {
        throw Error('Authentication error');
    }
}

export const logout = async () => {
    try {
        await auth0.webAuth.clearSession({});
    } catch (err) {
        throw Error('Something went wrong while logging out');
    }
}
