import 'focus-visible';
import { globalHistory } from '@reach/router';
import { pdfjs } from 'react-pdf';

import Layouts from './src/shared/Layouts';

export const onInitialClientRender = () => {
  let currentPath = document.location.pathname.replace(/\/$/, '');

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  globalHistory._onTransitionComplete();
  globalHistory.listen(({ location, action }) => {
    if (action !== 'PUSH') {
      return;
    }

    const newPath = location.pathname.replace(/\/$/, '');

    if (currentPath === newPath) {
      document.location.reload();
    } else {
      currentPath = newPath;
    }
  });
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location);

  window.scrollTo(...(currentPosition || [0, 0]));

  return false;
};

export const wrapPageElement = Layouts;
