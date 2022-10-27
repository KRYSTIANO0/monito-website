import React from "react";
//components
import PetItem from "./PetItem/PetItem";
//styles
import "./PetsList.css";

const DUMMY_PETS_LIST = [
  {
    id: "dummy_pet_id_1",
    title: "pomeranian white",
    gender: "male",
    birth: "25:10:2022",
    price: 6900,
    images: ["./images/pets/pomeranian.jpg", "./images/pets.pemeranian2.jpg"],
  },
  {
    id: "dummy_pet_id_2",
    title: "pomeranian white",
    gender: "male",
    birth: "25:10:2022",
    price: 6900,
    images: ["./images/pets/pomeranian.jpg", "./images/pets.pemeranian2.jpg"],
  },
  {
    id: "dummy_pet_id_3",
    title: "pomeranian white",
    gender: "male",
    birth: "25:10:2022",
    price: 6900,
    images: ["./images/pets/pomeranian.jpg", "./images/pets.pemeranian2.jpg"],
  },
  {
    id: "dummy_pet_id_4",
    title: "pomeranian white",
    gender: "male",
    birth: "25:10:2022",
    price: 6900,
    images: ["./images/pets/pomeranian.jpg", "./images/pets.pemeranian2.jpg"],
  },
  {
    id: "dummy_pet_id_5",
    title: "pomeranian white",
    gender: "male",
    birth: "25:10:2022",
    price: 6900,
    images: ["./images/pets/pomeranian.jpg", "./images/pets.pemeranian2.jpg"],
  },
  {
    id: "dummy_pet_id_6",
    title: "pomeranian white",
    gender: "male",
    birth: "25:10:2022",
    price: 6900,
    images: ["./images/pets/pomeranian.jpg", "./images/pets.pemeranian2.jpg"],
  },
  {
    id: "dummy_pet_id_7",
    title: "pomeranian white",
    gender: "male",
    birth: "25:10:2022",
    price: 6900,
    images: ["./images/pets/pomeranian.jpg", "./images/pets.pemeranian2.jpg"],
  },
  {
    id: "dummy_pet_id_8",
    title: "pomeranian white",
    gender: "male",
    birth: "25:10:2022",
    price: 6900,
    images: ["./images/pets/pomeranian.jpg", "./images/pets.pemeranian2.jpg"],
  },
];

const PetsList = () => {
  return (
    <ul className="pets-list">
      {DUMMY_PETS_LIST.map((pet) => {
        return <PetItem key={pet.id} {...pet} />;
      })}
    </ul>
  );
};

export default PetsList;
