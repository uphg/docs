(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{472:function(a,t,s){"use strict";s.r(t);var e=s(31),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("本教程只在 Windows 生效")]),a._v(" "),s("h2",{attrs:{id:"z-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z-命令"}},[a._v("#")]),a._v(" "),s("code",[a._v("z")]),a._v(" 命令")]),a._v(" "),s("p",[a._v("z 命令是一个快捷跳转目录的命令，可以记录你每次经常进入的目录，只要输入该目录文件名即可跳转。")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/bash-z.png"),alt:"cli-plugin"}}),a._v(" "),s("ol",[s("li",[a._v("首先打开 "),s("code",[a._v("z")]),a._v(" 命令 GitHub 仓库："),s("a",{attrs:{href:"https://github.com/rupa/z",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/rupa/z"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("找一个安全的目录（此处推荐在用户目录下新建一个 GitHub 目录）")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/GitHub\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("在该目录下克隆 z 命令的仓库")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone git@github.com:rupa/z.git\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("进入你克隆的仓库，复制该仓库的地址")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" z\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /c/Users/xxx/z")]),a._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("使用编辑器打开用户目录下的 "),s("code",[a._v(".bashrc")]),a._v(" 文件（没有就创建一个）")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("start ~/.bashrc\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("在 .bashrc 中添加以下内容")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" ~/GitHub/z/z.sh \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or /c/Users/xxx/GitHub/z/z.sh")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("j")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'z'")]),a._v("\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[a._v("运行 "),s("code",[a._v("source ~/.bashrc")]),a._v(" 使命令生效")])]),a._v(" "),s("h2",{attrs:{id:"tree-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tree-命令"}},[a._v("#")]),a._v(" tree 命令")]),a._v(" "),s("ol",[s("li",[a._v("打开官网："),s("a",{attrs:{href:"http://gnuwin32.sourceforge.net/packages/tree.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://gnuwin32.sourceforge.net/packages/tree.htm"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("选择 Complete package, except sources 那一行下载完整包，如图：")])]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/bash-tree.png"),alt:"cil-used"}}),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("安装成功后在用户目录下的 "),s("code",[a._v(".bashrc")]),a._v(" 输入")])]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('export PATH="$PATH:/C/Software/GnuWin32/bin"\n')])])]),s("blockquote",[s("p",[a._v("其中 $PATH: 后的路径为 tree 安装路径下的 bin 路径（注意路径中的 "),s("code",[a._v("\\")]),a._v(" 要修改为 "),s("code",[a._v("/")]),a._v(" 格式）")])]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("code",[a._v(". ~/.bashrc")]),a._v(" 一下，再运行 "),s("code",[a._v("which tree")]),a._v(" 如果出现了安装路径就说明成功了。")]),a._v(" "),s("li",[a._v("使用 "),s("code",[a._v("tree .")]),a._v(" 即可查看当前目录下文件。")])]),a._v(" "),s("h2",{attrs:{id:"翻译插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#翻译插件"}},[a._v("#")]),a._v(" 翻译插件")]),a._v(" "),s("p",[a._v("安装")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" fanyi\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g fanyi\n")])])]),s("p",[a._v("使用")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("fy hi\n")])])]),s("h2",{attrs:{id:"配置-git-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-git-命令"}},[a._v("#")]),a._v(" 配置 git 命令")]),a._v(" "),s("h3",{attrs:{id:"git-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[a._v("#")]),a._v(" git log")]),a._v(" "),s("p",[a._v("配置一个更直观的 git log 命令，在 "),s("code",[a._v("~/.bashrc")]),a._v(" 中添加")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("glog")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | less\"")]),a._v("\n")])])]),s("p",[a._v("添加后执行 "),s("code",[a._v(". ~/.bashrc")]),a._v("，然后就可以使用 glog 命令查看当前 git 仓库的历史的提交了")]),a._v(" "),s("p",[a._v("其他命令缩写：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('alias gst="git status -sb"\nalias ga="git add"\nalias gc="git commit -v"\nalias gcc="git commit . -m update"\nalias gp="git push"\nalias gl="git pull"\n')])])]),s("h2",{attrs:{id:"安装-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-ubuntu"}},[a._v("#")]),a._v(" 安装 Ubuntu")]),a._v(" "),s("p",[a._v("在 Win10 的 Microsoft Store 搜索 Ubuntu 安装即可")]),a._v(" "),s("p",[a._v("在 Ubuntu 中 Windows 目录都在 /mnt/ 下，如 c 盘为 "),s("code",[a._v("/mnt/c/")])]),a._v(" "),s("h3",{attrs:{id:"快捷打开目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷打开目录"}},[a._v("#")]),a._v(" 快捷打开目录")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s /mnt/c/xxx/GitHub/\n")])])]),s("p",[a._v("设置后直接使用 cd GitHub 即可打开该目录")]),a._v(" "),s("h3",{attrs:{id:"打开文件管理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开文件管理器"}},[a._v("#")]),a._v(" 打开文件管理器")]),a._v(" "),s("p",[a._v("默认模式下，打开当前目录要运行以下命令")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("explorer.exe "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("你可以将 "),s("code",[a._v("explorer.exe")]),a._v(" 设置为 "),s("code",[a._v("start")]),a._v("，步骤如下：")]),a._v(" "),s("blockquote",[s("ol",[s("li",[a._v("执行 "),s("code",[a._v("vi ~/.bashrc")]),a._v(" 用 vim 打开配置文件。")]),a._v(" "),s("li",[a._v("按 "),s("code",[a._v("i")]),a._v(" 然后在最下方插入 "),s("code",[a._v('alias start="explorer.exe"')]),a._v("。")]),a._v(" "),s("li",[a._v("然后运行 "),s("code",[a._v(":wq")]),a._v(" 保存。")]),a._v(" "),s("li",[a._v("就可以使用 "),s("code",[a._v("start .")]),a._v(" 打开目录了。")])])]),a._v(" "),s("h3",{attrs:{id:"开启-root-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启-root-模式"}},[a._v("#")]),a._v(" 开启 root 模式")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("sudo passwd root")]),a._v(" 设置 root 的密码 (默认情况下密码在命令行不会显示)")]),a._v(" "),s("p",[a._v("设置后输入 "),s("code",[a._v("su root")]),a._v(" 输入密码进入")]),a._v(" "),s("h3",{attrs:{id:"在-cmder-中添加-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-cmder-中添加-ubuntu"}},[a._v("#")]),a._v(" 在 Cmder 中添加 Ubuntu")]),a._v(" "),s("p",[a._v("首先打开设置，在启动中设置以下选项")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/ubuntu_01.png"),alt:"cil-used"}}),a._v(" "),s("p",[a._v("然后就可以在 Cmder 中新建 Ubuntu 窗口了")]),a._v(" "),s("p",[a._v("也可以把 Ubuntu 设置为默认启动，如下")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/ubuntu_02.png"),alt:"cil-used"}}),a._v(" "),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("h3",{attrs:{id:"读取配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读取配置"}},[a._v("#")]),a._v(" 读取配置")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.bashrc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 缩写")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" ~/.bashrc\n")])])]),s("h3",{attrs:{id:"打开指定文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开指定文件"}},[a._v("#")]),a._v(" 打开指定文件")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("start demo.sh\n")])])]),s("h3",{attrs:{id:"配置快捷命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置快捷命令"}},[a._v("#")]),a._v(" 配置快捷命令")]),a._v(" "),s("p",[a._v("将 "),s("code",[a._v("z")]),a._v(" 命令赋给 j（类似变量）以后就可以使用 j 代替 "),s("code",[a._v("z")]),a._v(" 命令，如下：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("j")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'z'")]),a._v("\n")])])]),s("h2",{attrs:{id:"常用快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用快捷键"}},[a._v("#")]),a._v(" 常用快捷键")]),a._v(" "),s("h3",{attrs:{id:"搜索历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索历史"}},[a._v("#")]),a._v(" 搜索历史")]),a._v(" "),s("p",[a._v("首先按一下 "),s("code",[a._v("Ctrl")]),a._v(" + "),s("code",[a._v("R")]),a._v(" 然后输入命令 的一部分")]),a._v(" "),s("p",[a._v("然后会显示历史命令，然后按住 "),s("code",[a._v("Ctrl")]),a._v(" 再按 "),s("code",[a._v("R")]),a._v(" 切换历史命令，直到切换到自己想要的，按方向键左右键即可退出")]),a._v(" "),s("p",[a._v("如果是需要的命令 按方向键左右即可在当前行显示该命令")]),a._v(" "),s("p",[a._v("如果不想搜索 使用 "),s("code",[a._v("Ctrl")]),a._v(" + "),s("code",[a._v("Go")]),a._v(" 退出搜索")]),a._v(" "),s("h3",{attrs:{id:"删除当前行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除当前行"}},[a._v("#")]),a._v(" 删除当前行")]),a._v(" "),s("p",[a._v("按下 "),s("code",[a._v("ctrl")]),a._v(" + "),s("code",[a._v("a")]),a._v(" 到达命令首字母，然后再按下 "),s("code",[a._v("ctrl")]),a._v(" + "),s("code",[a._v("k")]),a._v(" 删除本行命令")]),a._v(" "),s("h3",{attrs:{id:"其他快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他快捷键"}},[a._v("#")]),a._v(" 其他快捷键")]),a._v(" "),s("ul",[s("li",[a._v("光标移至行首 "),s("code",[a._v("Ctrl + A")])]),a._v(" "),s("li",[a._v("光标移至行尾 "),s("code",[a._v("Ctrl + E")])]),a._v(" "),s("li",[a._v("光标退后 "),s("code",[a._v("Ctrl + B")])]),a._v(" "),s("li",[a._v("光标前进 "),s("code",[a._v("Ctrl + F")])]),a._v(" "),s("li",[a._v("删一个单词 "),s("code",[a._v("Ctrl + W")])]),a._v(" "),s("li",[a._v("中断命令 "),s("code",[a._v("Ctrl + Cancel")])]),a._v(" "),s("li",[a._v("使用上一条命令的最后一个参数 "),s("code",[a._v("Alt + .")])])]),a._v(" "),s("p",[s("strong",[a._v("更多快捷键")])]),a._v(" "),s("p",[a._v("谷歌搜索 "),s("code",[a._v("bash 快捷键")]),a._v("，推荐网址："),s("a",{attrs:{href:"https://linuxtoy.org/archives/bash-shortcuts.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://linuxtoy.org/archives/bash-shortcuts.html"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);