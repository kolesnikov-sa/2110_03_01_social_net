import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";

const Dialogs = (props: any) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yo!'},
        {id: 3, message: 'Hello!'},
        {id: 4, message: 'Bye!'},
        {id: 5, message: 'Welcome!'},
    ]

    let messagesElements = messagesData.map(message => <Messages message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.DialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;