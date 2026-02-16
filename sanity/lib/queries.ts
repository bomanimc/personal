import {defineQuery} from 'next-sanity'

export const BIO_QUERY = defineQuery(`*[_type == "personInfo"][0].bio`)
