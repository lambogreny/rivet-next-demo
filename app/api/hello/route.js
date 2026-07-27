export const dynamic = "force-dynamic";

export async function GET() {
  console.log(
    JSON.stringify({
      level: "info",
      msg: "api hello called",
      route: "/api/hello",
      ts: new Date().toISOString(),
    }),
  );
  return Response.json({
    message: "Hello from Rivet — auto-CI/CD works!",
    time: new Date().toISOString(),
  });
}
