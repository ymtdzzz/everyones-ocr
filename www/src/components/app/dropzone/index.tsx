import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { FileType, InputFile, ocr } from "everyones-ocr";

const Container = styled.div`
  border: 0.375rem dashed #2699fb76;
  border-radius: 1.125rem;
  min-height: 50vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #7f7f7f5d;
  padding: 0 50px;
`;

const inputHandler = (file: File): void => {
  const reader = new FileReader();
  reader.onload = () => {
    const fileType = getFileType(file.type);
    const { result } = reader;
    if (result instanceof ArrayBuffer && fileType !== null) {
      const buffer = new Uint8Array(result);
      const inputFile = InputFile.new(fileType, buffer);
      ocr(inputFile);
    }
  };
  reader.readAsArrayBuffer(file);
};

const getFileType = (fileType: string): FileType | null => {
  switch (fileType) {
    case "image/png":
      return FileType.Png;
    case "image/jpg":
    case "image/jpeg":
      return FileType.Jpeg;
    default:
      return null;
  }
};

const DropZone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  useEffect(() => {
    acceptedFiles.map(file => {
      inputHandler(file);
    });
  }, [acceptedFiles]);

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      <Description>
        Drag & drop some fles here, or click to select files
      </Description>
    </Container>
  );
};

export default DropZone;
