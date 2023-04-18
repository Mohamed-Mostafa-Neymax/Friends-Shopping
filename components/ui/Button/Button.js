import styles from './Button.module.scss';

export default function Button(props) {
    return <button 
        type={props.type} 
        className={`${styles.customButton} ${props.className === 'activated' ? styles.activated : ''} ${props.extraClass ? props.extraClass : ''}`} 
        onClick={props.onClick}>{props.children}</button>;
}