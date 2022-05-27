import { useEffect, useState } from "react"



const useProfile = user => {
    const [img, setImg] = useState('');
    const [role, setRole] = useState('');
    useEffect(() => {

        const email = user?.email;
        fetch(`http://localhost:5000/myprofile?userEmail=${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setImg(data.img);
                setRole(data.role);

            })



    }, [user])

    return [img, role]
}
export default useProfile;