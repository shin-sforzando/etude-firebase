import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'

export type Project = {
  id?: string
  name: string
}

export const getProjects = async (): Promise<Project[]> => {
  const projects = new Array<Project>()
  const db = getFirestore()
  const projectsSnapshot = await getDocs(collection(db, 'projects'))
  projectsSnapshot.forEach((doc) => {
    const project = doc.data() as Project
    projects.push({ ...project, id: doc.id })
  })

  return projects
}

export const addProject = async (project: Project): Promise<void> => {
  const db = getFirestore()
  const docRef = doc(collection(db, 'projects'))
  await setDoc(docRef, { name: project.name })
}
