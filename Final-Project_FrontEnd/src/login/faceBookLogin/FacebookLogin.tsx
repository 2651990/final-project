import { IonButton, IonIcon } from '@ionic/react';
import './FacebookLogin.css'
import { logoFacebook } from 'ionicons/icons';


export default function FacebookLogin() {
    const onFacebookLogin = (e: any) => {
        e.preventDefault();
        // console.log(import.meta.env.VITE_FACEBOOK_APP_ID)
        const authURL = 'https://www.facebook.com/dialog/oauth';
        const search = new URLSearchParams();
        search.set('client_id', import.meta.env.VITE_FACEBOOK_APP_ID);
        search.set('redirect_uri', `${window.location.origin}/facebook-callback`);
        search.set('response_type', 'code');
        search.set('state', '');
        search.set('scope', 'email,public_profile');
        window.location.href = `${authURL}?${search.toString()}`;
    };

    return (
        <div>
            <IonButton className='facebookLoginBtn' color='light' onClick={onFacebookLogin}>
                <IonIcon color='primary' icon={logoFacebook}></IonIcon>
                <div className='signInText'>Sign in with Facebook</div>
            </IonButton>
        </div >
    );
}
