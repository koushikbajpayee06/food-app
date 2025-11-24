export const extractImageId = (path) => {
  if (!path) return "";
  const file = path.split("/").pop();
  return file.split("_").pop().split(".")[0];
};
