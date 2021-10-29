import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addtours.css';

const Addtours = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://limitless-chamber-81508.herokuapp.com/tours', data)
        .then(res => {
            console.log(res);
        })
    };
    return (
        <div id="addtours" className="tour-added">
            <h3>Add a tour event</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("img")} placeholder="Img Url"/> <br />
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
            <textarea {...register("des")} placeholder="Description"/> <br />
            <input type="number" {...register("price")} placeholder="Price" /> <br />
            <input type="submit" />
            </form>

        </div>
    );
};

export default Addtours;