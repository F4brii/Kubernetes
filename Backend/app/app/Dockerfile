FROM python:3
#Variables de entorno
ENV PYTHONUNBUFFERED 1
#Crea y define directorio de trabajo en el contenero en la raiz
WORKDIR /code

#Copia al contenedor el archivo de requerimientos
COPY requirements.txt /code/
#Instala los requerimientos para el proyecto
RUN pip install -r requirements.txt

CMD [ "gunicorn", "rest.wsgi:application", "-t",  "3600", "-w", "2", "-b", ":8000" ]