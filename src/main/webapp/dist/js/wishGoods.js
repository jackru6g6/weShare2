// 產生網頁內容
function showData(data, path) {
	var javaRoot = path;
	var resultData;
	if(data.length == 0){
		resultData = 
		`<div style="font-size:24px; color:#ff0000; text-align:center; margin-top:30px;">
			找不到物資唷~請重新查詢！
		</div>`;
		$('#sectionWGoods').append(resultData);
	}
	resultData =
		`<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="row">
					<!-- 物資圖片及按鈕區 -->
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<!-- 物資圖片 -->
						<div id="wGoodsImgLayout" class="animated fadeInLeft">
							<img id="wGoodsImg" class="img-responsive" src="${javaRoot}/_00_init/getImage?id=${data[0].goodsno}&type=GOODS">
						</div>
						<!-- 捐贈&詢問按鈕區 -->
						<div id="blockWGoodsOption" class="animated fadeInLeft">
							<ul type="none" class="row">
								<li class="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
									<a id="aWishTrans" class="btn btn-default wGoodsOption" >我要捐贈</a>
								</li>
								<li class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
									<a id="aMsgModal" data-toggle="modal" data-target="#sendMsg" class="btn btn-default wGoodsOption">留言詢問</a>
								</li>
							</ul>
						</div>
						<!-- 留言詢問modal -->
						<div id="sendMsg" class="modal fade" role="dialog">
							<div class="modal-dialog">
								<div class="modal-content">
									<!-- 標題 -->
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
										<h3 class="modal-title">發送訊息給 ${data[0].indname_TEMP}</h3>
									</div>
									<!-- 內容 -->
									<div id="msgBody" class="modal-body">
										<textarea id="msgText" class="form-control" rows="5" required="required" maxlength="200" placeholder="留言最多200字" style="resize : none;"></textarea>
										<input id="msgImg" type="file" accept="image/*">
									</div>
									<!-- 關閉鈕 -->
									<div id="msgFooter" class="modal-footer">
										<button id="btSendMsg" type="button" class="btn btn-default disabled">傳送訊息</button>
										<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<!-- 物資資訊 -->
						<div id="wGoodsInfo" class="row animated fadeInRight">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div class="row wGoodsInfoRow">
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsCol">
										募集物品
									</div>
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsVal">
										${data[0].goodsname}
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div class="row wGoodsInfoRow">
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsCol">
										募集者
									</div>
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsVal">
										${data[0].indname_TEMP}
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div class="row wGoodsInfoRow">
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsCol">
										募集數量
									</div>
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsVal">
										${data[0].qty}
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div class="row wGoodsInfoRow">
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsCol">
										募集類別
									</div>
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsVal">
										${data[0].goodsname_TEMP}
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div class="row wGoodsInfoRow">
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsCol">
										募集地區
									</div>
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsVal">
										${data[0].localname_TEMP}
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div class="row wGoodsInfoRow">
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsCol">
										發佈時間
									</div>
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsVal">
										${data[0].updatetime_TEMP}
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div class="row wGoodsInfoRow">
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsCol">
										截止時間
									</div>
									<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 wGoodsVal">
										${data[0].deadlinestring}
									</div>
								</div>
							</div>
						</div>
						<!-- 詳細說明及簡介 -->
						<div id="wGoodsOtherInfo" class="row animated fadeInRight" role="tabpanel">
							<!-- 項目 -->
							<ul id="wGoodsOtherInfoTabs" class="nav nav-tabs col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1" role="tablist">
								<li id="wGoodsDescTabs" role="presentation" class="active">
									<a href="#wGoodsDesc" aria-controls="wGoodsDesc" role="tab" data-toggle="tab">詳細說明</a>
								</li>
								<li id="wGoodsIntroTabs" role="presentation">
									<a href="#wGoodsIntro" aria-controls="wGoodsIntro" role="tab" data-toggle="tab">需求者簡介</a>
								</li>
							</ul>
							<!-- 內容 -->
							<div id="wGoodsOtherInfoContent" class="tab-content col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
								<div id="wGoodsDesc" role="tabpanel" class="tab-pane fade active in">
									<p>${data[0].goodsnote}</p>
								</div>
								<div id="wGoodsIntro" role="tabpanel" class="tab-pane fade">
									<p>${data[0].intro_TEMP}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	$('#sectionWGoods').append(resultData);
}

// 點擊我要捐贈
function aWishTrans(){
	// 判斷是否已登入，未登入跳出提醒視窗，已登入導向確認頁面
	if (loginOk  == ""){
		alert("您還沒登入唷~\n請先登入以進行後續步驟！");
//			location.href = "login.jsp";
		return;
	} else {
		// 先移除進場動畫，否則只會截到剛進場時位置的圖片
		$('#wGoodsImgLayout').removeClass('fadeInLeft');
		$('#blockWGoodsOption').removeClass('fadeInLeft');
		$('#wGoodsInfo').removeClass('fadeInRight');
		$('#wGoodsOtherInfo').removeClass('fadeInRight');
		// 隱藏header、footer、#sendMsg，截圖畫面乾淨，但導覽列會閃一下
		$('header').hide();
		$('footer').hide();
		$('#sendMsg').hide();

		html2canvas(document.body, {
			onrendered: function(canvas) {
//				$('#showImgCanvas').html(canvas);
				var mediumQuality = canvas.toDataURL("image/jpeg");
				localStorage.setItem('transImg', mediumQuality);
				console.log('canvas end');
			}
		});
		// 延遲後轉至wishTrans.jsp
		setTimeout(function(){
			location.href = 'wishTrans.jsp?goodsno=' + `${responseData[0].goodsno}`;
		},100);
	}
}

// 點擊選擇檔案
function imgChange(input){
	readImg = new FileReader();
	readImg.readAsDataURL(input.files[0]);
	// 圖片讀取完畢再執行以下方法
	readImg.onload = function(){
		console.log("readImg end");
	}
}

// 點擊傳送訊息
function sendMsg(){
	var msgEndId = `${responseData[0].indid}`;
	var msgText = $('#msgText').val();
	var msgServletPath = javaRoot + '/web/_06_MSG/controller/AddNewMSG';
	console.log("msgEndId = " + msgEndId);
	console.log("msgText = " + msgText);
	console.log("msgImg = " + readImg.result);
	
	// get傳字串
//	$.ajax({
//		type: 'get',
//		url: msgServletPath,
//		data: {
//			MSGENDID : msgEndId,
//			MSGTEXT : msgText,
//			msgImg : readImg.result
//		},
	
	
	// post傳資料
	
	// JSON格式
//	var msgDataJSON = [{
//		MSGENDID: msgEndId,
//		MSGTEXT : msgText,
//		msgImg : readImg.result
//	}];
//	console.log(msgDataJSON);
//	data: JSON.stringify({msgDataString : msgDataJSON}),
		
	$.ajax({
		type: 'post',
		url: msgServletPath,
		data: {
			MSGENDID : msgEndId,
			MSGTEXT : msgText,
			msgImg : readImg.result
		},
		dataType: 'json',
		success: function(response){
			console.log(response);
		}
	});
}