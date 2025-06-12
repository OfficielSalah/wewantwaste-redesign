import StepperComp from "../components/Stepper";
import SkipCard from "../components/SkipCard";
import ThemeToggle from "../components/ThemeToggle";
import { useEffect, useState } from "react";

export default function SkipSize() {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [activeStep, setActiveStep] = useState(2);

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
    <div className="max-w-screen-2xl mx-auto px-4 py-8 transition-colors duration-300 min-h-screen">
      <ThemeToggle />
      <StepperComp activeStep={activeStep} />
      {activeStep === 1 ? (
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          What type of waste are you disposing of?
        </p>
      ) : null}
      {activeStep === 2 ? (
        <>
          <div className="text-center mt-12 mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
              Choose Your Skip Size
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Select the skip size that best suits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6 mb-40">
            {skips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                onSelect={setSelectedSkip}
                selectedSkip={selectedSkip}
              />
            ))}
          </div>
          {selectedSkip ? (
            <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-700 z-50 shadow-xl">
              <div className="bg-gray-50 dark:bg-gray-800 text-[13px] text-gray-600 dark:text-gray-300 text-center px-4 py-2 border-b dark:border-gray-700">
                Imagery and information shown throughout this website may not
                reflect the exact shape or size specification. Colours may vary.
                Options and/or accessories may be featured at additional cost.
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-3 gap-4">
                <div className="text-md font-medium text-gray-800 dark:text-gray-100 text-center md:text-left">
                  You’ve selected a{" "}
                  <span className="text-green-600 dark:text-green-400 font-semibold">
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
                    onClick={() => {
                      setSelectedSkip(null);
                      setActiveStep(1);
                    }}
                    className="px-4 py-2 text-xl rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
          ) : null}
        </>
      ) : null}
    </div>
  );
}
