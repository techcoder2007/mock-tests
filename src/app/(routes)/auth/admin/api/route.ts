import { getFirestoreCollections } from "@/services/firebase/firestore-docs";
import { AddUserProps } from "@/types";

export async function GET() {
  try {
    const response: AddUserProps[] = await getFirestoreCollections<
      AddUserProps[]
    >("login");

    return new Response(JSON.stringify(response[0]), {
      status: 200,
      statusText: "sucsess",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 404,
        statusText: "error check and try again",
      });
    }
  }
}

export async function POST(request: Request) {
  const { email, password }: AddUserProps = await request.json();
  const response: AddUserProps[] = await getFirestoreCollections<
    AddUserProps[]
  >("login");
  
  try {
    if (email === response[0]?.email && password === response[0]?.password) {
      return new Response(
        JSON.stringify({
          message: "Login sucsess",
          status: 201,
          statusText: "success",
        }),
        {
          status: 201,
          statusText: "sucsess",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Login failed", status: 401 }),
        {
          status: 401,
          statusText: "error",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
