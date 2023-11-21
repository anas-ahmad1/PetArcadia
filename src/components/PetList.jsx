/* eslint-disable react/prop-types */

import ViewPetCard from "./ViewPetCard"

import "./PetList.css"

export default function PetList({pets}) {
  return (
    <div className="PetsList">
      {
        pets.map((pet) => {
          return(
            <ViewPetCard key={pet.id} pet={pet} />
          )
        })
      }
      {pets.length == 0 ? <div>No pets found!</div> : null}
    </div>
  );
}
