import {NextPage} from "next";
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>

                <div className={styles.heroText}>
                    <h4>Wallet Tracker</h4>
                </div>

                <div className={styles.walletBalance}>
                    <h2>Wallet Balance: $100</h2>
                </div>

                <div className={styles.walletWholeAnalytics}>
                    <div className={styles.incomeAndExpense}>
                        <h4>Income: $100</h4>
                        <h4>Expense: $100</h4>
                    </div>
                    <div className={styles.timePeriods}>
                        <small className={styles.timePeriodActive}>Day</small>
                        <small>Week</small>
                        <small>Month</small>
                        <small>Year</small>
                    </div>
                </div>

            </div>
            <div className={styles.bottom}>
                <button className={styles.addButton}>Add</button>
            </div>
        </div>
    );
}

export default Home;