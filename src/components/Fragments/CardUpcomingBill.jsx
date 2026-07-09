import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from '@mui/material/CircularProgress';

function CardUpcomingBill(props) {
  const { data, isLoading } = props;

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          <div className="flex flex-col justify-around h-full">
            {isLoading ? (
              <div className="flex flex-col justify-center items-center h-full text-primary">
                <CircularProgress color="inherit" size={50} enableTrackSlot />
                <div className="mt-2">Loading Data</div>
              </div>
            ) : (
              (Array.isArray(data) ? data : []).map((item) => {
                let iconComponent = item.icon;
                if (typeof item.icon === 'string' || !item.icon) {
                  const lowerName = (item.name || '').toLowerCase();
                  if (lowerName.includes("figma")) iconComponent = <Icon.Figma />;
                  else if (lowerName.includes("adobe")) iconComponent = <Icon.Adobe />;
                  else iconComponent = <Icon.Other />;
                }
                return (
                  <div key={item.id} className="flex justify-between pt-3 pb-3">
                    <div className="flex">
                      <div className="bg-special-bg p-4 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs">{item.month}</span>
                        <span className="text-2xl font-bold">{item.date}</span>
                      </div>
                      <div className="ms-10">
                        {iconComponent}
                        <span className="font-bold ms-2">{item.name}</span>
                        <br />
                        <span className="text-xs">Last Charge - {item.lastCharge}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold">
                        ${item.amount}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        }
      />
    </>
  );
}

export default CardUpcomingBill;
