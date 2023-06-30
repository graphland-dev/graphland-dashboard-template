import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required().label("Name"),
  age: yup.number().required().label("Age"),
});
