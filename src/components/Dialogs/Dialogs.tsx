import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogsItem = (props: any) => {
    let path = "/dialog/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props: any) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.DialogsItems}>
                <DialogsItem name="Dimych" id="1" />
                <DialogsItem name="Andrey" id="2" />
                <DialogsItem name="Sveta" id="3" />
                <DialogsItem name="Sasha" id="4" />
                <DialogsItem name="Viktor" id="5" />
                <DialogsItem name="Valera" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Yo!"/>
                <Message message="Hello!"/>
            </div>
        </div>
    );
}

export default Dialogs;