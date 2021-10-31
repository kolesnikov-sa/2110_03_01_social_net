import {NavLink} from "react-router-dom";

export const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}