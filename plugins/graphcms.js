import { GraphQLClient } from "graphql-request";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const graphcmsClient = new GraphQLClient(config.graphcmsUrl);
    return {
        provide: {
            graphcms: graphcmsClient
        }
    }
});
