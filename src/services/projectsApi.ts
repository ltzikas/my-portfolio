export interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  image: string
}

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('/src/mocks/projects.json')
  return await response.json()
}
