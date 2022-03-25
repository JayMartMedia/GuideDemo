import {
  ApolloProvider
} from '@apollo/client'
import React, { useState } from 'react'
import getApolloClient from '../../lib/sdk/client'
import Filter from '../Filter'
import Job from '../Job/Job'
import JobList from '../JobList'
import styles from './jobContainer.module.css'

// Init/connect apollo client to graphql api
const client = getApolloClient()

function JobContainer () {
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState([])
  const [loading, setLoading] = useState([])
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Filter 
          setJobs={setJobs}
          setError={setError}
          setLoading={setLoading}
        />
        {
          selectedJob ? 
          <Job
            job={selectedJob}
            setSelectedJob={setSelectedJob}
            isSelected={true}
          /> :
          <JobList
            jobs={jobs}
            loading={loading}
            error={error}
            setSelectedJob={setSelectedJob}
          />
        }
      </div>
    </ApolloProvider>
  )
}

export default JobContainer
