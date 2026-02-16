import { type SchemaTypeDefinition } from 'sanity'

import {projectType} from './project'
import {personInfoType} from './personInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, personInfoType],
}
