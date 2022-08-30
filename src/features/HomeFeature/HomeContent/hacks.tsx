import { Context, ReactNode } from 'react';
// @ts-ignore
import _StepperContext from '@mui/material/Stepper/StepperContext';
import { StepProps } from '@mui/material';
import Step from '@mui/material/Step';

export const StepperContext: Context<object> = _StepperContext;

StepperContext.displayName = 'StepperContext';

export function StepperContextModifier(props: { apply: (context: object) => object, children: ReactNode }) {
  return (
    <StepperContext.Consumer>
      {(context) => <StepperContext.Provider value={props.apply(context)}>{props.children}</StepperContext.Provider>}
    </StepperContext.Consumer>
  );
}

/**
 * This is a workaround for making more than one Step active at the same time.
 * @param props
 * @constructor
 */
export function ActiveStep(props: StepProps) {
  return (
    <StepperContextModifier apply={(context) => ({ ...context, activeStep: props.index })}>
      <Step {...props}/>
    </StepperContextModifier>
  );
}
