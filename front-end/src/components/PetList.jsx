/* eslint-disable react/prop-types */

import ViewPetCard from "./ViewPetCard"

//import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import "./PetList.css"

export default function PetList({pets}) {
  const isSmallScreen = useMediaQuery('(max-width:915px)'); {/*Media query used to make page responsive*/ }

  return (
    <div className={isSmallScreen ? "PetsListSmall" : "PetsList"}>
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
