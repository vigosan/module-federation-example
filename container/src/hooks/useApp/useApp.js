import { useContext } from 'react';
import { AppContext } from '../../contexts';

function useApp() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useApp must be used withinh a AppProvider');
  }

  return context;
}

export default useApp;
