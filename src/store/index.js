import { Store } from './Store';

export { StoreProvider, StoreContext } from './StoreProvider';
export { useStore, useStateSnapshot, useSelect } from './hooks';

export function createStore(initialState) {
  const store = new Store(initialState);
  return store;
}
