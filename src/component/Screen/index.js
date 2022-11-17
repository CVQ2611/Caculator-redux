import classNames from "classnames/bind";
import styles from './Scree.module.css';
import { useDispatch, useSelector } from "react-redux";
import { currentExpresstionSelector, resuiltSelector } from "../../selectors/selector";
import { expresstionSlice } from "../../reducer/addCurrentExpresstion";


const cx = classNames.bind(styles);

function Screen() {
    const expresstion = useSelector(currentExpresstionSelector)
    const resuilt = useSelector(resuiltSelector)
    const dispatch = useDispatch()
    const handleChangeValueWithKey = (e) => {
        dispatch(expresstionSlice.actions.ADD_ONCHANGE_INPUT(e.target.value))
    }
    return (
        <div className={cx('wrapper')}>
            <input
                value={expresstion}
                className={cx('input')}
                onChange={handleChangeValueWithKey}
            />
            <input
                value={resuilt}
                className={cx('output')}
                readOnly={true}
            />
        </div>
    )
}

export default Screen;