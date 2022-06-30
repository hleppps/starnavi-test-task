import { ENDPOINT_URL } from "../constants";
import { Modes } from "../types";

export const getModeData = (): Promise<Modes> => fetchData(ENDPOINT_URL);

const fetchData = <T>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());
