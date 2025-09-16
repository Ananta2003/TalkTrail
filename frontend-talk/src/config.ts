export const BACKEND_URL = ("https://talktrail-6p1m.onrender.com/")

export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};