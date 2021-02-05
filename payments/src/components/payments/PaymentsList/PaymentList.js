import React from "react";
import { payments } from "../../../data";

function PaymentsList() {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {payments.map(({ id, recipient, destination, amount, currency }) => (
          <li className="py-4 hover:bg-gray-50 cursor-pointer" key={id}>
            <div className="flex space-x-3">
              <span className="relative inline-block">
                <img
                  className="w-10 h-10 rounded-full"
                  src={recipient.avatar}
                  alt=""
                />
                <img
                  className="absolute bottom-0 right-0 block w-3 h-3 rounded-full ring-2 ring-white "
                  src={`https://flagcdn.com/w40/${destination.country}.png`}
                  alt=""
                />
              </span>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{recipient.name}</h3>
                  <p className="text-sm text-gray-500">{`${amount} ${currency}`}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {`${currency} account ending in ${destination.accoutNumber}`}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentsList;
