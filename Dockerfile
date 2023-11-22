# Sử dụng một image chứa Node.js và npm
FROM node:16.20.2-buster


# Tạo thư mục làm việc trong container
WORKDIR /app

# Tạo biến môi trường
RUN touch ./config.env
RUN echo "NODE_ENV=development" >> ./config.env
RUN echo "ENDPOINT_CLIENT=http://localhost:3000" >> ./config.env
RUN echo "DATABASE=mongodb+srv://muradvn2003:Y2k5PTyQmhV3Nd1M@cluster0.de9mv1p.mongodb.net/?retryWrites=true&w=majority" >> ./config.env
RUN echo "DEV_DATABASE_STRING=mongodb+srv://muradvn2003:Y2k5PTyQmhV3Nd1M@cluster0.de9mv1p.mongodb.net/?retryWrites=true&w=majority" >> ./config.env
RUN echo "STAGING_DATABASE_STRING=mongodb+srv://muradvn2003:Y2k5PTyQmhV3Nd1M@cluster0.de9mv1p.mongodb.net/?retryWrites=true&w=majority" >> ./config.env
RUN echo "PRO_DATABASE_STRING=mongodb+srv://muradvn2003:Y2k5PTyQmhV3Nd1M@cluster0.de9mv1p.mongodb.net/?retryWrites=true&w=majority" >> ./config.env


# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./
COPY ./node_modules ./node_modules

# Cài đặt các dependencies

RUN npm install
RUN npm install pm2 -g

# Sao chép toàn bộ mã nguồn vào thư mục làm việc

COPY . .



# Mở cổng mà ứng dụng sẽ lắng nghe trên
EXPOSE 8081

# Lệnh chạy ứng dụng khi container được khởi chạy
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]