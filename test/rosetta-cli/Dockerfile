# This dockerfile provides an image that installs the official Rosetta CLI
# https://github.com/coinbase/rosetta-cli

FROM golang
USER root

WORKDIR /data
ARG rootdatadir=/data
ARG version_tag=v0.7.3

ENV OFFLINE_HOST=digibyte_offline
ENV ONLINE_HOST=digibyte_online
ENV OFFLINE_PORT=1337
ENV ONLINE_PORT=1338

RUN curl -sSfL https://raw.githubusercontent.com/coinbase/rosetta-cli/$version_tag/scripts/install.sh | sh -s

COPY test/rosetta-cli/docker-entrypoint.sh /data/docker-entrypoint.sh
COPY test/rosetta-cli/digibyte.ros /data/digibyte.ros

ENTRYPOINT ["./docker-entrypoint.sh"]
