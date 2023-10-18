# Use uma imagem base oficial do Python
FROM python:3.11.2

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo de requisitos para o contêiner
COPY requirements.txt .

# Instale as dependências do seu projeto
RUN pip install -r requirements.txt

# Copie todo o conteúdo do diretório local para o contêiner
COPY . .

# Exponha a porta em que o aplicativo Flask irá ouvir (se aplicável)
EXPOSE 5000

# Comando para iniciar o aplicativo (ajuste conforme seu aplicativo)
CMD ["python", "app.py"]