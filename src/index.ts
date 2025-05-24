import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { jwt } from "@elysiajs/jwt";
import { cookie } from "@elysiajs/cookie";
import { userRoutes } from "./routes/user.route";

const app = new Elysia()
  .use(cookie())
  .use(jwt({ name: "jwt", secret: process.env.JWT_SECRET || "secret" }))
  .use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  )
  .group("/api/v1", (app) => userRoutes(app));

app.listen(8000);
console.log("🦊 Elysia running on http://localhost:8000");
