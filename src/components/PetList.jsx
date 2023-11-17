/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import PetCard from "./PetCard";

import "./PetList.css"

export default function PetList({pets}) {
  return (
    <div className="PetsList">
      {
        pets.map((pet) => {
          return(
            <PetCard pet={pet} />
          )
        })
      }
      {pets.length == 0 ? <div>No pets found!</div> : null}
    </div>
  );
}
