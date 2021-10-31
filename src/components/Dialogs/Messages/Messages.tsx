import s from "../Dialogs.module.css";

export const Messages = (props: any) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}