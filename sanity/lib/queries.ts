import {defineQuery} from 'next-sanity'

export const BIO_QUERY = defineQuery(`*[_type == "personInfo"][0].bio`)
export const PROJECTS_QUERY = defineQuery(`*[_type == "project" && slug.current == $project][0]{'projectId': slug.current, content, title}`)
