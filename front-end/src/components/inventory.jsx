import styles from "../styles/styles"
import { useState } from "react";


export default function InventoryModal({closeModal}) {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const user = localStorage.getItem('user');


    // const submit = async (e) => {
    //     e.preventDefault()
    //     // Body consists of email information that the user input and is sent to the API created on the monolith
    //     const result = await axios.post('http://localhost:3050/api/emails', {
    //         userId: user,
    //         to: to,
    //         subject: subject,
    //         text: text,
    //     });

    //     console.log("resultsss: ", result);
    //     closeModal(false);
    // }

    return (
        <div style={styles.modalBackground}>
            <div style={styles.modalContainer}>
                <form onSubmit={closeModal(false)}>
                    <h1 style={styles.header}>New Item</h1> {/*Title for modal */}
                    <div style={styles}>
                        <label for="Item Name" style={styles.label}>Item Name</label>
                        <input type="text" style={styles.label} id="itemname" placeholder="Product"
                        onChange={e => setTo(e.target.value)}
                        />
                    </div>
                    <div style={styles}>
                        <label for="Quantity" style={styles.label}>Quantity</label>
                        <input type="text" style={styles.label} id="quantity" placeholder="55"
                        onChange={e => setSubject(e.target.value)}
                        />
                    </div> 
                    <div style={styles}>
                        <label for="Price" style={styles.label}>Price of One</label>
                        $: <input type="text" style={styles.label} id="Cost" placeholder="20"
                        onChange={e => setText(e.target.value)}
                        />
                    </div>
                    <div style={styles}>
                        <label for="Description" style={styles.label}>Description</label>
                        <input type="text" style={styles.label} id="details" placeholder="Cheese and turkey"
                        onChange={e => setTo(e.target.value)}
                        />
                    </div>
                    <div style={styles}>
                        <button onClick={() => closeModal(false)} style={styles.button}>Cancel</button>
                        <button type="submit" style={styles.button}>Add Item</button>
                    </div>  
                </form>
            </div>
        </div>
    )
}