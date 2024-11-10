import Stats from "./Stats.jsx";

const Sidebar = ({user, stats, updateAvatar}) => {
    return (
        <div className={'sidebar'}>
            <Stats user={user} stats={stats} updateAvatar={updateAvatar} />
        </div>
    );
};

export default Sidebar;