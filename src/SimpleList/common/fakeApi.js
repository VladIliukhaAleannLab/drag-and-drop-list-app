import { FAKE_DATA } from "./helpers";

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const getItems = async () => {
  await sleep(1000);
  return FAKE_DATA
};