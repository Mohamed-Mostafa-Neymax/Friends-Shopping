import styles from './Button.module.scss';

export default function Button(props) {

    function clickHandler() {
        console.log('Clicked');
    }

    return (
        <button className={styles.customButton} onClick={clickHandler}>{props.children}</button>
    );
}