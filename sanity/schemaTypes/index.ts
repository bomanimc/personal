import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./project";
import { personInfoType } from "./personInfo";
import { socialMediaType } from "./socialMedia";
import { speakingEngagementType } from "./speakingEngagement";
import { cloudinaryImageType } from "./cloudinaryImage";
import { videoType } from "./video";
import { featuredProjectType } from "./featuredProject";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType,
    personInfoType,
    socialMediaType,
    speakingEngagementType,
    cloudinaryImageType,
    videoType,
    featuredProjectType,
  ],
};
