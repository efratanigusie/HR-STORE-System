export default function RecentOrders() {
  const orders = [
    { id: "#1024", customer: "Alice", amount: "$120", status: "Paid" },
    { id: "#1025", customer: "Bob", amount: "$80", status: "Pending" },
    { id: "#1026", customer: "John", amount: "$210", status: "Paid" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Recent Orders
      </h2>

      <div className="space-y-4">
        {orders.map((o) => (
          <div
            key={o.id}
            className="
    flex justify-between items-center
    border-b border-white/10 pb-3
    hover:bg-white/5 rounded-lg px-2 py-2
    transition
  "
          >
            <div>
              <p className="font-medium dark:text-white">{o.customer}</p>
              <p className="text-sm text-gray-500">{o.id}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold">{o.amount}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full
                  ${
                    o.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
              >
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
