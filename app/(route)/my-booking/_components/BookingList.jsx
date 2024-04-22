import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";
import CancelAppointment from "./CancelAppointment";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

const BookingList = ({ expired, bookingList, updateRecord }) => {
  if (bookingList.length == 0) {
    return <p>there is no appointments to show</p>;
  }
  const onDelete = (item) => {
    GlobalApi.deleteBooking(item.id).then((res) => {
      console.log(res);
      if (res) {
        toast("Booking Delete Successfully!");
        updateRecord();
      }
    });
  };
  return (
    <div>
      {bookingList.length > 0 ? (
        bookingList.map((item, index) => (
          <div
            className=" flex gap-4 items-center border p-5 m-3 rounded-lg"
            key={item.id}
          >
            <Image
              src={
                item.attributes?.doctors?.data[0].attributes.imageUrl.data
                  .attributes.url
              }
              className="rounded-full h-[70px] w-[70px] object-cover"
              width={70}
              height={70}
              alt="doctor-image"
            />
            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-bold text-[18px] items-center flex justify-between">
                {item.attributes?.doctors.data[0].attributes.name}
                {!expired && (
                  <CancelAppointment onDelete={() => onDelete(item)} />
                )}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <MapPin className="text-primary h-5 w-5" />
                {item.attributes?.doctors.data[0].attributes.address}
              </h2>
              <h2 className="flex gap-2">
                <Calendar className="text-primary h-5 w-5" /> Appointment On:
                {moment(item.attributes.date).format("DD-MMM-YYYY")}
              </h2>
              <h2 className="flex gap-2">
                <Clock className="text-primary h-5 w-5" /> At Time :
                {item.attributes.time}
              </h2>
            </div>
          </div>
        ))
      ) : (
        <div className="h-[150px] w-full bg-slate-100 animate-pulse rounded-lg"></div>
      )}
    </div>
  );
};

export default BookingList;
