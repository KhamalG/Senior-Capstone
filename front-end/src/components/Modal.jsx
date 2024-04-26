import React, { useState } from "react";
import { modalStyles } from "../styles/styles";
import {v4 as uuidv4} from 'uuid';
import axios from "axios";


export const InventoryModal = ({closeModal, isEdit}) => {
    const [newItem, setNewItem] = useState({
        id: isEdit ? isEdit.id : uuidv4(), name: isEdit ? isEdit.name : '', description: isEdit ? isEdit.description : '', price: isEdit ? isEdit.price : 0
    });
    const [image, setImage] = useState('')

    const onInputChange = (e) => {
        setNewItem({...newItem, [e.target.name]: e.target.value})
    }

    if (isEdit.restaurant_id === 1) {
        setImage('/Users/khamalgoodwin/Senior-Capstone/mobile/assets/images/freshensflatbread.jpeg')
    }
    if (isEdit.restaurant_id === 2) {
        setImage('/Users/khamalgoodwin/Senior-Capstone/mobile/assets/images/canesstock.jpeg')
    }
    if (isEdit.restaurant_id === 3) {
        setImage('/Users/khamalgoodwin/Senior-Capstone/mobile/assets/images/shakeshackstock.jpeg')
    }
    if (isEdit.restaurant_id === 4) {
        setImage('/Users/khamalgoodwin/Senior-Capstone/mobile/assets/images/snackstock.jpeg')
    }

    const submit = async (e) => {
        e.preventDefault()
        if (isEdit.id) {
            const result = await axios.patch('http://localhost:3050/api/item', {
                id: uuidv4(),
                restaurant_id: isEdit.restaurant_id,
                name: newItem.name,
                price: newItem.price,
                description: newItem.description,
                image: image
            });
            console.log("resultsss: ", result);
        } else {
            const result = await axios.post('http://localhost:3050/api/item', {
                id: uuidv4(),
                restaurant_id: isEdit.restaurant_id,
                name: newItem.name,
                price: newItem.price,
                description: newItem.description,
                image: image
            });
            console.log("resultsss: ", result);
        }
        closeModal(false);
    }

    return (
        <div 
            style={modalStyles.modalContainer}
            className="modal-container"
            // onClick={(e) => {
            //     closeModal();
            // }}
        >
           <div style={modalStyles.modal}>
                <form onSubmit={submit}>
                <div style={modalStyles.formGorup}>
                        <label htmlFor="restaurant_id">Restaurant ID</label>
                        <select name='restaurant_id'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </div>
                    <div style={modalStyles.formGorup}>
                        <label htmlFor="name">Name</label>
                        <input name='name' onChange={e => onInputChange(e)}/>
                    </div>
                    <div style={modalStyles.formGorup}>
                        <label htmlFor="description">Description</label>
                        <textarea name='description' onChange={e => onInputChange(e)}/>
                    </div>
                    <div style={modalStyles.formGorup}>
                        <label htmlFor="price">Price</label>
                        <input type="number" onChange={e => onInputChange(e)} name='price' />
                    </div>
                    <button type="submit" style={modalStyles.button}>Submit</button>
                    <button style={modalStyles.button} onClick={() => closeModal()}>Close</button>
                </form>
            </div> 
        </div>
    )
}

export const OrderModal = ({closeModal}) => {
    return (
        <div 
            style={modalStyles.modalContainer}
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === 'modal-container') closeModal();
            }}
        >
           <div style={modalStyles.modal}>
                <form>
                    <div style={modalStyles.formGorup}>
                        <label htmlFor="status">Status</label>
                        <select name='status'>
                            <option value='preparing'>Preparing</option>
                            <option value='enRoute'>En Route</option>
                            <option value='arrived'>Arrived</option>
                            <option value='arrived'>Arrived</option>
                            <option value='delivered'>Delivered</option>
                            <option value='enRouteHub'>En Route to Hub</option>
                            <option value='arrivedHub'>Arrived back to Hub</option>
                        </select>
                    </div>
                    <button type="submit" style={modalStyles.button}>Submit</button>
                    <button style={modalStyles.button} onClick={() => closeModal()}>Close</button>
                </form>
            </div> 
        </div>
    )
}