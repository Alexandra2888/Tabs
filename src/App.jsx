import React, { useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  // cureentItem

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }
  
  useEffect(() => {
    fetchJobs();
  }, []);
 
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }
  return (
    <section className="jobs-center">
      {/*button container */}
      <ButtonContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/*job info */}
      <JobInfo
        jobs={jobs}
        currentItem={currentItem}
      />
    </section>
  );
}

export default App;
