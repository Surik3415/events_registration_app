import { $host } from "./index";

export const events = async() => {
  const response = await $host.get('/')
}