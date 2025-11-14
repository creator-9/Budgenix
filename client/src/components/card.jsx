// Simple arrow icons as components
function ArrowUpIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
}

function ArrowDownIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}

export function StatCard({ title, value, trend, trendText }) {
  const isPositive = trend === "up";

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-zinc-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-white">
            ${value.toLocaleString()}
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            {isPositive ? (
              <ArrowUpIcon
                className={
                  "w-4 h-4 " + (isPositive ? "text-green-400" : "text-red-400")
                }
              />
            ) : (
              <ArrowDownIcon
                className={
                  "w-4 h-4 " + (isPositive ? "text-green-400" : "text-red-400")
                }
              />
            )}
            <span
              className={
                "text-sm " + (isPositive ? "text-green-400" : "text-red-400")
              }
            >
              {trendText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
