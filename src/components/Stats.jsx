import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, setStats} = useContext(TwitterContext)

       const RightClickFollowers = (e) => {
            setStats(prevStats => ({
                ...prevStats,
                followers: prevStats.followers > 1000 ?
                    prevStats.followers + 10 : prevStats.followers + 1,
        }));
    };

    const LeftClickFollowers = () => {
        setStats(prevStats => ({
            ...prevStats,
            followers: Math.max(0, prevStats.followers - 1)
        }));

    };
    const RightClickFollowing = (e) => {
        setStats(prevStats => ({
            ...prevStats,
            following: prevStats.following > 1000 ?
                prevStats.following + 10 : prevStats.following + 1,
        }));
    };

    const LeftClickFollowing = () => {
        setStats(prevStats => ({
            ...prevStats,
            following: Math.max(0, prevStats.following - 1)
        }));
    };

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className={'stats'} style={{cursor: 'pointer'}}>
                <div
                    onClick={LeftClickFollowers}
                    onContextMenu={RightClickFollowers}
                >
                    Followers: {stats.followers}
                </div>
                <div
                    onClick={LeftClickFollowing}
                    onContextMenu={RightClickFollowing}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;