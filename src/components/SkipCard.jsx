import { CheckCircle } from "@mui/icons-material";
import clsx from "clsx";

export default function SkipCard({ skip, onSelect, selectedSkip }) {
  const isSelected = selectedSkip?.id === skip.id;

  return (
    <div
      className={clsx(
        "group p-4 rounded-2xl shadow-md transition-all duration-300 flex flex-col space-y-3 border",
        {
          "border-green-600 bg-green-50 shadow-green-200": isSelected,
          "border-gray-200 bg-white hover:shadow-lg": !isSelected,
        }
      )}
    >
      <div className="relative">
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
          {skip.size} Yards
        </span>

        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-36 md:h-48 object-cover mb-4 bg-gray-50 rounded-xl"
        />

        {!skip.allowed_on_road && (
          <span className="absolute top-2 right-2 bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
            Not Allowed On Road
          </span>
        )}

        {isSelected && (
          <CheckCircle className="absolute bottom-2 right-2 text-green-600 bg-white rounded-full" />
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-800">{skip.size} Yard Skip</h3>

      <ul className="text-sm text-gray-600 space-y-1">
        <li>{skip.hire_period_days} Day Hire</li>
        <li>
          <span className="font-semibold text-lg text-green-700">
            £{skip.price_before_vat}
          </span>
        </li>
      </ul>

      <button
        className={clsx(
          "mt-auto px-4 py-2 rounded transition font-medium",
          isSelected
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        )}
        onClick={() => onSelect(skip)}
        disabled={isSelected}
      >
        {isSelected ? "Selected" : "Select this skip"}
      </button>
      {selectedSkip && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50 shadow-xl">
          <div className="bg-gray-50 text-[13px] text-gray-600 text-center px-4 py-2 border-b">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification. Colours may vary.
            Options and/or accessories may be featured at additional cost.
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-3 gap-4">
            <div className="text-md font-medium text-gray-800 text-center md:text-left">
              You’ve selected a{" "}
              <span className="text-green-600 font-semibold">
                {selectedSkip.size} Yard Skip
              </span>{" "}
              —
              <span className="ml-1">
                £{selectedSkip.price_before_vat} for{" "}
                {selectedSkip.hire_period_days} day hire
              </span>
            </div>

            <div className="flex justify-center md:justify-end gap-2">
              <button
                onClick={() => onSelect(null)}
                className="px-4 py-2 text-xl rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Back
              </button>
              <button
                onClick={() => {
                  alert("Continue to next step");
                }}
                className="px-4 py-2 text-xl rounded bg-green-600 text-white hover:bg-green-700 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
