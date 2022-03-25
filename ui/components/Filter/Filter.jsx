import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import exitIcon from '../../public/exit-icon.png'
import FilterButton from './FilterButton'
import styles from './filter.module.css'
import FilterBody from './FilterBody'
import { useLazyQuery } from '@apollo/client'
import jobFilterQuery from '../../lib/sdk/jobs/jobFilterQuery'

function Filter ({ setJobs, setError, setLoading }) {
  const [maxRate, setMaxRate] = useState(45)
  const [selectedTypes, setSelectedTypes] = useState([])
  const containerRef = useRef()

  // show mobile filter when open filter button is clicked
  function handleFilterButtonClick () {
    containerRef.current.style.display = 'block'
  }

  // close the mobile filter overlay
  function closeMobileFilter () {
    containerRef.current.style.display = 'none'
  }

  // close the mobile filter when close filter button is clicked
  function handleCloseFilterClick () {
    closeMobileFilter()
  }

  // run the query to get jobs on "SEE GUIDES" click
  async function handleApplyFilterClick () {
    getJobs({
      variables: { maxRate: maxRate, types: selectedTypesOrNull }
    })
  }

  // run the query and close mobile filter on "SEE GUIDES" click
  function handleApplyMobileFilterClick () {
    handleApplyFilterClick()
    closeMobileFilter()
  }

  // if no types are selected, use all types
  const selectedTypesOrNull = selectedTypes.length >= 1 ? selectedTypes : null

  // prepare graphql query
  const [getJobs, { loading, error, data }] = useLazyQuery(jobFilterQuery)
  // log graphql error if it exists
  if (error) console.error(error)

  // query jobs on initial load of component
  useEffect(() => {
    getJobs()
  }, [getJobs])

  useEffect(() => {
    if (data && data.search) {
      setJobs(data.search)
      setError(null)
      setLoading(null)
    }
    if (error) setError(error)
    if (loading) setLoading("Loading...")
  }, [data, loading, error, setJobs, setError, setLoading])

  return (
    <>
      <FilterButton
        onClick={handleFilterButtonClick}
      />
      <div className={styles.container} ref={containerRef}>
        <button
          onClick={handleCloseFilterClick}
          className={styles.mobileCloseButton}
        >
          <Image
            alt='Icon to close modal'
            height={20}
            src={exitIcon}
            width={20}
          />
        </button>
        <h2 className={styles.filterHeading}>Filter</h2>
        <FilterBody
          handleApplyFilterClick={handleApplyFilterClick}
          handleApplyMobileFilterClick={handleApplyMobileFilterClick}
          maxRate={maxRate}
          setMaxRate={setMaxRate}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
      </div>
    </>
  )
}

export default Filter
