FROM node

WORKDIR /usr/src/

COPY . .

RUN npm install

EXPOSE 5000

RUN npm run build

RUN npx prisma generate 

CMD ["npm", "start"]