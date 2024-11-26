import React, { useState } from 'react';
import axios from 'axios';

const CarForm = ({ token, car, setCar, setEditing }) => {
  const [title, setTitle] = useState(car ? car.title : '');
  const [description, setDescription] = useState(car ? car.description : '');
  const [tags, setTags] = useState(car ? car.tags : '');
  const [images, setImages] = useState(car ? car.images : []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = car ? `http://localhost:5000/cars/${car.id}` : 'http://localhost:5000/cars';
    const method = car ? 'put' : 'post';
    try {
      const { data } = await axios({
        method,
        url,
        headers: { Authorization: `Bearer ${token}` },
        data: { title, description, tags, images },
      });
      setCar(data);
      setEditing(false);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">{car ? 'Edit Car' : 'Add Car'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        placeholder="Image URLs (comma separated)"
        value={images.join(',')}
        onChange={(e) => setImages(e.target.value.split(','))}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        {car ? 'Update Car' : 'Add Car'}
      </button>
    </form>
  );
};

export default CarForm;