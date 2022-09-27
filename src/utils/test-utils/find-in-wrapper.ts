//@ts-ignore
import {VueWrapper, DOMWrapper} from '@vue/test-utils';

export function findInWrapper(host: VueWrapper) {
  let wrapper = host;
  return {
    refresh: (host: VueWrapper): void => {
      wrapper = host;
    },
    ByTestId: (testId: string): DOMWrapper<HTMLElement> => {
      return wrapper.find(`[data-testid=${testId}]`);
    },
    AllByTestId: (testId: string): DOMWrapper<HTMLElement>[] => {
      return wrapper.findAll(`[data-testid=${testId}]`);
    }
  }; 
}