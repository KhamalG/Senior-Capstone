import styles from "../styles/styles"

export default function InventoryModal({closeModal, email}) {
    const {to, subject, text, createdAt} = email

    return (
        <div style={styles.modalBackground}>
            <div style={styles.modalContainer}>
                <form>
                    <h1 style={styles.header}>Email from : </h1>
                    <h2 style={styles.header}>{createdAt}</h2>
                    <div style={styles.labelBackground}>
                        <label for="floatingInput" style={styles.label}>To: </label>
                        <p style={styles.text}>{to}</p>
                    </div>
                    <div style={styles.labelBackground}>
                        <label for="floatingInput" style={styles.label}>Subject: </label>
                        <p style={styles.text} >{subject}</p>
                    </div> 
                    <div style={styles.labelBackground}>
                        <label for="floatingInput" style={styles.label}>Body: </label>
                        <p style={styles.text}>{text}</p>
                    </div>
                    <div>
                        <button onClick={() => closeModal(false)} style={styles.button}>Close</button>
                    </div>  
                </form>
            </div>
        </div>
    )
}