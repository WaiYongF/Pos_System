import React from 'react'
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

const Tables = () => {

  const [status, setStatus] = React.useState("all");

  const filteredTables = tables.filter((table) => {
    if (status === "all") {
      return true; // Show all tables when "All" is selected
        } else {
        // Show only tables where the table's status matches the selected status (e.g., "booked")
      return table.status.toLowerCase() === status.toLowerCase();
    }
  });


  return (
    <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
              Tables
            </h1>
          </div>

          <div className="flex items-center justify-around gap-4">
            <button
              onClick={() => setStatus("all")}
              className={`text-[#ababab] text-lg ${
                status === "all" && "bg-[#383838] rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              All
            </button>
            <button
              onClick={() => setStatus("booked")}
              className={`text-[#ababab] text-lg ${
                status === "booked" && "bg-[#383838] rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              Booked
            </button>
          </div>
        </div>
        

        <div className="flex flex-wrap gap-5 overflow-y-scroll scrollbar-hide h-[calc(80vh-2rem)]">
          {
          filteredTables.map((table) => {
            return (
              <TableCard
                key={table.id}
                name={table.name}
                status={table.status}
                initials={table.initial}
                seats={table.seats}
              />
          );
        })}
        </div>
        
        <BottomNav />
    </section>
  );
};

export default Tables