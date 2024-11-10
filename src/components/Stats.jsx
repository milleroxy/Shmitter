import Avatar from "./Avatar.jsx";

const Stats = ({user, stats, updateAvatar}) => {
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar user={user} updateAvatar={updateAvatar} />
                {user.name}
            </div>
            <div className={'stats'}>
                <div>
                    Followers: {stats.followers}
                </div>
                <div>
                    Following: {stats.following}.
                </div>
            </div>
        </div>
    );
};

export default Stats;