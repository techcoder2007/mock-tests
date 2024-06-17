declare module "*.mp3" {
  const content: string;
  export default content;
}

export type StatatusText = "sucsess" | "error";

export interface UserProps {
  appId: string;
  email: string;
  password: string;
  id: string;
  isPaid: boolean;
}

export interface UsersTableProps {
  users: UserProps[];
}

export interface MocksItem {
  questionAudio: string;
  question_title: string;
  timeThink: number;
  timeAnswer: number;
}

export type AddUserProps = Partial<UserProps>;

export interface MocksResponse {
  id: string;
  part_one: MocksItem[];
  part_two: MocksItem[];
  part_three: MocksItem[];
}

export interface PostHandlerResponse<T> {
  statusText: StatusText;
  message: string;
  status: number;
  currentUser?: T;
  id: string;
}
namespace GlobalTypes {
  export type StatusText = "sucess" | "error";
}
