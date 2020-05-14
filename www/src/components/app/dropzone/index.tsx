import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const Container = styled.div`
  border: 0.375rem dashed #2699FB76;
  border-radius: 1.125rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
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
`

const DropZone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

  const files = acceptedFiles.map(file => (
    <li>{file.name}</li>
  ))

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      <Description>Drag 'n' drop some fles here, or click to select files</Description>
      <ul>
        {files}
      </ul>
    </Container>
  )
}

export default DropZone
