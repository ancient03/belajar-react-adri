import React from "react";
import Icon from "../Elements/Icon";

function CardExpense(props) {
  const { expense } = props;

  const getIcon = (category) => {
    switch (category) {
      case "Housing": return <Icon.House />;
      case "Food": return <Icon.Food />;
      case "Transportation": return <Icon.Transport />;
      case "Entertainment": return <Icon.Gamepad />;
      case "Shopping": return <Icon.Shopping />;
      case "Others": return <Icon.Other />;
      default: return <Icon.Other />;
    }
  };

  const isUp = expense.arrow === "up" || expense.percentage >= 15;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-05">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="bg-special-bg text-gray-02 p-3 rounded-lg flex items-center justify-center">
            {getIcon(expense.category)}
          </div>
          <div className="ms-4">
            <div className="text-gray-02 font-bold mb-1">{expense.category}</div>
            <div className="font-bold text-xl">${expense.amount}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end font-semibold text-sm mb-1">
            {expense.percentage}% 
            <span className={`ms-1 ${isUp ? "text-special-red" : "text-special-green"}`}>
              {isUp ? <Icon.ArrowUp size={16} /> : <Icon.ArrowDown size={16} />}
            </span>
          </div>
          <div className="text-xs text-gray-03">Compare to the last month</div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-b border-gray-05 mb-4"></div>

      {/* List */}
      <div>
        {expense.expenses && expense.expenses.length > 0 ? (
          expense.expenses.map((item, index) => (
            <div key={item.id || index} className="flex justify-between items-center py-2 border-b border-gray-05 last:border-0">
              <div className="font-bold text-gray-02 text-sm">
                {item.name || item.transactionName || "Item"}
              </div>
              <div className="text-right">
                <div className="font-bold text-sm mb-1">${item.amount}</div>
                <div className="text-xs text-gray-03">{item.date}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-03 text-sm py-2">No expenses</div>
        )}
      </div>
    </div>
  );
}

export default CardExpense;
