import styles from "@styles/Create.module.css";
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Create = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heroText}>
                    <h4>Wallet Tracker</h4>
                </div>
            </div>
            <div className={styles.bottom}>

                <div className={styles.formForCreate}>

                    <div className={styles.formElement}>
                        <span>Amount</span>
                        <input type="number" placeholder="Enter amount"/>
                    </div>

                    <div className={styles.formElement}>
                        <span>Category</span>
                        <select>
                            <option selected disabled value="">Please select a category</option>
                            <option>Food</option>
                            <option>Groceries</option>
                            <option>Transportation</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className={styles.formElement}>
                        <span>Date</span>
                        <input type="date" placeholder="Enter amount"/>
                    </div>

                    <div className={styles.formElement}>
                        <span></span>
                        <input type="submit" value="Save expense"/>
                    </div>

                </div>
                <small>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                     &nbsp;Use below buttons to navigate between creating income or expense
                </small>
                <div className={styles.activityTypesContainer}>
                    <h3>Income</h3>
                    <h3 className={styles.activeActivityType}>Expense</h3>
                </div>
            </div>
        </div>
    );
}

export default Create;