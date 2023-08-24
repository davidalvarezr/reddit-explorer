// This can be used in Postman as "Basic Auth":
// clientId --> Username
// secret   --> Password
export const secrets = {
    clientId: process.env.REDDIT_CLIENT_ID ?? "",
    secret: process.env.REDDIT_SECRET ?? "",
}
