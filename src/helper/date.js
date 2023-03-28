export const convertISODateTime = (getISO) => {
  const event = new Date(getISO);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return event.toLocaleDateString(undefined, options);
};
