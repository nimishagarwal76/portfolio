FROM node:14.16.0

RUN runDeps="openssl ca-certificates patch" \
 && apt-get update \
 && apt-get install -y --no-install-recommends $runDeps \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /opt/frontend \
 && chown -R node /opt/frontend

WORKDIR /opt/frontend/
COPY . .

USER node

RUN RAZZLE_API_PATH=http://localhost:8080/Plone RAZZLE_INTERNAL_API_PATH=http://localhost:8080/Plone yarn \
 && RAZZLE_API_PATH=http://localhost:8080/Plone RAZZLE_INTERNAL_API_PATH=http://localhost:8080/Plone yarn build

EXPOSE 3000 3001 4000 4001

CMD ["yarn", "start:prod"]