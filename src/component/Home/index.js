import classNames from "classnames/bind";
import Controler from "../Controler";
import History from "../History";
import Screen from "../Screen";
import styles from './Home.module.css';
const cx = classNames.bind(styles)
function Home() {
    // console.log('rerender');
    return (
        <div className={cx('wrapper')}>
            <History />
            <Screen />
            <Controler />
        </div>
    )
}

export default Home;