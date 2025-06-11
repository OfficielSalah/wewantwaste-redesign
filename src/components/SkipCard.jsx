export default function SkipCard({ skip }) {
  return (
    <div className="group p-4 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col space-y-3">
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

      <button className="mt-auto w-full px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200">
        Select This Skip
      </button>
    </div>
  );
}
