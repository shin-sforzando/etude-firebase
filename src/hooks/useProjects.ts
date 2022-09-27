import { useEffect, useState } from 'react'

import { getProjects, Project } from '@/libs/Firebase/projects'

export type UseProjectsOutput = {
  isLoading: boolean
  projects: Project[]
}

const DEFAULT_OUTPUT: UseProjectsOutput = {
  isLoading: true,
  projects: [],
}

export const useProjects = (): UseProjectsOutput => {
  const [output, setOutput] = useState<UseProjectsOutput>(DEFAULT_OUTPUT)

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects()
      setOutput({ isLoading: false, projects })
    }

    fetchProjects()
  }, [])

  return output
}
