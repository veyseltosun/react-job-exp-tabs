import{useState, useEffect} from  "react";
import {FaAngleDoubleRight} from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project"

function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(response => setJobs(response))
    setLoading(false)
   
  }, [])
  console.log(jobs)
  console.log(loading)
  if (loading){
    return(
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  return (
    <div className="App">
      Job exp app 
    </div>
  );
}

export default App;
