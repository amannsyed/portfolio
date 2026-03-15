import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const PdfViewerModal: React.FC<Props> = ({ isOpen, onClose, url }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(800);

  useEffect(() => {
    const updateWidth = () => {
      setPageWidth(Math.min(window.innerWidth - 64, 850));
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/80 backdrop-blur-sm">
      <div className="relative w-full max-w-7xl h-[90vh] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white z-10">
          <h3 className="font-bold text-slate-900">Curriculum Vitae</h3>
          
          {/* Pagination Controls */}
          {numPages && numPages > 1 ? (
            <div className="flex items-center gap-4 bg-slate-100 px-4 py-1.5 rounded-full">
              <button 
                onClick={() => setPageNumber(p => Math.max(1, p - 1))}
                disabled={pageNumber <= 1}
                className="p-1 text-slate-500 hover:text-indigo-600 disabled:opacity-50 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm font-medium text-slate-600">
                {pageNumber} of {numPages}
              </span>
              <button 
                onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
                disabled={pageNumber >= numPages}
                className="p-1 text-slate-500 hover:text-indigo-600 disabled:opacity-50 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          ) : null}

          <div className="flex items-center gap-3">
            <a 
              href={url} 
              download
              className="p-2 text-slate-500 hover:text-indigo-600 transition-colors"
              title="Download PDF"
            >
              <Download size={20} />
            </a>
            <a 
              href={url} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-indigo-600 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink size={20} />
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-red-500 transition-colors"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-auto relative flex justify-center py-8">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          )}
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.error('Error while loading document!', error);
              setLoading(false);
            }}
            loading={null}
            className="flex flex-col items-center shadow-lg bg-white"
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="max-w-full"
              width={pageWidth}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
