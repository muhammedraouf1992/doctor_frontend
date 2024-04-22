import GlobalApi from "@/app/_utils/GlobalApi";
import React from "react";
import DoctorList from "../_components/DoctorList";

const getStrapiData = async (category) => {
  const data = await GlobalApi.getDoctorByCategory(category);
  return data;
};
const SingleCategory = async ({ params }) => {
  const { data } = await getStrapiData(params.cname);

  return (
    <div>
      <DoctorList doctorList={data.data} heading={params.cname} />
    </div>
  );
};

export default SingleCategory;
