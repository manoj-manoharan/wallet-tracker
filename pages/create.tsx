import styles from "../styles/Create.module.css";
import Link from "next/link";

const Create = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heroText}>
                    <h4>Wallet Tracker</h4>
                </div>
            </div>
            <div className={styles.bottom}>
                <button className={styles.createButton}>Create</button>
                <div className={styles.activityTypesContainer}>
                    <h3 className={styles.activeActivityType}>Income</h3>
                    <h3>Expense</h3>
                </div>
            </div>
        </div>
    );
}

export default Create;