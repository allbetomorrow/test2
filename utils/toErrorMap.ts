
interface Errors {
  field: string
  message: string
}

export const toErrorMap = (errors: Errors[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};