import React from 'react';

import { HeaderContext } from '@/providers/HeaderProviders';

const useHeader = () => {
  const context = React.useContext(HeaderContext);

  if (!context) {
    throw new Error(
      'useHeaderVisibility must be used within HeaderVisibilityProvider'
    );
  }
  return context;
};

export default useHeader;
