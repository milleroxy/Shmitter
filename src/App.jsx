import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useEffect, useState} from "react";
import {TwitterContext} from "./utils/context.js";
import {updateItem} from "./utils/functions.jsx";


function App() {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        try {
            return savedUser ? JSON.parse(savedUser) : {
                name: 'Monster',
                avatar: 'https://gravatar.com/avatar/000?d=monsterid'
            };
        } catch (e) {
            console.error('Error parsing saved user data:', e);
            return {
                name: 'Monster',
                avatar: 'https://gravatar.com/avatar/000?d=monsterid'
            };
        }
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    });

    const [content, setContent] = useState(() => {
        const savedContent = localStorage.getItem('content');
        return savedContent ? savedContent : 'Content here';
    });


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('content', content);
    }, [user, content]);


    const changeName = (newName) => {
        updateItem(setUser, 'name', newName);
    };

    const changeAvatar = (url) => {
        updateItem(setUser, 'avatar', url);
    };

    const changeContent = (newContent) => {
        setContent(newContent);
    };

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, //user: user,
                stats, //stats: stats,
                content,
                changeAvatar,
                changeName,
                changeContent,
                setStats
            }}>
            <Navigation />
            <Body />
            </TwitterContext.Provider>
        </div>
    )
}

export default App
