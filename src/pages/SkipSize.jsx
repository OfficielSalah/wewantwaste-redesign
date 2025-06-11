import StepperComp from "../components/Stepper";
import SkipCard from "../components/SkipCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [skips, setSkips] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setSkips(data);
      });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8">
      <StepperComp />
      <div className="text-center mt-12 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Choose Your Skip Size
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Select the skip size that best suits your needs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
        {skips.map((skip) => (
          <SkipCard key={skip.id} skip={skip} />
        ))}
      </div>
    </div>
  );
}
