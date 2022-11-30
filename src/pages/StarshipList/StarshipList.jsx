import { useState, useEffect } from "react";
import { getStarshipList } from "../../services/api-calls";
import { Link } from 'react-router-dom';


const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (  
    <>
      <div>
        {starships.map(starship => 
          <div>
            {starship.name}
          </div>
          )}
      </div>
    </>
  );
}

export default StarshipList;