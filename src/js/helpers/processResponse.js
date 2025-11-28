export const processResponse = (res) => {
  if (!res.ok) throw new Error("Ой! Щось пішло не так!");
  return res.json();
};
