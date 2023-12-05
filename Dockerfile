FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN yarn install --omit=dev
# RUN npm install -g npm@10.2.1
# RUN yarn postinstall

COPY ./ ./

RUN npx prisma generate
 
CMD ["yarn", "start"]
