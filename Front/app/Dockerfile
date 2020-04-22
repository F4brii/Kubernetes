FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app

# Copying dependencies
COPY ./app/package*.json /app/

#Installind dependencies
RUN npm install

COPY ./app/ /app/

CMD ["npm", "run", "start"]
