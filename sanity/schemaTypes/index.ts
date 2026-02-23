import { type SchemaTypeDefinition } from 'sanity'

import {projectType} from './project'
import {personInfoType} from './personInfo'
import {socialMediaType} from './socialMedia'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, personInfoType, socialMediaType],
}
