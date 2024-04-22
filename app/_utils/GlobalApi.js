const { default: axios } = require("axios");

const api_key = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${api_key}`,
  },
});

const getCategory = () => axiosClient.get("/categories?populate=*");
const getDoctor = () => axiosClient.get("/doctors?populate=*");
const getDoctorByCategory = (category) =>
  axiosClient.get(
    "/doctors?filters[categories][name][$in]=" + category + "&populate=*"
  );
const getDoctorById = (id) => axiosClient.get("/doctors/" + id + "?populate=*");

const bookAppointment = (data) => axiosClient.post("/appointments", data);

const getUserBookingList = (userEmail) =>
  axiosClient.get(
    "/appointments?[filters][email][$eq]=" +
      userEmail +
      "&populate[doctors][populate][imageUrl][populate][0]=url&populate=*"
  );
const deleteBooking = (id) => axiosClient.delete(`/appointments/${id}`);
export default {
  getCategory,
  getDoctor,
  getDoctorByCategory,
  getDoctorById,
  bookAppointment,
  getUserBookingList,
  deleteBooking,
};
