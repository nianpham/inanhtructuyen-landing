const BASE_URL = "https://api.farmcode.io.vn/v1";
// const BASE_URL = 'http://localhost:8000/api/v1';

const PRODUCT = {
  GET_ALL: `${BASE_URL}/inanhtructuyen/product/`,
  GET_PRODUCT_BY_ID: `${BASE_URL}/inanhtructuyen/product`,
};

const BLOG = {
  GET_ALL: `${BASE_URL}/inanhtructuyen/blog/`,
};

const SLIDER = {
  GET_ALL_SLIDER: `${BASE_URL}/ielts-viet/slider`,
};

export const API = {
  PRODUCT,
  BLOG,
  SLIDER,
};
