import { axiosClient } from "@utils/axios";

interface Okr {
  id: number;
  title: string;
  dDay: number;
  progress: number; // 0~100
  category: Category;
}

interface KeyResult {
  id: number;
  title: string;
  progress: number;
}

interface Category {
  title: string;
  colorIndex: number;
}

interface OkrDetail {
  id: number;
  keyResults: KeyResult[];
  todos: Todo[];
}

interface Todo {
  id: number;
  title: string;
  // completedAt: date | undefined
  isCompleted: boolean;
}

export const getOkrList = async (): Promise<Okr[]> => {
  const data = axiosClient.get("/okrs").then((resp) => resp?.data?.okrs);
  return data;
};

export const getOkrDetail = async (id: number): Promise<OkrDetail> => {
  const data = axiosClient.get(`/okr/${id}`).then((resp) => resp?.data?.okr);
  return data;
};

export interface OkrBody {
  title: string;
  categoryId: number;
}

interface OkrCreate {
  id: number;
}

export const createOkr = async (body: OkrBody): Promise<OkrCreate> => {
  const data = axiosClient.post("/objective/write", { data: body }).then((resp) => resp?.data);
  return data;
};

export interface KrBody {
  objectiveId: number;
  title: string;
}
interface KeyResultCreate {
  id: number;
}
export const createKeyResult = async (body: KrBody): Promise<KeyResultCreate> => {
  const data = axiosClient.post("/key-result/write", { data: body }).then((resp) => resp?.data);
  return data;
};
