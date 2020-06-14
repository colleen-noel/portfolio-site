import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Projects from './pages/Projects'

import ProjectsPage from './pages/Projects'
import ErrorPage from './pages/Error'
import ProjectDetailsPage from './components/ProjectDetails'

render(
  <Projects />,
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={ProjectsPage} />
  //     <Route path="/projects" components={ProjectDetailsPage} />
  //     <Route path="*" component={ErrorPage} />
  //   </Switch>
  // </BrowserRouter>,
  document.getElementById('root'),
)
