import Avatar from "./Avatar.jsx";

const Navigation = ({user, updateAvatar}) => {
    return (
        <div className={'nav'}>
            <Avatar
                user={user}
                updateAvatar={updateAvatar}
                size={'small'}
            />
        </div>
    );
};

export default Navigation;