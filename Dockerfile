FROM node:slim

# Add Tini
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

ENV NODE_ENV=production
RUN mkdir /app
COPY . /app

WORKDIR /app
EXPOSE 3001

RUN chown -R node /app
# Tini is now available at /sbin/tini
ENTRYPOINT ["/tini", "--"]
# Run your program under Tini
CMD ["node", "/app/index.js"]

# At the end, set the user to use when running this image
USER node