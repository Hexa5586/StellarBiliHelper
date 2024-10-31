window.onload = function(){
	setTimeout(function(){
		var divTools = document.createElement("div");
		divTools.className = "video-toolbar-container";
		divTools.id = "arc_toolbar_report_3";
		var lblRate = document.createElement("label");
		lblRate.innerHTML = "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;倍速：";
		var txtRate = document.createElement("input"); txtRate.id = "txtRate"; txtRate.type = "number"; txtRate.max = "4.0"; txtRate.min = "0.25"; txtRate.step = "0.05";
		txtRate.value = "1.0";
		var btnInsert = document.createElement("button"); btnInsert.id = "btnInsert";
		btnInsert.textContent = "插入";
		var lblSep = document.createElement("label"); lblSep.innerHTML = "&nbsp;"
		var btnDark = document.createElement("button"); btnDark.id = "btnDark";
		btnDark.textContent = "开启夜间模式";

		var par = document.getElementById("app");
		var tar = document.getElementById("mirror-vdcon");

		divTools.appendChild(lblRate);
		divTools.appendChild(txtRate);
		divTools.appendChild(btnInsert);
		divTools.appendChild(lblSep);
		divTools.appendChild(btnDark);
		par.insertBefore(divTools, tar);
		
		
		btnInsert.addEventListener("click", function(){
			var vid = document.querySelector("video");
			vid.playbackRate = parseFloat(txtRate.value);
			var par = document.getElementsByClassName("bpx-player-ctrl-playbackrate-menu")[0];
			var child = document.createElement("li");
			child.className = "bpx-player-ctrl-playbackrate-menu-item ";
			child.setAttribute("data-value", txtRate.value);
			child.innerHTML = txtRate.value + "x";
			par.appendChild(child);
		});
		
		
		btnDark.addEventListener("click", function(){
			
		});
		

		btnDark.addEventListener("click", function(){
			console.log("视频播放页面dark")
			totalFontColor();
			dynamicAndUserHeader();
			videoBody();
		});

		function totalFontColor() {
			//总字体颜色更改
			$("body").css("color", "#ffffff");
			$("a").css("color", "#ffffff");
			$("p").css("color", "#ffffff");
			$("span").css("color", "#ffffff");
		}

		function dynamicAndUserHeader() {
			$(".fixed-bg").css("background", "#1c1c1c");
			$(".home-content").css("background", "#1c1c1c");
			//头
			$(".mini-header__content.mini-header--login").css("background", "#2d2d2d");
			mainHeaderDark();
			document.querySelector("#biliMainHeader > div > div").style = "background-color:#2D2D2D;";
		}

		function videoBody() {
			$("#app").css("background", "#1c1c1c");
		
			//右上角up猪
			$(".btn-panel").children().first().css("background", "#fb7299").css("color", "#ffffff");
			$(".btn-panel").children().last().css("background", "#00b5e5").css("color", "#ffffff");
		
			//弹幕
			$(".bui-collapse-header").css("background-color", "#2d2d2d");
			$(".player-auxiliary-danmaku-function").css("background", "#2d2d2d")
				.children().css("background", "#2d2d2d").css("color", "#ffffff");
			$(".player-auxiliary-danmaku-warp li,ul").css("background", "#2d2d2d");
			$(".player-auxiliary-danmaku-btn-history,.player-auxiliary-danmaku-btn-footer").css("background", "#2d2d2d").css("color", "#ffffff");
			$(".player-auxiliary-area relative").css("background", "#2d2d2d");
		
			//tag
			$(".tag-area li").css("background", "#2d2d2d");
		
			//评论
			$(".bb-comment").css("background", "#1c1c1c");
			$(".comment-send-lite ").css("background", "#2d2d2d");
			
			txtRate.style = "background-color:#2D2D2D;";
			btnInsert.style = "background-color:#2D2D2D;";
			btnDark.style = "background-color:#2D2D2D;";

			document.querySelector("#viewbox_report > div.video-info-title > div > h1").setAttribute("style", "color:white;");

			try{
				document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.video-pod.video-pod").setAttribute("style", "background-color:#2D2D2D;");
				document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.video-pod.video-pod > div.video-pod__body > div > div:nth-child(6) > div > div").setAttribute("style", "background-color:black;");
			}
			catch(error){
				console.log(error.log);
			}

			document.querySelector("#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-sending-area > div").setAttribute("style", "background-color:black;");

			try{
				for(var i = 1;;i++){
					document.querySelector("#commentapp > bili-comments").shadowRoot.querySelector("#feed > bili-comment-thread-renderer:nth-child(" + i.toString() + ")").shadowRoot.querySelector("#comment").shadowRoot.querySelector("#content > bili-rich-text").shadowRoot.querySelector("#contents > span").setAttribute("style", "color:white;");
					
					try{
						for(var j = 1;;j++){
							document.querySelector("#commentapp > bili-comments").shadowRoot.querySelector("#feed > bili-comment-thread-renderer:nth-child(" + i.toString() + ")").shadowRoot.querySelector("#replies > bili-comment-replies-renderer").shadowRoot.querySelector("#expander-contents > bili-comment-reply-renderer:nth-child(" + j.toString() + ")").shadowRoot.querySelector("#main > bili-rich-text").shadowRoot.querySelector("#contents > span").setAttribute("style", "color:white;");
						}
					}
					catch(error){
						console.log(error.log);
					}
				}
			}
			catch(error){
				console.log(error.log);
			}
		}

		function mainHeaderDark() {
			//动态
			$(".tab-bar").css("background", "#2d2d2d");
		
			$(".title").css("color", "#ffffff");
			$(".video-list").css("background", "#2d2d2d");
			$(".live-list").css("background", "#2d2d2d");
			$(".article-list").css("background", "#2d2d2d");
			$(".tip-box.no-more-tip").css("background", "#2d2d2d");
			$(".history-tip").css("background", "#2d2d2d");
			$(".list-item").css('color', "#ffffff");

			//banner下方主页内容
			$(".primary-menu-itnl li span").css("color", "#ffffff");
			$(".primary-menu-itnl li").css("border", "1px solid #1c1c1c");
			$(".international-header a").css("color", "#ffffff");
			$(".item .van-popover__reference").css("background", "#2d2d2d");

			//tab触摸后小窗口颜色适配
			$(".van-popover")
				.css("background", "#2d2d2d")
				.css("border", "1px solid #2d2d2d");
			$(".van-popper")
				.css("background", "#2d2d2d");
			$(".van-popper-channel")
				.css("background", "#2d2d2d");

			//主页左侧联系客服按钮
			$(".contact-help")
				.css("background", "#1c1c1c")
				.css("color", "#2d2d2d");

			//个人信息
			$(".link-title").css("color", "#ffffff");
			$(".link-item")
				.mousemove(itemSelect)
				.mouseleave(itemNotSelect);
			$(".contact-tips.email-tips").css("background", "#000000");
			$(".contact-tips.phone-tips").css("background", "#000000");
			$(".level-intro").css("background", "#3c3c3c");
			$(".level-intro__content").css("color", "#ffffff");
			$(".history-item a").css("color", "#000000");
			$("input .nav-search-keyword").css("color", "#000000");
			$(".channel-menu-mini").css("background", "#3d3d3d");

			//消息按钮
			$("div.im-list-box")
				.css("background", "#2d2d2d")
				.children("a")
				.css("color", "#ffffff");
		}
		
		function itemSelect() {
			$(this).css("background", "rgb(2,157,208)");
		}
		
		function itemNotSelect() {
			$(this).css("background", "#2d2d2d");
		}
		
	}, 3000);	// 等待3秒后显示，避免因B站网页加载而消失
	
	
}