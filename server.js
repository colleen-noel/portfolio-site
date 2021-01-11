import express from 'express'
import path from 'path'
import { getAllProjects, getProjectByName, getProjectById } from './controllers/projects'

const app = express()

app.use(express.static('public'))


app.get('/api/projects', getAllProjects)
app.get('/api/projects/:name', getProjectByName)
app.get('/api/project/:id', getProjectById)


app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(4004, () => {
  console.log('Listening on port 4004...') // eslint-disable-line no-console
})
