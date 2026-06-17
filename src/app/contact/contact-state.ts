export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  values?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};
