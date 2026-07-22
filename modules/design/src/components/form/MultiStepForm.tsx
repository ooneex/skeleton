import { ButtonBack } from "@module/design/components/button/ButtonBack";
import { ButtonNext } from "@module/design/components/button/ButtonNext";
import { ButtonSave } from "@module/design/components/button/ButtonSave";
import { CardContent } from "@module/design/components/card/CardContent";
import { CardDescription } from "@module/design/components/card/CardDescription";
import { CardFooter } from "@module/design/components/card/CardFooter";
import { CardHeader } from "@module/design/components/card/CardHeader";
import { CardTitle } from "@module/design/components/card/CardTitle";
import { cn } from "@module/design/utils/cn";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { type ReactNode, useState } from "react";
import useMeasure from "react-use-measure";

type StepType = {
  title: string;
  description: string;
  content: ReactNode;
};

type MultiStepFormPropsType = {
  steps: StepType[];
  onSubmit: () => void;
  onBack?: () => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  submittingLabel?: string;
};

const variants = {
  initial: (direction: number) => ({ x: `${110 * direction}%`, opacity: 0 }),
  animate: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({ x: `${-110 * direction}%`, opacity: 0 }),
};

export const MultiStepForm = ({
  steps,
  onSubmit,
  isSubmitting = false,
  submitLabel = "Save",
  submittingLabel = "Saving...",
}: MultiStepFormPropsType) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [ref, bounds] = useMeasure();

  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;

  const nextStep = () => {
    if (isLastStep) {
      onSubmit();
      return;
    }
    setDirection(1);
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
      <motion.div layout>
        <CardHeader className="flex flex-row items-start justify-between space-y-0 px-6 py-4">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-xl">{steps[currentStep]?.title}</CardTitle>
            <CardDescription>{steps[currentStep]?.description}</CardDescription>
          </div>
          <div className="flex items-center gap-1.5 pt-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentStep === index ? "w-8 bg-primary" : "w-2 bg-primary/20",
                )}
              />
            ))}
          </div>
        </CardHeader>

        <motion.div
          animate={{ height: bounds.height > 0 ? bounds.height : "auto" }}
          className="relative overflow-hidden"
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        >
          <div ref={ref}>
            <CardContent className="px-6 py-2 relative">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={currentStep}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full"
                  custom={direction}
                >
                  {steps[currentStep]?.content}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </div>
        </motion.div>

        <CardFooter className="flex justify-between items-center border-t py-4 px-6">
          <ButtonBack onClick={prevStep} disabled={currentStep === 0} />
          {isLastStep ? (
            <ButtonSave onClick={nextStep} disabled={isSubmitting}>
              {isSubmitting ? submittingLabel : submitLabel}
            </ButtonSave>
          ) : (
            <ButtonNext onClick={nextStep}>Continue</ButtonNext>
          )}
        </CardFooter>
      </motion.div>
    </MotionConfig>
  );
};

MultiStepForm.displayName = "MultiStepForm";
