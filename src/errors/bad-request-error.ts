import { ApplicationError } from "../protocols.js";

export function badRequestError(): ApplicationError {
  return {
    name: "BadRequestError",
    message: "Missing data requested",
  };
}