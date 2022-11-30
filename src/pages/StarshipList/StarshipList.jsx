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
          <Link to='/starship' state={{starship}} key={starship.name}>
          {starship.name}
          </Link>
        </div> 
          )}
      </div>
    </>
  );
}

export default StarshipList;