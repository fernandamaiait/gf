// import { GlobalContext } from '../context/GlobalContext';
// import ScreenStatus from '../context/ScreenStatus';
// import { useContext } from 'react';
// import ErrorStripe from '../design-system/ErrorStripe/ErrorStripe';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import ScreenStatus from '../context/ScreenStatus';
import CircularProgressIndicator from '../design-system/CircularProgressIndicator/CircularProgressIndicator';
import ErrorStripe from '../design-system/ErrorStripe/ErrorStripe';

export default function ScreenStatusHandler() {
  const { screenStatus, errorMessage, setGlobalState, ...rest } = useContext(GlobalContext);

  return (
    <div>
      {screenStatus === ScreenStatus.loading && <CircularProgressIndicator />}
      {screenStatus === ScreenStatus.error && (
        <ErrorStripe
          text={errorMessage!}
          onPressCloseButton={() =>
            setGlobalState({
              ...rest,
              errorMessage: null,
              screenStatus: ScreenStatus.idle
            })
          }
        />
      )}
    </div>
  );
}
