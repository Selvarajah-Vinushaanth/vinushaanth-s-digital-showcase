import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const CV_URL = import.meta.env.VITE_CV_URL || '';

export const ResumePreview = ({ isOpen, onClose }: ResumePreviewProps) => {
  const handleDownload = async () => {
    if (!CV_URL) return;
    try {
      const response = await fetch(CV_URL);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Vinushaanth_Selvarajah_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback: open in new tab if fetch fails
      window.open(CV_URL, '_blank');
    }
  };

  const handleOpenInNewTab = () => {
    if (!CV_URL) return;
    window.open(CV_URL, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 safe-area-inset"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[90vh] sm:h-[88vh] md:h-[90vh] glass-card rounded-xl sm:rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-2.5 sm:p-3 md:p-4 border-b border-glass-border bg-secondary/30">
              <h3 className="font-display font-semibold text-xs sm:text-sm md:text-lg truncate mr-2 flex-1">
                Vinushaanth's Resume
              </h3>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Button
                  variant="glass"
                  size="sm"
                  onClick={handleOpenInNewTab}
                  className="hidden sm:inline-flex min-h-[36px] text-xs sm:text-sm"
                >
                  <ExternalLink size={16} className="mr-1.5" />
                  Open in Tab
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close"
                  onClick={onClose}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl hover:bg-destructive/20 hover:text-destructive touch-target"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-secondary/20 min-h-0">
              {CV_URL ? (
                <iframe
                  src={`${CV_URL}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  className="w-full h-full border-0"
                  title="Resume Preview"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-4 sm:p-6">
                  <p className="text-muted-foreground text-sm sm:text-base mb-2">
                    CV URL not configured yet.
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Set <code className="px-1.5 sm:px-2 py-0.5 rounded bg-secondary text-primary text-[10px] sm:text-xs">VITE_CV_URL</code> in your <code className="px-1.5 sm:px-2 py-0.5 rounded bg-secondary text-primary text-[10px] sm:text-xs">.env</code> file.
                  </p>
                </div>
              )}
            </div>

            {/* Mobile bottom bar */}
            <div className="sm:hidden flex items-center gap-2 p-2.5 sm:p-3 border-t border-glass-border bg-secondary/30">
              <Button
                variant="glass"
                size="sm"
                onClick={handleOpenInNewTab}
                className="flex-1 min-h-[44px] text-xs touch-target"
              >
                <ExternalLink size={14} className="mr-1.5" />
                Open in Tab
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={handleDownload}
                className="flex-1 min-h-[44px] text-xs touch-target"
              >
                <Download size={14} className="mr-1.5" />
                Download
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
