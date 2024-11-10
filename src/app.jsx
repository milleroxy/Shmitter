import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useEffect, useState} from "react";
import {TwitterContext} from "./utils/context.js";


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
                name: user.name,
                avatar: newImage
            });
        }
        else{
            alert ("Enter correct URL image");
        }
    }
    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, //user: user,
                stats, //stats: stats,
                updateAvatar
            }}>
            <Navigation />
            <Body />
            </TwitterContext.Provider>
        </div>
    )
}

export default App
