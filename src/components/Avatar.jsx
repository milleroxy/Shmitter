import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import {handleUpdate} from "../utils/functions.jsx";

const Avatar = ({size}) => {
    const {user, changeAvatar, changeName} = useContext(TwitterContext);


    return (
        <img

        //     onContextMenu = { () => {
        //          const newName = prompt('Enter new name');
        //          changeName(newName);
        // }}
            onClick= { () => {
                handleUpdate('Enter new avatar URL', changeAvatar);
            }}
            onContextMenu={ () => {
                handleUpdate('Enter new name', changeName)
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            style={{cursor: 'pointer'}}
        />
    );
};

export default Avatar;