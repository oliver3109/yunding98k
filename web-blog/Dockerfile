# 1. ############################################################
# 基于 NODE 镜像，构建前端项目
FROM node:14.15.1-alpine3.12 as build-stage
# 切换工作文件夹
RUN mkdir -p /app
WORKDIR /app
# 复制文件到镜像
COPY ./ .
# 执行构建命令
# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
# RUN apk add --no-cache make gcc g++ python3
RUN npm install
RUN npm run clean
RUN npm run build
# RUN npm run generate
# RUN apk del python3 make gcc g++

# 2. ############################################################
# 基于 NGINX 镜像，将上一步构建获得的 `dist` 目录复制到 nginx 镜像中
FROM nginx:latest as production-stage
# 创建文件夹
RUN mkdir /app
# 将第一步中构建好的前端静态文件 复制到 NGINX 镜像中的 /app 目录下
# [buil-stage:'/app/public'] --- copy ---> [production-stage:'/app']
COPY --from=build-stage /app/public /app
# 复制当前项目中的 `nginx.conf` 覆盖 NGINX 镜像中的 nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf