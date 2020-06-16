import React, { useState, useEffect } from 'react'
import Details from '../components/Details'
import GoBack from '../components/GoBack'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import { retrieveProject } from '../utils/projects'

export default ({ location }) => {
  const [project, setProject] = useState({})

  useEffect(() => {
    async function pullData() {
      const p = await retrieveProject(location)

      setProject(p)
    }

    pullData()
  }, [])

  return (
    <Page>
      <GoBack />
      <div className="container">
        <div className="row">
          <div className="col col-2" />
          <div className="col col-8">

            {
              project
                ? (
                  <Details
                    project={project}
                  />
                )
                : (<NotFound message="Sorry, that project is not mine" />)
            }
          </div>
          <div className="col col-2" />
        </div>
      </div>
    </Page>
  )
}
