## 使用技术栈

* react、typescript，MUI
* 包管理：yarn（V1），下载地址：https://github.com/yarnpkg/yarn/releases

## 脚本命令

- 安装依赖包：yarn install

- 运行(开发模式)：yarn start

- 编译项目：yarn build

- 运行(生产模式)：yarn serve

## 编译步骤

1. 依次安装[nodejs](https://nodejs.org/en/)、[yarn](https://github.com/yarnpkg/yarn/releases)
2. 在package.json文件所在目录，执行命令`yarn install`安装依赖包。
3. 在package.json文件所在目录，创建文件`.env`，参考内容如下：

```ini
REACT_APP_VERSION=$npm_package_version
REACT_APP_API_URL="https://gsub.org/wp-json/wp/v2"
```

* REACT_APP_VERSION：应用程序版本号，保存默认，不要修改。

* REACT_APP_IM_URL：gsub wordpress网站的域名。
4. 运行`yarn build`命令，将生成一个名为`build`文件夹。该文件夹中的文件即为需要上传到服务器的文件。

## 部署方式

Nginx最小化配置：

```
server {
    listen 80;
    root /var/www/html;
    index index.html;
    server_name 自定义域名;
    location / {
        try_files $uri /index.html;
    }
}
```

- /var/www/html其内容为前端项目的build文件夹中的文件
- `try_files $uri /index.html;` 必须添加此行，否则页面刷新将呈现为404
