import { Context, ReactNode } from 'react';

export function ContextModifier<T>(props: { context: Context<T>, value: (value: T) => T, children: ReactNode }) {
  const { context: Context, value: apply, children } = props;
  return (
    <Context.Consumer children={(value: T) => <Context.Provider value={apply(value)} children={children}/>}/>
  );
}
