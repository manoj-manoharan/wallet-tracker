import styles from "@/styles/Create.module.css";

const UpdateById = () => {
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
                        <input type="submit" value="Update expense"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UpdateById;