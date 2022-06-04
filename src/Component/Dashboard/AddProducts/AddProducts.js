import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
      // console.log(data);
      const uri = `https://glacial-ocean-90361.herokuapp.com/services`;
      fetch(uri, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("added products successfully");
            reset();
          }
        });
    };


    return (
        <div className="add-service">          
        <h2> Add Products </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Name" required />
          <input
            {...register("description")}
            placeholder="description"
            required
          />
          <input
            type="number"
            {...register("price")}
            placeholder="price"
            required
          />
          <input {...register("img")} placeholder="image url" required />
          <input type="submit" />
        </form>
      </div>
    );
};

export default AddProducts;