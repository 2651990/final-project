import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonItem,
    IonPage,
} from '@ionic/react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useHistory } from 'react-router-dom';
import TopTitleBar from '../../components/TopTitleBar';
import './register.css'
import { eye, eyeOff } from 'ionicons/icons';

const Register: React.FC = () => {
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const history = useHistory();

    const goToPage = (path: string) => {
        history.push(path);
    };

    // const submitBtn = () => {
    //     goToPage('/');
    // };

    const registerMutation = useMutation({
        mutationFn: async (form: { username: string; password: string; email: string }) => {
            const { username, password, email } = form;
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email }),
            });
            if (!res.ok) {
                const errorResponse = await res.json();
                throw new Error('Cannot create User'); // Throw an error with the error message from the server
            }
            const data = await res.json();
            return data;
        },
        onError: (error: Error) => {
            alert('User already exists'); // Display the error message in an alert
        },
        onSuccess: (data: any) => {
            // console.log(data);
            alert('New account has been created successfully');
            history.push('/');
        },
    });

    const submitData = () => {
        if (!username || !password || !email) {
            alert('Please fill in all the fields');
            return;
        }

        const formData = {
            username: username,
            password: password,
            email: email,
        };
        registerMutation.mutate(formData);
        console.log("User information is created");
    };

    const backBtn = () => {
        history.push('/')
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    // console.log(123);
    return (
        <IonPage>
            <IonContent>
                <div className="registerContainer">
                    <IonCardHeader>
                        <IonCardTitle className="registerText">
                            <div className="registerTextMargin">Register</div>
                        </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonItem>
                            <IonInput
                                label="Username"
                                value={username}
                                onInput={(e: any) => {
                                    setUserName(e.target.value);
                                }}
                                labelPlacement="floating"
                                placeholder="Enter text"
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput
                                type={showPassword ? 'text' : 'password'} // Toggle between "text" and "password"
                                label="Password"
                                value={password}
                                onInput={(e: any) => setPassword(e.target.value)}
                                labelPlacement="floating"
                                placeholder="Enter text"
                            ></IonInput>
                            <IonButton fill="clear" slot="end" onClick={togglePasswordVisibility}>
                                <IonIcon
                                    icon={showPassword ? eyeOff : eye}
                                ></IonIcon>{/* Toggle between eye and eye-off icons */}
                            </IonButton>
                        </IonItem>

                        <IonItem>
                            <IonInput
                                label="Email"
                                value={email}
                                onInput={(e: any) => setEmail(e.target.value)}
                                labelPlacement="floating"
                                placeholder="Enter text"
                            ></IonInput>
                        </IonItem>
                        <div className="buttonContainer">
                        <IonButton color="success" onClick={submitData}>
                                Submit
                            </IonButton>
                            <IonButton color="success" onClick={backBtn}>
                                Back
                            </IonButton>
                        </div>
                    </IonCardContent>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Register;