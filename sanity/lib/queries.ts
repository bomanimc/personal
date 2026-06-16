import {defineQuery} from 'next-sanity'

export const BIO_QUERY = defineQuery(`*[_type == "personInfo"][0].bio`)
export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $project][0]{'projectId': slug.current, content, title, year, role, tools, site, otherMedia}`)
export const FEATURED_PROJECTS_QUERY = defineQuery(`*[_type == "featuredProject"]|order(orderRank){ "project": project->{'projectId': slug.current, title, primaryMedia} }`)
export const SOCIALS_QUERY = defineQuery(`*[_type == "socialMedia"]|order(orderRank)`)
// TODO: Fix the date field on projects and order in query
export const SPEAKING_ENGAGEMENTS_QUERY = defineQuery(`*[_type == "speakingEngagement"]`)
export const INTERVIEWS_QUERY = defineQuery(`*[_type == "interview"]`)
export const COURSES_TAUGHT_QUERY = defineQuery(`*[_type == "courseTaught"]|order(orderRank)`)
export const EXHIBITIONS_QUERY = defineQuery(`*[_type == "exhibition"]`)
export const RESIDENCY_QUERY = defineQuery(`*[_type == "residency"]|order(orderRank)`)
export const EDUCATION_QUERY = defineQuery(`*[_type == "education"]`)