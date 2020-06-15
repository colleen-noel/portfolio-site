import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProjectsPage from './pages/Projects'
import ErrorPage from './pages/Error'
import ProjectDetailsPage from './pages/ProjectDetails'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProjectsPage} />
      <Route path="/projects" component={ProjectDetailsPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),

)
