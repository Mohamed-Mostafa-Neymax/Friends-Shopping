import styles from './Button.module.scss';

export default function Button(props) {
    return <button type={props.type} className={styles.customButton} onClick={props.onClick}>{props.children}</button>;
}