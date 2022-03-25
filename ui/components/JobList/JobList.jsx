import React from 'react'
import Job from '../Job'
import styles from './jobList.module.css'

function JobList ({ jobs = [], error, loading, setSelectedJob }) {

  if(loading) return <p>Loading...</p>
  if(error) return <pre>{JSON.stringify(error,null,2)}</pre>

  return (
    <div className={styles.container}>
      {jobs.map(job => {
        return (
          // not a proper key, would be better to use an id, but should be somewhat unique
          <Job
            job={job}
            setSelectedJob={ setSelectedJob }
            key={job.schedule.join(',') + job.location.city} 
          />
        )
      })}
    </div>
  )
}

export default JobList
