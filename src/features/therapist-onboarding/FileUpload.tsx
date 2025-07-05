
import React, { useRef, useState } from "react";
import { FaCheck, FaTrash, FaTimes } from "react-icons/fa";

interface FileUploadProps {
  label?: string;
  uploading?: boolean;
  uploadedFile?: File | null;
  progress?: number;
  onRemove?: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label = "Upload Resume",
  uploading,
  uploadedFile,
  progress = 100,
  onRemove,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadingState, setUploading] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (f: File) => {
    setUploading(true);
    setTimeout(() => {
      setFile(f);
      setUploading(false);
    }, 1500);
  };

  return (
    <div>
      <label className="block text-[#201047] text-[15px] font-semibold mb-1">
        {label}
      </label>
      {!file && (
        <div className="border-2 border-dashed border-[#B2A8D2] bg-white rounded-lg px-3 py-8 flex flex-col items-center justify-center text-[#7B69B9] text-base text-center cursor-pointer transition hover:border-[#6555A9] mb-3"
          onClick={() => inputRef.current?.click()}
          style={{ minHeight: 160 }}
        >
          <input
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.canvas"
            className="hidden"
            ref={inputRef}
            onChange={e => {
              if (e.target.files?.[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />
          <div>
            <div className="mb-2 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mx-auto text-[#6555A9]"
              >
                <path
                  d="M16 16l-4-4-4 4M12 12v9"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x={3}
                  y={3}
                  width={18}
                  height={18}
                  rx={2}
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
            </div>
            <p>
              Choose a file and or drag and drop it here
              <br />
              <span className="text-xs text-[#6F5E97]">
                Pdf, png, jpeg, Word, canvas files are supported &bull; Size &lt; 12MB
              </span>
            </p>
            <button
              type="button"
              className="border border-[#6555A9] rounded px-5 py-2 mt-2 text-[#6555A9] hover:bg-[#F8F2FA] transition font-medium"
              onClick={e => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
            >
              Browse Files
            </button>
          </div>
        </div>
      )}

      {file && (
        <div className="bg-white border border-[#DDD3F5] rounded-lg px-3 py-3 flex items-center mb-3 relative shadow transition">
          <div className="flex-1">
            <div className="font-medium text-[#24124D] text-[15px]">{file.name}</div>
            <div className="flex items-center gap-2 text-xs text-[#7B69B9]">
              {(file.size / 1024).toFixed(1)} KB
              {uploadingState ? <span>&middot; Uploading...</span> : <span>&middot; Uploaded</span>}
            </div>
            <div className={"h-1 rounded-full mt-2 transition-all duration-300 " + (uploadingState ? "bg-[#B2A8D2]" : "bg-[#6FDF96]")}>
              <div
                className={uploadingState ? "bg-[#7B69B9] h-1 rounded-full transition-all duration-700" : "bg-[#6FDF96] h-1 rounded-full"}
                style={{ width: uploadingState ? "55%" : "100%" }}
              />
            </div>
          </div>
          <div className="flex items-center ml-2 gap-1">
            {!uploadingState && (
              <button
                type="button"
                className="text-[#FF6868] hover:text-red-600 p-2"
                title="Remove"
                onClick={() => {
                  setFile(null);
                  onRemove?.();
                }}
              >
                {FaTrash({ size: 18 }) as React.ReactElement}
              </button>
            )}
            {!uploadingState && (
              <span className="inline-block ml-2 text-[#42A948]">
                {FaCheck({ size: 18 }) as React.ReactElement}
              </span>
            )}
            {uploadingState && (
              <span className="inline-block ml-2 text-[#B2A8D2]">
                {FaTimes({ size: 18 }) as React.ReactElement}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
