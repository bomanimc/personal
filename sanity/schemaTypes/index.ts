import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./project";
import { personInfoType } from "./personInfo";
import { socialMediaType } from "./socialMedia";
import { speakingEngagementType } from "./speakingEngagement";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType,
    personInfoType,
    socialMediaType,
    speakingEngagementType,
  ],
};
