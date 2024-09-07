import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { projects } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};
