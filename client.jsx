import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProjectsPage from './pages/Projects'
import ErrorPage from './pages/Error'
import ProjectDetailsPage from './components/ProjectDetails'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProjectsPage} />
      <Route path="/projects/{name}" components={ProjectDetailsPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
