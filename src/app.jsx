import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useEffect, useState} from "react";


function App() {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) :
            {
            name: 'Monster',
            avatar: 'https://gravatar.com/avatar/000?d=monsterid'
            };
    });
    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const updateAvatar = (newImage) => {
        if(newImage && newImage.trim() !== '') {
            setUser({
                ...user,
                avatar: newImage
            });
        }
        else{
            alert ("Enter correct URL image");
        }
    }

    return (
        <div className={'app'}>
            <Navigation user={user} updateAvatar={updateAvatar}/>
            <Body user={user} stats={stats}/>
        </div>
    )
}

export default App
