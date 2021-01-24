import express from 'express'
import path from 'path'
import { getAllProjects, getProjectByName, getProjectById } from './controllers/projects'

const app = express()

app.use(express.static('public'))


app.get('/api/projects', getAllProjects)
app.get('/api/projects/:name', getProjectByName)
app.get('/api/project/:id', getProjectById)


app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

const port = process.env.PORT ? process.env.PORT : 4004
app.listen(port, () => {
  console.log('Listening on port ${port}...') // eslint-disable-line no-console
})
