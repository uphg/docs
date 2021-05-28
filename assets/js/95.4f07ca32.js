(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{552:function(s,t,a){"use strict";a.r(t);var n=a(31),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[s._v("#")]),s._v(" 安装 Docker")]),s._v(" "),a("ol",[a("li",[s._v("注册："),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://hub.docker.com/"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("下载："),a("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker for Windows Installer"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("确认输入 "),a("code",[s._v("docker --version")]),s._v(" 后返回版本号")]),s._v(" "),a("li",[s._v("设置国内镜像，"),a("a",{attrs:{href:"http://guide.daocloud.io/dcs/daocloud-9153151.html#Docker%E5%8A%A0%E9%80%9F%E5%99%A8-DockerforWindows",target:"_blank",rel:"noopener noreferrer"}},[s._v("教程"),a("OutboundLink")],1),s._v("，镜像的地址为："),a("code",[s._v("https://docker.mirrors.ustc.edu.cn/")])]),s._v(" "),a("li",[s._v("确保命令行输入 "),a("code",[s._v("docker run hello-world")]),s._v(" 时输出 Hello from Docker!")]),s._v(" "),a("li",[s._v("如果无法安装新版，请查看旧版教程")])]),s._v(" "),a("p",[s._v("新版配置镜像示例")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/images/docker-setting-mirror.jpg"),alt:"foo"}}),s._v(" "),a("h2",{attrs:{id:"旧版-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版-docker"}},[s._v("#")]),s._v(" 旧版 Docker")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/docker/toolbox/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载 Docker Toolbox"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("打开 Docker QuickStart，运行后看到一个IP，退出（运行 "),a("code",[s._v("docker-machine ip")]),s._v(" 可得到 IP）")]),s._v(" "),a("li",[s._v("重新打开命令行，输入 "),a("code",[s._v("docker -v")]),s._v(" 查看是否正常")]),s._v(" "),a("li",[s._v("设置国内镜像，"),a("a",{attrs:{href:"http://guide.daocloud.io/dcs/daocloud-9153151.html#Docker%E5%8A%A0%E9%80%9F%E5%99%A8-DockerToolbox",target:"_blank",rel:"noopener noreferrer"}},[s._v("教程"),a("OutboundLink")],1),s._v("，镜像的地址为："),a("code",[s._v("https://docker.mirrors.ustc.edu.cn/")])]),s._v(" "),a("li",[s._v("确保命令行输入 "),a("code",[s._v("docker run hello-world")]),s._v(" 时输出 Hello from Docker!")])]),s._v(" "),a("h2",{attrs:{id:"安装-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql"}},[s._v("#")]),s._v(" 安装 mysql")]),s._v(" "),a("p",[s._v("创建一个 mysql 数据库")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run --name mysql123 -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 -d mysql:5.7.33\n")])])]),a("p",[s._v("关于参数")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("--name   数据库名称\n -e      设置密码\n -p      设置端口\n -d      安装的 mysql 版本\n")])])]),a("h2",{attrs:{id:"docker-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[s._v("#")]),s._v(" Docker 常用命令")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看运行状态")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" mysql123              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关掉指定容器（指定名称或ID）")]),s._v("\ndocker container start mysql123   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启刚刚关闭的容器")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" mysql123                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定容器，-f 强制")]),s._v("\n")])])]),a("h2",{attrs:{id:"连接-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接-mysql"}},[s._v("#")]),s._v(" 连接 mysql")]),s._v(" "),a("ol",[a("li",[s._v("进入容器")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql123 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("输入账户密码")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mysql -u root -p\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("查看数据库列表")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("show databases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须加分号")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列表示例")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Database           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" information_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" performance_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sys                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("使用其中一个数据库")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("use mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("查看所有表")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("show tables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("查看指定表的内容")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("Ctrl + D 可以退出当前环境")])]),s._v(" "),a("h2",{attrs:{id:"dbms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dbms"}},[s._v("#")]),s._v(" DBMS")]),s._v(" "),a("p",[s._v("用来管理数据库，俗称数据库管理系统，例如：MySQL、"),a("strong",[s._v("PostgreSQL")]),s._v("、SQL Server、DB2、Oracle")]),s._v(" "),a("p",[s._v("DBMS 结构图")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/images/node-dbms.png"),alt:"DBMS"}}),s._v(" "),a("h2",{attrs:{id:"使用-node-js-创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-node-js-创建数据库"}},[s._v("#")]),s._v(" 使用 Node.js 创建数据库")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" mysql      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  host     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  user     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 连接数据库")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 创建一个名为 cheng 的数据库 */")]),s._v("\nconnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CREATE DATABASE IF NOT EXISTS cheng DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建数据库'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 使用 cheng 数据库 */")]),s._v("\nconnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use cheng'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 创建一个名为 user 的表 */")]),s._v("\nconnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("CREATE TABLE IF NOT EXISTS user(\n  name text,\n  age int\n)")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("查看该表")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有库")]),s._v("\n$ show databases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Database           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" information_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cheng              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" performance_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sys                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择 cheng 数据库")]),s._v("\n$ use cheng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示数据库的表")]),s._v("\n$ show tables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+-----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Tables_in_cheng "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" user            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示 user 表")]),s._v("\n$ describe user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                             \n+-------+---------+------+-----+---------+-------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Field "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Type    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Null "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Default "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------+---------+------+-----+---------+-------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" text    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" age   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------+---------+------+-----+---------+-------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 user 表")]),s._v("\nDROP table user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 cheng 库")]),s._v("\ndrop database cheng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"操作表内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作表内容"}},[s._v("#")]),s._v(" 操作表内容")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 user 表添加数据")]),s._v("\ninsert into user "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name, age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ject'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 user 表中 name 为 ject 的数据，将它的 age 字段改为 70")]),s._v("\nupdate user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v(" where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ject'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不要使用以下方式修改，会将数据库中所有 age字段都修改")]),s._v("\nupdate user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询 user 表所有字段")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询 user 表中的指定字段")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name,age from user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只查询该字段的前十行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name,age from user limit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("给表添加")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("查询命令只在表内有数据的情况下才会显示表")])]),s._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),a("ul",[a("li",[s._v("数字类型："),a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/numeric-type-syntax.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/doc/refman/8.0/en/numeric-type-syntax.html"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("字符串类型")]),s._v(" "),a("li",[s._v("时间和日期类型，推荐关注 ISO 8601 及 "),a("a",{attrs:{href:"https://stackoverflow.com/questions/9321809/format-date-in-mysql-select-as-iso-8601",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何把日期输出为 ISO 8601 格式"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("JSON 类型（5.7.8以上版本）")]),s._v(" "),a("li",[s._v("其他特殊类型")])]),s._v(" "),a("p",[s._v("使用 serial 类型（数字类型）添加用户 id 案例")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加一列 id")]),s._v("\nalter table user "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" serial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看列表")]),s._v("\ndescribe user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+-------+---------------------+------+-----+---------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Field "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Type                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Null "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Default "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------+---------------------+------+-----+---------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" text                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" age   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" unsigned "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NO   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PRI "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" auto_increment "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------+---------------------+------+-----+---------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加一条数据")]),s._v("\ninsert into user "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name, age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uphg'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询该列表数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+----------+------+----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" age  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----------+------+----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" xiaofang "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" xiaohong "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" uphg     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----------+------+----+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"关于问题搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于问题搜索"}},[s._v("#")]),s._v(" 关于问题搜索")]),s._v(" "),a("p",[s._v("搜索判断是否存在语句")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql 5.7 create database if not exists\n")])])]),a("p",[s._v("搜索关于 utf8mb4 编码的问题")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v(" create database utf8mb4\n")])])]),a("h2",{attrs:{id:"推荐文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐文档"}},[s._v("#")]),s._v(" 推荐文档")]),s._v(" "),a("p",[s._v("在 "),a("a",{attrs:{href:"https://devdocs.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://devdocs.io/"),a("OutboundLink")],1),s._v(" 中搜索 PostgreSQL 添加其中的 v11 版本到自己的常用文档（Enable）。")])])}),[],!1,null,null,null);t.default=e.exports}}]);