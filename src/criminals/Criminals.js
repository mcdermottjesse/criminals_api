import axios from "axios"
import { useState, useEffect} from "react"


const Criminals = () => {

const [criminalName, setCriminalName] = useState([]);

const [criminalMugshot, setCriminalMugshot] = useState([]);

// const [bookedDate, setbookedDate] = useState([]);

// const [charges, setCharges] = useState([]);

const fetchData = () => {

  const criminalAPI = "https://www.jailbase.com/api/1/recent/?source_id=az-mcso"

  const getCriminal = axios.get(criminalAPI)

  axios.all([getCriminal])
  .then(
    axios.spread((...allData) => {
      const dataCriminalName = allData[0].data.records[1].name

      const dataCriminalMugshot = allData[0].data.records[1].mugshot

    setCriminalName(dataCriminalName)
     setCriminalMugshot(dataCriminalMugshot)
    })
  )
}

useEffect(() => {
  fetchData()
}, [])

return (
  <div>
    Criminal Name is: {criminalName}
    <img src={criminalMugshot}/>
  </div>
);

}

export default Criminals;