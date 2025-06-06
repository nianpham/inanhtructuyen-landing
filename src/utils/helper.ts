const formatVND = (money: string) => {
  const number = Number(money);
  if (isNaN(number)) {
    return "Invalid number";
  }
  return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

const upPrice = (money: string) => {
  const number = Number(money);
  if (isNaN(number)) {
    return "Invalid number";
  }
  return (number + 50000).toString();
};

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

const getLastFourChars = (input: any) => {
  return input ? input.slice(-4) : "";
};

const convertSpacesToDash = (input: string) => {
  return input?.trim()?.replace(/\s+/g, "-");
};

const calculateTotal = (money: string, ship: any, voucher: any) => {
  const number = Number(money);
  if (ship || voucher) {
    const money = Number(ship);
    const discount = (number + money) * (Number(voucher) / 100);
    const result = number + money - discount;
    return result.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  if (isNaN(number)) {
    return "Invalid number";
  }
  return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

const calculateTotalNumber = (money: string, ship: any, voucher: any) => {
  const number = Number(money);
  if (ship || voucher) {
    const money = Number(ship);
    const discount = (number + money) * (Number(voucher) / 100);
    const result = number + money - discount;
    return result;
  }
  if (isNaN(number)) {
    return "Invalid number";
  }
  return number;
};

const renderColor = (color: string) => {
  let result = "";
  switch (color) {
    case "black":
      result = "bg-black";
      break;
    case "white":
      result = "bg-white";
      break;
    case "gold":
      result = "bg-yellow-500";
      break;
    case "silver":
      result = "bg-gray-200";
      break;
    case "wood":
      result = "bg-yellow-900";
      break;
    default:
      break;
  }
  return result;
};

const renderCategory = (category: string) => {
  let result = "";
  switch (category) {
    case "Plastic":
      result = "Ép Plastic";
      break;
    case "Frame":
      result = "Khung Ảnh";
      break;
    case "Album":
      result = "Album";
      break;
    default:
      break;
  }
  return result;
};

const renderAlbumCover = (color: string) => {
  let result = "";
  switch (color) {
    case "bia-cung":
      result = "Bìa cứng";
      break;
    case "bia-da":
      result = "Bìa da";
      break;
    case "bia-goi":
      result = "Bìa gói";
      break;
    default:
      break;
  }
  return result;
};

const renderAlbumCore = (color: string) => {
  let result = "";
  switch (color) {
    case "can-mang":
      result = "Ruột cán màng";
      break;
    case "khong-can-mang":
      result = "Ruột không cán màng";
      break;
    case "trang-guong":
      result = "Ruột tráng gương";
      break;
    default:
      break;
  }
  return result;
};

const renderCategory2 = (category: string) => {
  let result = "";
  switch (category) {
    case "Plastic":
      result = "Ép Plastic";
      break;
    case "Frame":
      result = "Khung Ảnh";
      break;
    case "Album":
      result = "Album";
      break;
    default:
      break;
  }
  return result;
};

export const HELPER = {
  formatVND,
  formatDate,
  getLastFourChars,
  convertSpacesToDash,
  upPrice,
  calculateTotal,
  calculateTotalNumber,
  renderColor,
  renderAlbumCover,
  renderAlbumCore,
  renderCategory,
  renderCategory2,
};
