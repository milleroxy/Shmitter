import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

const Body = ({user, stats, updateAvatar}) => {
    return (
        <div className={'body'}>
            <Sidebar user={user} stats={stats} updateAvatar={updateAvatar} />
            <Content/>
        </div>
    );
};

export default Body;