import { useIonViewWillEnter } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';

export default function UserProfile() {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['profile/findUser'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_SERVER}/profile/user`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                // console.log(data);
                return data; // Return the data to be used by React Query
            } else {
                console.log("Failed to fetch");
                throw new Error("Error"); // Throw an error to be handled by React Query
            }
        },
        enabled: false
    });

    useIonViewWillEnter(() => {
        refetch()
    }) 
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>No data exist</div>;
    }

    if (data) {
        const { username, email } = data; // Assuming the response data has `username` and `email` properties

        return (
            <div className='userWrapper'>
                <div style={{fontWeight:"bold"}}>Name : {username}</div>
                <div style={{fontWeight:"bold"}}>Email : {email}</div>
            </div>
        );
    }

    return data;
}