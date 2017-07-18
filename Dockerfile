FROM node:4.3

RUN apt-get update
RUN apt-get install -y git

RUN git clone https://github.com/sandormiko/charts-sample.git
WORKDIR charts-sample
RUN npm install
RUN npm run build
CMD ["npm","start"]

