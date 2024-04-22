import React from "react";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "@/app/_utils/GlobalApi";
const getStrapiData = async () => {
  const data = await GlobalApi.getCategory();

  return data;
};
async function layout({ children }) {
  const { data } = await getStrapiData();
  const categoryList = data.data;
  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block">
        {/* Category  */}
        <CategoryList categoryList={categoryList} />
      </div>
      <div className="col-span-4 md:col-span-3">{children}</div>
    </div>
  );
}

export default layout;
