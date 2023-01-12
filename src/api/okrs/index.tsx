import { OkrDetail, OKRType } from "~types/okr";
import { axiosClient } from "~utils/axios";

export const getOkrList = async (): Promise<OKRType[]> => {
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
