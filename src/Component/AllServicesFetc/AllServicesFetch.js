
import { useEffect, useState } from "react";

const AllServicesFetch = () => {
    const [AllService, setServices] = useState([]);
    
    // console.log(AllService)
    
    useEffect(() => {
      fetch("https://glacial-ocean-90361.herokuapp.com/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return [AllService];
}

   



export default AllServicesFetch;


