import CoreLoadable from 'react-loadable';
import Loading from './Loading';

/**
 * Loadable defaults
 * For to Avoid Repetition
 */
const Loadable = (opts: any) => {
  return CoreLoadable(
    Object.assign(
      {
        loading: Loading,
        delay: 300,
        timeout: 10000
      },
      opts
    )
  );
};

export default Loadable;
