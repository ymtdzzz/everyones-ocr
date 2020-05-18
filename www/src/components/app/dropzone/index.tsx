import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import * as wasm from 'everyones-ocr'

const Container = styled.div`
  border: 0.375rem dashed #2699FB76;
  border-radius: 1.125rem;
  min-height: 50vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
  }
`

const Description = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #7F7F7F5D;
  padding: 0 50px;
`

enum FileType {
  PNG,
  JPG,
}

interface InputData {
  fileType: FileType,
  contentData: ArrayBuffer
}

const DropZone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const reader = new FileReader();

  const getFileData = (file: File): InputData | null => {
    reader.onload = (_) => {
      const fileType = getFileType(file.type)
      const result = reader.result
      if (result instanceof ArrayBuffer) {
        return { fileType, contentData: result }
      } else {
        return null
      }
    }
    reader.readAsArrayBuffer(file)
  }

  const getFileType = (fileType: string): FileType | null => {
    switch (fileType) {
      case 'image/png':
        return FileType.PNG
      case 'image/jpg':
        return FileType.JPG
      default:
        return null
    }
  }

  useEffect(() => {
    reader.onload = (e) => {
      const result = reader.result
      if (typeof result === 'string') {
        wasm.greet(result)
      }
    }
    acceptedFiles.map(file => {
      console.log(file.type)
      // reader.readAsText(file)
    })
  }, [acceptedFiles])

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      <Description>Drag 'n' drop some fles here, or click to select files</Description>
    </Container>
  )
}

export default DropZone
