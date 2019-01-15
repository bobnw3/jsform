/* Copyright (C) 2005 - 2011 NoahWeb, Author:bob, Email:bob@noahweb.net (http://www.noahweb.net) */
function getId(n){
	return document.getElementById(n).value;
}
function getIdObj(n){
	return document.getElementById(n);
}
function getNameObj(n){
	return document.getElementsByName(n);
}
function getIdTop(n){
	return window.top.document.getElementById(n).value;
}
function getIdTopObj(n){
	return window.top.document.getElementById(n);
}function getTagName(n){
	return document.getElementsByTagName(n);
}
function getFormElements(n){
	return document.getElementById(n).elements;
}
var CONFIG_UP=38; //小键盘箭头上 ASC码
var CONFIG_DOWN=40; //小键盘箭头下 ASC码
var CONFIG_LEFT=37; //小键盘箭头左 ASC码
var CONFIG_RIGHT=39; //小键盘箭头右 ASC码
var formArray=new Array(); //存放form表单元素
var FormKeyBoardMain={
	init:function(form){
		
		for(var i=0;i<getFormElements(form).length;i++){
			formArray[i]=getFormElements(form)[i].name;
			if(getFormElements(form)[i].type.toLowerCase()=='radio'){
				FormKeyBoardMain.onKeyDownRadio(getFormElements(form)[i].name,i); //radio小键盘函数
			}
			else{
				FormKeyBoardMain.onKeyDownMeth(getFormElements(form)[i].name,i); //页面其它控件小键盘
			}
		}		
	},
	onKeyDownRadio:function(n,num){
		for(var t=0;t<getNameObj(n).length;t++){
			getNameObj(n)[t].onkeydown=function(evt){
				evt = evt || window.event;
				FormKeyBoardMain.selectKeyBoardFocus(evt,n,num); //radio按键函数
			}
		}
	},
	onKeyDownMeth:function(n,num){
		getIdObj(n).onkeydown=function(evt){
			evt = evt || window.event;
			FormKeyBoardMain.selectKeyBoardFocus(evt,n,num);
		}		
	},
	selectKeyBoardFocus:function(evt,n,num){
		if(evt.keyCode==CONFIG_UP){
			FormKeyBoardMain.keyBoardUp(n,num); //小键盘向上
		}else if(evt.keyCode==CONFIG_DOWN){
			FormKeyBoardMain.keyBoardDown(n,num); //小键盘向下
		}
		else if(evt.keyCode==CONFIG_LEFT){
			FormKeyBoardMain.keyBoardLeft(n,num); //小键盘向左
		}else if(evt.keyCode==CONFIG_RIGHT){
			FormKeyBoardMain.keyBoardRight(n,num); //小键盘向右
		}		
	},
	keyBoardUp:function(n,num){
		var _j=0;
		for(var i=num;i>=0;i--){
			if(_j==1){
				getIdObj(formArray[i]).focus();
				break;
			}
			if(formArray[i]==n&&formArray[i-1]!=n){
				_j=1;
			}
		}
	},
	keyBoardDown:function(n,num){
		var _j=0;
		for(var i=num;i<formArray.length;i++){
			if(_j==1){
				getIdObj(formArray[i]).focus();
				break;
			}
			if(formArray[i]==n&&formArray[i+1]!=n){
				_j=1;
			}			
		}
	},
	keyBoardLeft:function(n,num){
		FormKeyBoardMain.keyBoardType(n,num,1);
	},
	keyBoardRight:function(n,num){
		FormKeyBoardMain.keyBoardType(n,num,2);
	},
	keyBoardType:function(n,num,ty){
		if(getIdObj(n).type.toLowerCase()=='radio'){
			FormKeyBoardMain.keyBoardRadioChecked(n,num,ty);
		}else if(getIdObj(n).type.toLowerCase()=='checkbox'){
			FormKeyBoardMain.keyBoardCheckBoxed(n,num);
		}else if(getIdObj(n).type.toLowerCase()=='select'||getIdObj(n).type.toLowerCase()=='select-one'){
			FormKeyBoardMain.keyBoardSelected(n,num,ty);
		}
	},
	keyBoardRadioChecked:function(n,num,ty){
		var _s=0;
		for(var t=0;t<getNameObj(n).length;t++){
			if(getNameObj(n)[t].checked){
				if(ty==1){
					if(n-1>=0){
						_s=t-1;break;
					}else{
						_s=getNameObj(n).length-1;break;	
					}
				}else if(ty==2){
					if(t<getNameObj(n).length-1){
						_s=t+1;break;
					}else{
						_s=0;break;
					}
				}
			}
		}
		getNameObj(n)[_s].checked=true;
	},
	keyBoardCheckBoxed:function(n,num){
		if(getIdObj(n).checked){
			getIdObj(n).checked=false;
		}else{
			getIdObj(n).checked=true;
		}
	},
	keyBoardSelected:function(n,num,ty){
		var _s=0;
		for(var t=0;t<getIdObj(n).options.length;t++){
			if(getIdObj(n).options[t].selected){
				if(ty==1){
					if(t-1>=0){
						_s=t-1;break;
					}else{
						_s=getIdObj(n).options.length-1;break;	
					}
				}else if(ty==2){
					if(t<getIdObj(n).options.length-1){
						_s=t+1;break;
					}else{
						_s=0;break;
					}
				}
			}			
		}
		getIdObj(n)[_s].selected=true;
	}
	
}
function MAlert(n){
	alert(n);
}
