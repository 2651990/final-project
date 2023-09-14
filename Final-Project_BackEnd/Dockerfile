FROM node:lts
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000

CMD yarn install && \
    yarn prisma migrate deploy &&\
    yarn prisma generate &&\
    yarn seed &&\
    yarn build &&\
    yarn start:prod