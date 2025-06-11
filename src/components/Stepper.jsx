import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import {
  LocationOn as LocationOnIcon,
  Delete as DeleteIcon,
  Inventory as InventoryIcon,
  LocalPolice as LocalPoliceIcon,
  Event as EventIcon,
  Payment as PaymentIcon,
} from "@mui/icons-material";

const stepIcons = {
  1: <LocationOnIcon fontSize="small" />,
  2: <DeleteIcon fontSize="small" />,
  3: <InventoryIcon fontSize="small" />,
  4: <LocalPoliceIcon fontSize="small" />,
  5: <EventIcon fontSize="small" />,
  6: <PaymentIcon fontSize="small" />,
};

const steps = [
  "Postcode",
  "Waste type",
  "Select skip",
  "Permit check",
  "Choose date",
  "Payment",
];

const ColorConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#22c55e",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#22c55e",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "var(--tw-border-color, #e5e7eb)", // Fallback to light if not overridden
    borderRadius: 1,
  },
}));

function StepIconComponent(props) {
  const { active, completed, className, icon } = props;
  const iconElement = stepIcons[icon];

  return (
    <div
      className={clsx(
        "w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300",
        className,
        {
          "bg-green-500 text-white": completed,
          "bg-green-100 text-green-600 border border-green-500 dark:bg-green-700 dark:text-white":
            active,
          "bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200":
            !active && !completed,
        }
      )}
    >
      {iconElement}
    </div>
  );
}

export default function StepperComp() {
  return (
    <div className="bg-white dark:bg-gray-800 py-6 px-4 rounded-lg shadow-md overflow-x-auto transition-colors duration-300">
      <div className="min-w-[600px] sm:min-w-0">
        <Stepper alternativeLabel activeStep={2} connector={<ColorConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIconComponent}>
                <span className="text-sm text-gray-800 dark:text-gray-100">
                  {label}
                </span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
