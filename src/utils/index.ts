export const generateRandomLongId = () => {
  //  const guid = flakeId.gen();
  // const result = `${prefix}-${format(guid, 'hex')}`;
  const generatedId = `${Date.now().toString(36)}-${Math.random().toString(
    36,
  )}`;
  return generatedId.toUpperCase();
};
