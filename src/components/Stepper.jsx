import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeleteIcon from "@mui/icons-material/Delete";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import EventIcon from "@mui/icons-material/Event";
import PaymentIcon from "@mui/icons-material/Payment";

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
    backgroundColor: "#e5e7eb",
    borderRadius: 1,
  },
}));

function StepIconComponent(props) {
  const { active, completed, className, icon } = props;
  const iconElement = stepIcons[icon];

  return (
    <div
      className={clsx(
        "w-8 h-8 flex items-center justify-center rounded-full",
        className,
        {
          "bg-green-500 text-white": completed,
          "bg-green-100 text-green-600 border border-green-500": active,
          "bg-gray-300 text-gray-700": !active && !completed,
        }
      )}
    >
      {iconElement}
    </div>
  );
}

export default function StepperComp() {
  return (
    <div className="bg-white py-6 px-4 rounded-lg shadow-md overflow-x-auto">
      <div className="min-w-[600px] sm:min-w-0">
        <Stepper alternativeLabel activeStep={2} connector={<ColorConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIconComponent}>
                <span className="text-sm">{label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
