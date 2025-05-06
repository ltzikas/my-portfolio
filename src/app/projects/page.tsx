export default async function ProjectsPage() {
  // Consumir el endpoint para obtener los proyectos
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: 'no-store', // Evitar el almacenamiento en caché para obtener datos actualizados
  });
  const projects = await res.json();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
      <ul className="space-y-4">
        {projects.map((project: any) => (
          <li key={project.id} className="border p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ver Proyecto
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}