# html内表单控件聚焦切换
函数说明：
1：在页面中引用js文件：“<script src="basicParameters.js"></script>”，“<script src="KeyBoardControl.js"></script>”
2：form表单id命名“keyBoardForm”
3：js中调用，FormKeyBoardMain.init('keyBoardForm');
4：先聚焦到表单某一控件，然后按小键盘“↑”，向上移动，“↓”向下移动，“←”选中或切换选项，“→”选中或切换选项
备注：目前左右切换只支持“select”,“radio”,“checkbox”控件。在IE6,IE8,FireFox浏览器下测试通过
