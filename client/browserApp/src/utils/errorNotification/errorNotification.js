import styles from './errorNotification.module.css';


export const errorNotification = (ref) => {
    if(!ref.current.classList.contains(styles.error)){

        ref.current.classList.add(styles.error);

        setTimeout(() => {
            ref.current.classList.remove(styles.error);
        }, 400);

    }   
}