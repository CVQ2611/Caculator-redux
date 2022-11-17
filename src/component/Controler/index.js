import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { expresstionSlice } from "../../reducer/addCurrentExpresstion.js";
// import { historySlice } from "../../reducer/history.js";
import Button from "../Button";
import styles from './Controler.module.css';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const operations = ['AC', 'C', '+', '-', '*', '/', '=']

const cx = classNames.bind(styles);

function Controler() {
    const dispatch = useDispatch()
    const handleClickAddNumber = (number) => {
        dispatch(expresstionSlice.actions.ADD_NUMBER(number))
    }

    const handleClickAddOperation = (operation) => {
        if (operation === 'AC' || operation === 'C') {
            dispatch(expresstionSlice.actions.RESTORE_EXPRESSTION(operation))
        } else {
            dispatch(expresstionSlice.actions.ADD_OPERATION(operation))
        }
    }

    const handleClickReuilt = (operation) => {
        dispatch(expresstionSlice.actions.RESTORE_EXPRESSTION(operation))
        dispatch(expresstionSlice.actions.ADD_HISTORY())
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('number')}>
                {numbers.map((number, index) => {
                    return (
                        <Button key={index} onClick={() => handleClickAddNumber(number)}>
                            {number}
                        </Button>
                    )
                })}
            </div>
            <div className={cx('action')}>
                {operations.map((operation, index) => {
                    return (
                        <Button
                            key={index}
                            primary={operation === '='}
                            onClick={() => { operation === '=' ? handleClickReuilt(operation) : handleClickAddOperation(operation) }}>
                            {operation}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Controler;