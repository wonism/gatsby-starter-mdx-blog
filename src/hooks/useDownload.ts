import { Dispatch, SetStateAction } from 'react';
import { useObservable, useSubscription } from 'observable-hooks';
import { EMPTY, from } from 'rxjs';
import { filter, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import equal from 'fast-deep-equal';

import { ResumeBody } from '@models/resume';
import { generatePdf } from '@utils/pdf';
import { downloadFile } from '@utils/data';

const useDownload = (
  body: ResumeBody,
  requested: boolean,
  setRequested: Dispatch<SetStateAction<boolean>>
) => {
  const preview$ = useObservable(
    (inputs$) => inputs$.pipe(
      filter(([requested]) => requested),
      distinctUntilChanged(([, prev], [, curr]) => equal(prev, curr)),
      switchMap(([, body]) => from(generatePdf(body))
        .pipe(
          tap(downloadFile),
          tap(() => { setRequested(false); }),
          catchError((error) => {
            const message = error.response?.message ?? error.message;

            alert(message);

            return EMPTY;
          })
        )
      )
    ),
    [requested, body] as const
  );

  useSubscription(preview$);
};

export default useDownload;
