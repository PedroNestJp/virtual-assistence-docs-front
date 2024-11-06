// src/pages/HomePage.js
import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import FileUpload from '../components/FileUpload';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const Result = styled.div`
  margin-top: 1em;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  max-width: 600px;
  text-align: center;
`;

const HomePage = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setResult(response.data.summary); // Exibe o resumo retornado do backend
        } catch (error) {
            setResult("Erro ao processar o documento.");
        }
    };

    return (
        <Container>
            <h1>Assistente Virtual de Documentos</h1>
            <FileUpload onFileChange={handleFileChange} />
            <Button onClick={handleSubmit} color="primary" size="large">
                Enviar Documento
            </Button>
            {result && <Result>{result}</Result>}
        </Container>
    );
};

export default HomePage;
