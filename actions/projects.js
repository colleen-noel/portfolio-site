import axios from "axios"

export const retrieveProjects = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/projects`) // eslint-disable-line no-undef

  return data
}
