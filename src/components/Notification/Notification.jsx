import css from "./Notification.module.css";

const Notification = ({ messege }) => <p className={css.messege}>{messege}</p>;

export default Notification;