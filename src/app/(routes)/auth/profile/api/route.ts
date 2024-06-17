import { getDocumentById } from "@/server-actions/actions";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("userId");
  const userId = JSON.parse(id as string);

  if (!userId) {
    return new Response(
      JSON.stringify({ error: "user id is probably undifined", userStatus: "Unauthorized" }),
      { status: 401, statusText: "Unauthorized" }
    );
  }

  const user = await getDocumentById("users", userId);

  return new Response(
    JSON.stringify({
      query: userId,
      ok: true,
      currentUser: user,
      userStatus: "Authorization",
    }),
    {
      status: 200,
    }
  );
}
