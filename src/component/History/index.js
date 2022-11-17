import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { historySelector } from "../../selectors/selector";
import styles from './History.module.css';
const cx = classNames.bind(styles)
function History() {
    const historys = useSelector(historySelector)
    return (
        <div className={cx('wrapper')}>
            History:
            {historys.map((history, index) => {
                return (
                    <div key={index}>{history}</div>
                )
            })}
        </div>
    )
}

export default History;