import { $host } from "./index";

export const getEvents = async (page = 1, limit = 12) => {
  try {
    const { data } = await $host.get(`api/event?page=${page}&limit=${limit}`);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch events');
  }
};


export const getEvent = async (id) => {
  const { data } = await $host.get(`api/event/${id}`);
  return data;
};
