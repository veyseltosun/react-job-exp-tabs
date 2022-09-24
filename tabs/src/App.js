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
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
        <div className="jobs-center">
          <div className="btn-container">

          {jobs.map((item, index) => {
            return(
              <button
               key={item.id} 
               onClick={() => setValue(index)} 
               className = {`job-btn ${index === value && "active-btn"}`}
              ></button>
            )
          })}

          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{compony}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty,index) =>{
              return(
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}


          </article>
        </div>
      
    </section>
  );
}

export default App;
