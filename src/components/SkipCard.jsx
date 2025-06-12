import { CheckCircle } from "@mui/icons-material";
import clsx from "clsx";

export default function SkipCard({ skip, onSelect, selectedSkip }) {
  const isSelected = selectedSkip?.id === skip.id;

  return (
    <div
      className={clsx(
        "group p-4 rounded-2xl shadow-md transition-all duration-300 flex flex-col space-y-3 border",
        {
          "border-green-600 bg-green-50 shadow-green-200 dark:bg-green-900 dark:shadow-green-800":
            isSelected,
          "border-gray-200 bg-white hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-gray-900":
            !isSelected,
        }
      )}
    >
      <div className="relative">
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded">
          {skip.size} Yards
        </span>

        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-36 md:h-48 object-cover mb-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
        />

        {!skip.allowed_on_road && (
          <span className="absolute top-2 right-2 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 text-xs font-semibold px-2 py-1 rounded">
            Not Allowed On Road
          </span>
        )}

        {isSelected && (
          <CheckCircle className="absolute bottom-2 right-2 text-green-600 bg-white dark:bg-gray-900 rounded-full" />
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        {skip.size} Yard Skip
      </h3>

      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <li>{skip.hire_period_days} Day Hire</li>
        <li>
          <span className="font-semibold text-lg text-green-700 dark:text-green-400">
            £{skip.price_before_vat}
          </span>
        </li>
      </ul>

      <button
        className={clsx(
          "mt-auto px-4 py-2 rounded transition font-medium",
          isSelected
            ? "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        )}
        onClick={() => onSelect(skip)}
        disabled={isSelected}
      >
        {isSelected ? "Selected" : "Select this skip"}
      </button>
    </div>
  );
}
