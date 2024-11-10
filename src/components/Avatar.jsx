import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, updateAvatar} = useContext(TwitterContext);
    const avatarChange = () => {
        const newAvatar = prompt("Enter new URL image", user.avatar);
        if (newAvatar) {
            updateAvatar(newAvatar);
        }
    };
    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            onClick={avatarChange}
            style={{cursor: 'pointer'}}

        />
    );
};

export default Avatar;