import { useProjects } from '@/hooks/useProjects'

const ProjectsList = () => {
  const { isLoading, projects } = useProjects()
  if (isLoading) return <>Loading ...</>
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  )
}

export default ProjectsList
