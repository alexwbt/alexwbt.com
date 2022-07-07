FROM jenkins/jenkins:lts

USER root

# awscli
RUN apt-get update
RUN apt-get install python3-pip groff -y
RUN pip3 install awscli --upgrade

# nodejs npm
ENV NODE_VERSION=16.15.1
RUN apt-get install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

# yarn
RUN npm install yarn --location=global
RUN yarn --verison

USER jenkins
