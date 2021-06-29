# 1. ############################################################
# 基于 NODE 镜像，构建前端项目
FROM node:14.15.1-alpine3.12
# 创建文件夹
RUN mkdir -p /api-service
WORKDIR /api-service

# 复制
COPY ./ .

# 执行构建命令
RUN npm install

# 编译
RUN npm run build

# 暴露容器端口
EXPOSE 38080

# 运行
CMD [ "npm", "run", "start:dev" ]