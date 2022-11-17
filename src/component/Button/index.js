import classNames from "classnames/bind";
import styles from './Button.module.css';

const cx = classNames.bind(styles);


function Button({ children, primary, onClick }) {
    const classes = cx('wrapper', {
        primary
    })
    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;