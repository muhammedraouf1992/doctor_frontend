import GlobalApi from "@/app/_utils/GlobalApi";
import React from "react";
import DoctorDetail from "../_components/DoctorDetail";

const getSingleDoctor = async (id) => {
  const data = await GlobalApi.getDoctorById(id);
  return data;
};
const SingleDoctorPage = async ({ params }) => {
  const { data } = await getSingleDoctor(params.id);
  const doctor = data.data;

  return (
    <div className="max-w-[1200px] mx-auto">
      <DoctorDetail doctor={doctor} />
    </div>
  );
};

export default SingleDoctorPage;
