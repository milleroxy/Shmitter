import {handleUpdate} from "../utils/functions.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Content = () => {
    const {content,changeContent} = useContext(TwitterContext);

    return (
        <div className={'content'}
            onClick = { () => {
                handleUpdate('Enter content', changeContent);
        }}>
            {content}
        </div>
    );
};

export default Content;
