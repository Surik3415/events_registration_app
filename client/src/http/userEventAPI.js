import { $host } from "./index";


export const regitstrate = async ({ fullName, email, birthDate, userHearItFrom, event_id }) => {
  const response = await $host.post(`/api/event/${event_id}/event_registration`, {
    fullName,
    email,
    birthDate,
    userHearItFrom,
  });
  return response.data;
};
