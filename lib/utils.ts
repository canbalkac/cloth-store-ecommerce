import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatString = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.replace(/[^0-9]/g, "");

  if (value.length >= 3) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }

  e.target.value = value;
};

export const formatCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(/\D/g, ""); //only number
  const chunks = value.match(/.{1,4}/g);
  e.target.value = chunks ? chunks.join(" ") : "";
};

export const formatCvvNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(/\D/g, "").slice(0, 3);
  e.target.value = value;
};
