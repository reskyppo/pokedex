const getTypeColor = (type: string) => {
  switch (type) {
    case "grass":
      return "#87C873";
    case "fire":
      return "#FC8D03";
    case "water":
      return "#94BDE1";
    case "bug":
      return "#6F7EB3";
    case "poison":
      return "#AA91C9";
    case "ground":
      return "#A9865B";
    case "electric":
      return "#E8CD59";
    case "fairy":
      return "#E67B7B";
    case "fighting":
      return "#BABC5C";
    case "psychic":
      return "#4F8682";
    case "rock":
      return "#886C47";
    case "ghost":
      return "#B7AEF1";
    default:
      return "#DBDBDB";
  }
};
const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
const saveLocalStorage = (item: any) => {
  const test = JSON.parse(localStorage.getItem("prod") || "[]");
  test.push(item);
  localStorage.setItem("prod", JSON.stringify(test));
};

const deleteDataLocalStorage = (username: string) => {
  let prod = JSON.parse(localStorage.getItem("prod") || "[]");
  prod = prod.filter(
    (item: { username: string }) => item.username !== username
  );
  localStorage.setItem("prod", JSON.stringify(prod));
  window.location.reload();
};

export {
  getTypeColor,
  capitalizeFirstLetter,
  saveLocalStorage,
  deleteDataLocalStorage,
};
