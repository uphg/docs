(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{473:function(t,a,s){"use strict";s.r(a);var e=s(31),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"目录跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录跳转"}},[t._v("#")]),t._v(" 目录跳转")]),t._v(" "),s("p",[t._v("跳转至用户目录 "),s("code",[t._v("cd ~/")])]),t._v(" "),s("p",[t._v("查看当前目录 "),s("code",[t._v("pwd")])]),t._v(" "),s("p",[t._v("打开指定文件 "),s("code",[t._v("start 路径")])]),t._v(" "),s("h3",{attrs:{id:"快速跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速跳转"}},[t._v("#")]),t._v(" 快速跳转")]),t._v(" "),s("p",[s("strong",[t._v("安装")])]),t._v(" "),s("blockquote",[s("p",[t._v("注：如果觉得文字过多步骤繁琐，下面有简化版")])]),t._v(" "),s("p",[t._v("在用户目录下创建一个文件夹进入这个目录")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/GitHub/rupa\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/GitHub/rupa\n")])])]),s("p",[t._v("下载 z 命令的文件：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/rupa/z.git\n")])])]),s("p",[t._v("进入 z 目录 "),s("code",[t._v("cd z")])]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("pwd")]),t._v(" 查看当前目录路径，复制 "),s("code",[t._v("pwd")]),t._v(" 显示的路径并在路径后添加 "),s("code",[t._v("/z.sh")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/c/Users/xxx/GitHub/rupa/z/z.sh\n")])])]),s("p",[t._v("可以用 ~ 代替用户目录，如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("~/GitHub/rupa/z/z.sh\n")])])]),s("p",[t._v("用 VSCode (其他编辑器也可以，但是不要使用记事本等打开) 打开 用户目录下的 "),s("code",[t._v(".bashrc")]),t._v(" 文件")]),t._v(" "),s("p",[t._v("然后把上面的路径复制添加在用户目录 ( "),s("code",[t._v("cd ~/")]),t._v(" ) 下的 "),s("code",[t._v(".bashrc")]),t._v(" 文件中：")]),t._v(" "),s("p",[t._v("在前面加一个 . 并用空格隔开")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(". ~/GitHub/rupa/z/z.sh\n")])])]),s("blockquote",[s("p",[t._v(". 是 source 的缩写 所以也可以写作 source")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v(".bashrc")]),t._v(" 文件中添加一行以下内容，就可以使用 "),s("code",[t._v("j")]),t._v(" 键代替 "),s("code",[t._v("z")]),t._v(" 键了")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("alias j='z'\n")])])]),s("p",[s("strong",[t._v("使用")])]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("j")]),t._v(" + 任何文件名可以快速跳转至该文件目录，可以不写全称。")]),t._v(" "),s("p",[t._v("只输入 "),s("code",[t._v("j")]),t._v(" 可显示历史目录")]),t._v(" "),s("blockquote",[s("p",[t._v("注：快速跳转只支持去过的历史目录")])]),t._v(" "),s("p",[t._v("文中的 "),s("code",[t._v("git clone https://github.com/rupa/z.git")]),t._v(" 来源：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在 GitHub 仓库搜索 z ，选择 "),s("code",[t._v("rupa/z")]),t._v("，如图：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/bash_z-01.png"),alt:"cil-used"}})]),t._v(" "),s("li",[s("p",[t._v("之后就可以下载啦")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/bash_z-02.png"),alt:"cil-used"}})])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"简化版快速跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简化版快速跳转"}},[t._v("#")]),t._v(" 简化版快速跳转")]),t._v(" "),s("p",[t._v("打开命令行工具")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("mkdir ~/repos")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("cd ~/repos")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("git clone https://github.com/rupa/z.git")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("touch ~/.bashrc")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("start ~/.bashrc")])]),t._v(" "),s("p",[t._v("在文件中写入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(". ~/repos/z/z.sh\nalias j='z'\n")])])])]),t._v(" "),s("li",[s("p",[t._v("重启 Git Bash")])]),t._v(" "),s("li",[s("p",[t._v("你去过的所有目录都会被记录了！使用 "),s("code",[t._v("j XXX")]),t._v(" 就可以快速到达之前去过的目录了！")])]),t._v(" "),s("li",[s("p",[t._v("使用 j 可以查看所有去过的目录")])])]),t._v(" "),s("h2",{attrs:{id:"配置-bashrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-bashrc"}},[t._v("#")]),t._v(" 配置.bashrc")]),t._v(" "),s("h3",{attrs:{id:"简洁的-git-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简洁的-git-命令"}},[t._v("#")]),t._v(" 简洁的 git 命令")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("~/.bashrc")]),t._v(" 中添加如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('alias gst="git status -sb"\nalias ga="git add"\nalias gc="git commit -v"\nalias gcc="git commit . -m update"\nalias gp="git push"\nalias gl="git pull"\n')])])]),s("p",[t._v("再执行 "),s("code",[t._v(". ~/.bashrc")]),t._v("  (或者重启命令行)，就可以使用更简洁的 git 命令")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v(". ~/.bashrc")]),t._v(" 是 "),s("code",[t._v("source ~/.bashrc")]),t._v(" 命令的简称以 root 方式进入 Ubuntu")])]),t._v(" "),s("h3",{attrs:{id:"打开文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开文件"}},[t._v("#")]),t._v(" 打开文件")]),t._v(" "),s("p",[t._v("首先在 "),s("code",[t._v("~/.bashrc")]),t._v(" 文件中添加：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),t._v("\n")])])]),s("p",[t._v("然后在命令行执行 "),s("code",[t._v(". ~/.bashrc")])]),t._v(" "),s("p",[t._v("即可用 "),s("code",[t._v("open")]),t._v(" 代替 "),s("code",[t._v("start")]),t._v(" 执行打开文件命令")]),t._v(" "),s("h3",{attrs:{id:"历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#历史"}},[t._v("#")]),t._v(" 历史")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("~/.bashrc")]),t._v(" 中添加，查看历史 log 更直观")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("alias glog=\"git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | less\"\n")])])]),s("p",[t._v("然后在命令行执行 "),s("code",[t._v(". ~/.bashrc")])]),t._v(" "),s("p",[t._v("添加后就可以使用 "),s("code",[t._v("glog")]),t._v(" 命令查看当前 git 仓库的历史的提交了")]),t._v(" "),s("h2",{attrs:{id:"装一个好看的字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装一个好看的字体"}},[t._v("#")]),t._v(" 装一个好看的字体")]),t._v(" "),s("p",[t._v("先下载：https://github.com/powerline/fonts/tree/master/SourceCodePro")]),t._v(" "),s("p",[t._v("最好把每个 "),s("code",[t._v(".otf")]),t._v(" 后缀的文件都下载，这样字体的样式很多，下载后全选右键选择安装即可")]),t._v(" "),s("p",[t._v("然后重启命令行在设置中选择该字体即可")]),t._v(" "),s("h2",{attrs:{id:"添加tree命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加tree命令"}},[t._v("#")]),t._v(" 添加tree命令")]),t._v(" "),s("h3",{attrs:{id:"安装tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装tree"}},[t._v("#")]),t._v(" 安装tree")]),t._v(" "),s("p",[t._v("官网：http://gnuwin32.sourceforge.net/packages/tree.htm")]),t._v(" "),s("p",[t._v("选择 Complete package, except sources 那一行下载完整包，如图：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/bash_tree-01.png"),alt:"cil-used"}}),t._v(" "),s("p",[t._v("安装成功后在用户目录下的 "),s("code",[t._v(".bashrc")]),t._v(" 输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('export PATH="$PATH:/C/Software/GnuWin32/bin"\n')])])]),s("p",[t._v("其中 $PATH: 后的路径为 tree 安装路径下的 bin 路径 (注意路径中的 \\ 要修改为 / 格式)")]),t._v(" "),s("p",[t._v("然后 "),s("code",[t._v(". ~/.bashrc")]),t._v(" 一下")]),t._v(" "),s("p",[t._v("然后运行 "),s("code",[t._v("which tree")]),t._v(" 如果出现了安装路径就说明成功了")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("tree .")]),t._v(" 即可查看当前目录")]),t._v(" "),s("p",[t._v("这篇教程的原文来自方方老师一篇博客：https://xiedaimala.com/bbs/topics/184#/")]),t._v(" "),s("h2",{attrs:{id:"翻译工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#翻译工具"}},[t._v("#")]),t._v(" 翻译工具")]),t._v(" "),s("p",[t._v("安装 "),s("code",[t._v("npm i -g fanyi")])]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("fy hi")])]),t._v(" "),s("h2",{attrs:{id:"快捷打开当前项目所在-github-链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷打开当前项目所在-github-链接"}},[t._v("#")]),t._v(" 快捷打开当前项目所在 GitHub 链接")]),t._v(" "),s("p",[t._v("安装")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" git-open\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global git-open\n")])])]),s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Open the page for this branch on the repo website")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" --commit\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" -c\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Open the current commit in the repo website")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" --issue\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" -i\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If this branch is named like issue/#123, this will open the corresponding")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# issue in the repo website")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" --print\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" -p\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Only print the url at the terminal, but don't open it")]),t._v("\n")])])]),s("h2",{attrs:{id:"命令行中的快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行中的快捷键"}},[t._v("#")]),t._v(" 命令行中的快捷键")]),t._v(" "),s("h3",{attrs:{id:"搜索历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索历史"}},[t._v("#")]),t._v(" 搜索历史")]),t._v(" "),s("p",[t._v("首先按一下 "),s("code",[t._v("ctrl")]),t._v(" + "),s("code",[t._v("R")]),t._v(" 然后输入命令 的一部分")]),t._v(" "),s("p",[t._v("然后会显示历史命令，然后按住 "),s("code",[t._v("ctrl")]),t._v(" 再按 "),s("code",[t._v("R")]),t._v(" 切换历史命令，直到切换到自己想要的，按方向键左右键即可退出")]),t._v(" "),s("p",[t._v("如果是需要的命令 按方向键左右即可在当前行显示该命令")]),t._v(" "),s("p",[t._v("如果不想搜索 使用 Ctrl + Go 退出搜索")]),t._v(" "),s("h3",{attrs:{id:"删除当前行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除当前行"}},[t._v("#")]),t._v(" 删除当前行")]),t._v(" "),s("p",[t._v("按下 "),s("code",[t._v("ctrl")]),t._v(" + "),s("code",[t._v("a")]),t._v(" 到达命令首字母，然后再按下 "),s("code",[t._v("ctrl")]),t._v(" + "),s("code",[t._v("k")]),t._v(" 删除本行命令")]),t._v(" "),s("h3",{attrs:{id:"其他快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他快捷键"}},[t._v("#")]),t._v(" 其他快捷键")]),t._v(" "),s("ul",[s("li",[t._v("光标移至行首 "),s("code",[t._v("Ctrl + A")])]),t._v(" "),s("li",[t._v("光标移至行尾 "),s("code",[t._v("Ctrl + E")])]),t._v(" "),s("li",[t._v("光标退后 "),s("code",[t._v("Ctrl + B")])]),t._v(" "),s("li",[t._v("光标前进 "),s("code",[t._v("Ctrl + F")])]),t._v(" "),s("li",[t._v("删一个单词 "),s("code",[t._v("Ctrl + W")])]),t._v(" "),s("li",[t._v("中断命令 "),s("code",[t._v("Ctrl + Cancel")])]),t._v(" "),s("li",[t._v("使用上一条命令的最后一个参数 "),s("code",[t._v("Alt + .")])])]),t._v(" "),s("p",[s("strong",[t._v("查看更多快捷键")])]),t._v(" "),s("p",[t._v("谷歌搜索 "),s("code",[t._v("bash 快捷键")]),t._v("，推荐网址：https://linuxtoy.org/archives/bash-shortcuts.html")]),t._v(" "),s("h2",{attrs:{id:"安装ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装ubuntu"}},[t._v("#")]),t._v(" 安装Ubuntu")]),t._v(" "),s("p",[t._v("在 Win10 的 Microsoft Store 搜索 Ubuntu 下载安装")]),t._v(" "),s("p",[s("strong",[t._v("windows目录")])]),t._v(" "),s("p",[t._v("在 Ubuntu 中 windows 目录在 "),s("code",[t._v("/mnt/")]),t._v(" 下")]),t._v(" "),s("p",[t._v("如 c 盘 "),s("code",[t._v("/mnt/c/")])]),t._v(" "),s("p",[s("strong",[t._v("设置快捷打开目录")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /mnt/c/xxx/GitHub/\n")])])]),s("p",[t._v("设置后直接使用 "),s("code",[t._v("cd 当前目录")]),t._v(" 即可")]),t._v(" "),s("p",[s("strong",[t._v("打开当前目录文件夹")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("explorer.exe "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("你可以将 explorer.exe 设置为 start ，用 vim 打开 "),s("code",[t._v("vi ~/.bashrc")])]),t._v(" "),s("p",[t._v("按 "),s("code",[t._v("i")]),t._v(" 然后在最下方插入 "),s("code",[t._v('alias start="explorer.exe"')])]),t._v(" "),s("p",[t._v("然后 "),s("code",[t._v(":wq")]),t._v(" 保存")]),t._v(" "),s("p",[t._v("然后就可以使用 "),s("code",[t._v("start .")]),t._v(" 打开目录了")]),t._v(" "),s("p",[s("strong",[t._v("一个报错")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("error: 0x8007019e\n")])])]),s("p",[t._v("解决方法")]),t._v(" "),s("p",[t._v("键盘行按键win+x，选择Windows PowerShell（管理员）")]),t._v(" "),s("p",[t._v("输入：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux\n")])])]),s("p",[t._v("回车输入Y并重启。 重启打开Ubuntu的命令窗口，等几分钟，输入账户和密码即可。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("以下未记录")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("以 root 方式进入 Ubuntu")])]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("sudo passwd root")]),t._v(" 设置 root 的密码 (默认情况下密码在命令行不会显示)")]),t._v(" "),s("p",[t._v("设置后输入 "),s("code",[t._v("su root")]),t._v(" 输入密码进入")]),t._v(" "),s("p",[s("strong",[t._v("在Cmder中添加Ubuntu")])]),t._v(" "),s("p",[t._v("首先打开设置，在启动中设置以下选项")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/ubuntu_01.png"),alt:"cil-used"}}),t._v(" "),s("p",[t._v("然后就可以在 Cmder 中新建 Ubuntu 窗口了")]),t._v(" "),s("p",[t._v("也可以把 Ubuntu 设置为默认启动")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/ubuntu_02.png"),alt:"cil-used"}}),t._v(" "),s("h2",{attrs:{id:"拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[t._v("#")]),t._v(" 拓展")]),t._v(" "),s("p",[s("strong",[t._v("复制粘贴快捷键")])]),t._v(" "),s("p",[t._v("Git Bash 粘贴：按住鼠标中键，或者 Shift + Ins 是复制")]),t._v(" "),s("p",[t._v("cmd 复制：选中然后按回车键")]),t._v(" "),s("p",[s("strong",[t._v("npm 命令卸载插件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm uninstall 插件名 -g\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);