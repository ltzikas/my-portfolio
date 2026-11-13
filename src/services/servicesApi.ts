export interface Service {
  id: number
  title: string
  description: string
}

export async function fetchServices(): Promise<Service[]> {
  const response = await fetch('/src/mocks/services.json')
  return await response.json()
}
