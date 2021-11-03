import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";

type DialogsDataType = {
    id: number,
    name: string
}

type MessagesDataType = {
    id: number,
    message: string
}

type DialogsType = {
    state: {
        dialogsData: Array<DialogsDataType>
        messagesData: Array<MessagesDataType>
    }
}

const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messagesData.map(message => <Messages message={message.message}/>)

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