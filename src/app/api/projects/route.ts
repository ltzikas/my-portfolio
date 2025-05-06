import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

// Manejar solicitudes GET para obtener todos los proyectos
export async function GET() {
  try {
    const projects = await prisma.project.findMany(); // Asegúrate de que el modelo sea "projects"
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    console.log('Error details:', error);
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}

// Manejar solicitudes POST para crear un nuevo proyecto
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newProject = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        url: body.url,
      },
    });
    return NextResponse.json(newProject);
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  }
}