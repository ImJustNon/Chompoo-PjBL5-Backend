import dotenv from "dotenv";
dotenv.config();


export const config = {
    port: parseInt(process.env.PORT ?? "8080"),
    baseUrl: process.env.BASEURL ?? "",
    allowedOrigins: ["http://127.0.0.1:8123"]
}