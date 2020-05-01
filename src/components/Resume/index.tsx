import React, { useState, useCallback, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { css } from '@emotion/core';

import Title from '@shared/Title';
import Seo from '@shared/Seo';
import { ResumeBody } from '@models/resume';
import resumeData from '@constants/resume';
import useBuild from '@hooks/useBuild';
import useDownload from '@hooks/useDownload';

const Resume = (): React.ReactElement => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const [resume] = useBuild(resumeData as ResumeBody, rendered);

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(1);

  const handleLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
  }, []);

  const handlePrevPage = useCallback(() => {
    setPageNumber((num) => Math.max(num - 1, 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setPageNumber((num) => Math.min(num + 1, numPages));
  }, [numPages]);

  const [downloadRequested, setDownloadRequested] = useState<boolean>(false);

  useDownload(resumeData as ResumeBody, downloadRequested, setDownloadRequested);

  return (
    <section>
      <Title>
        <Seo title="Resume" description="My Resume" showTitle />
        <hr />
      </Title>
      {resume != null ? (
        <>
          {numPages !== 1 ? (
            <div css={css`display: flex; justify-content: space-between; margin-bottom: 20px;`}>
              <button type="button" disabled={pageNumber === 1} onClick={handlePrevPage}>
                <span role="img" aria-label="Previou page">
                  👈
                </span>
              </button>
              <button type="button" disabled={pageNumber === numPages} onClick={handleNextPage}>
                <span role="img" aria-label="Next page">
                  👉
                </span>
              </button>
            </div>
          ) : null}

          <Document file={resume} onLoadSuccess={handleLoadSuccess} css={css`position: relative; overflow-x: auto;`}>
            <Page pageNumber={pageNumber} />
          </Document>

          <div css={css`margin-top: 20px;`}>
            <button type="button" onClick={() => { setDownloadRequested(true); }}>
              Download
            </button>
            <p>
              <small>
                You can
                {' '}
                <strong>NOT</strong>
                {' '}
                download the file in iOS Safari.
              </small>
            </p>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Resume;
