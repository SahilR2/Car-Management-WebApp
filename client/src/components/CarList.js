import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarForm from './CarForm';

const CarList = ({ token }) => {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/cars', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCars(data);
      } catch (error) {
        alert(error.response.data.error);
      }
    };
    fetchCars();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCars(cars.filter((car) => car.id !== id));
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Car List</h2>
      {isEditing ? (
        <CarForm token={token} car={editingCar} setCar={setEditingCar} setEditing={setIsEditing} />
      ) : (
        <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white p-2 rounded mb-4">
          Add New Car
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">{car.title}</h3>
            <p className="mb-2">{car.description}</p>
            <p className="mb-2">Tags: {car.tags}</p>
            <div className="flex space-x-2 mb-2">
              {car.images.map((img, index) => (
                <img key={index} src={img} alt={car.title} className="w-20 h-20 object-cover" />
              ))}
            </div>
            <button onClick={() => { setEditingCar(car); setIsEditing(true); }} className="bg-blue-500 text-white p-2 rounded mr-2">
              Edit
            </button>
            <button onClick={() => handleDelete(car.id)} className="bg-red-500 text-white p-2 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;