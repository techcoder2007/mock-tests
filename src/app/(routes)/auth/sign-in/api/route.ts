export const dynamic = "force-dynamic";
import { addUsersToUsersDatabase } from "@/services/firebase/firestore-docs";
import { AddUserProps, PostHandlerResponse, UserProps } from "@/types";

export async function POST(request: Request) {
  const { email, password }: AddUserProps = await request.json();
  try {
    const user = await addUsersToUsersDatabase(
      email as string,
      password as string
    );
    return new Response(
      JSON.stringify({
        message: "User added successfully",
        status: 201,
        id: user?.id,
        statusText: "success",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
        statusText: "Internal Server Error",
      });
    }
  }
}
