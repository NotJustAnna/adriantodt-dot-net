import { StepProps } from '@mui/material';
import { ContextModifier } from '../ContextModifier';
import Step from '@mui/material/Step';
import { Context } from 'react';
// @ts-ignore
import _StepperContext from '@mui/material/Stepper/StepperContext';

const StepperContext: Context<any> = _StepperContext;
StepperContext.displayName = 'StepperContext';

/**
 * This is a workaround for making more than one Step active at the same time.
 * @param props
 * @constructor
 */
export default function ActiveStep(props: StepProps) {
  return (
    <ContextModifier context={StepperContext} value={(value) => ({ ...value, activeStep: props.index ?? value.activeStep })}>
      <Step {...props}/>
    </ContextModifier>
  );
}
