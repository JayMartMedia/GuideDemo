import React from 'react'
import JobHeader from './JobHeader'
import JobBody from './JobBody'
import styles from './job.module.css'

function Job ({ job, setSelectedJob, isSelected}) {
  const { description, type, location: { city, state }, schedule, payRate } = job

  function handleJobClick () {
    if(isSelected){
      setSelectedJob(null)
    }else{
      setSelectedJob(job)
    }
  }
  return (
    <div
      className={`${styles.container} ${isSelected ? styles.selected: ''}`}
      onClick={handleJobClick}
    >
      <JobHeader
        type={type}
        city={city}
        state={state}
        schedule={schedule}
        payRate={payRate}
      />
      <JobBody
        description={description}
        isSelected={isSelected}
      />
    </div>
  )
}

export default Job
