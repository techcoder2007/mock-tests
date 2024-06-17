interface MocksItem {
  questionAudio: string;
  question_title: string;
  timeThink: number;
  timeAnswer: number;
}

export interface MocksResponse {
  id: string;
  part_one: MocksItem[];
  part_two: MocksItem[];
  part_three: MocksItem[];
}
