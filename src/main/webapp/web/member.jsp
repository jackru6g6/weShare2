<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>

<html lang="zh-Hant">

<head>
	<meta charset="utf-8">
	<jsp:include page="../fragment/refCss.jsp" />
	<!-- 自訂CSS -->
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/dist/css/member.css">
	<jsp:include page="../fragment/refJs.jsp" />
	<!-- 自訂js -->
	<script src="${pageContext.request.contextPath}/dist/js/member.js"></script>
	
	<title>WeShare 微分享</title>
</head>

<body>

	<header>
		<jsp:include page="../fragment/header.jsp" />
	</header>
	
	<section>
		<div class="container-fluid">
			<div class="row">
				<!-- 左側導覽列 -->
				<aside class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
					
					<!-- 左側導覽列title、會員圖片 -->
                    <div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						    <h3 id="member_menu_title"><b>會員專區</b></h3>
							<img id="member_menu_img" src="${pageContext.servletContext.contextPath}/_00_init/getImage?id=${LoginOK.indid}&type=MEMBER">
						</div>	
					</div>
					
					<!-- 左側導覽列選項按鈕 -->

                    <!-- 個人檔案 -->
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<button id="member_menu_button" class="btn btn-block member_menu_button" onclick="clickButton(event, 'member_home')">
								個人檔案
							</button>
						</div>	
					</div>
					
					<!-- 修改會員資料 -->
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<button id="member_menu_button" class="btn btn-block member_menu_button" onclick="clickButton(event, 'update')">
								修改會員資料
							</button>
						</div>	
					</div>
					
					<!-- 我的物資箱 -->
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">				
							<button id="member_menu_button" class="btn btn-block member_menu_button" onclick="clickButton(event, 'goodsCart')">
								我的物資箱
							</button>
						</div>	
					</div>
					
					<!-- 我的站內信 -->
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<button id="member_menu_button" class="btn btn-block member_menu_button" onclick="clickButton(event, 'message')">
								我的站內信
							</button>
						</div>	
					</div>
					
					<!-- 評價與紀錄 -->
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">	
							<button id="member_menu_button" class="btn btn-block member_menu_button" onclick="clickButton(event, 'feedback')">
								評價與紀錄
							</button>
						</div>	
					</div>	
					
				</aside>
				
				<!-- 頁面內容 -->
				<article class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
					
					<!-- 個人檔案 -->
                    <div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 member_content" id="member_home">
							
							<!-- 個人檔案title -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<h3 id="member_content_title">
										<b>個人檔案</b>
									</h3>
									<hr id="member_content_hr">
								</div>
							</div>
							
							<!-- 個人檔案內容 -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<jsp:include page="member_data.jsp" />
								</div>
							</div>
							
						</div>
					</div>
					
					<!-- 修改會員資料 -->
                    <div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 member_content" id="update">
							
							<!-- 修改會員資料title -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<h3 id="member_content_title">
										<b>修改會員資料</b>
									</h3>
									<hr id="member_content_hr">
								</div>
							</div>
							
							<!-- 修改會員資料內容 -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<jsp:include page="member_update.jsp"/>

<%-- 									<jsp:include page=" --%>
<%-- 									<c:url value='/web/_03_updateMember/controller/FindMemberServlet'/> --%>
<!-- 									" /> -->
<%-- 									<c:url value="/Demo/web/_03_updateMember/controller/FindMemberServlet " /> --%>
<!-- 									WeShare\src\main\java\web\_03_updateMember\controller\FindMemberServlet.java -->
<%-- 									<jsp:include page="\web\_03_updateMember\controller\FindMemberServlet" /> --%>
<%-- 									<c:url value="/web/_03_updateMember/controller/FindMemberServlet" /> --%>
<%-- 									<jsp:include page="test/_03_updateMembertest/updateMember.jsp" /> --%>
<%-- 									<jsp:include page="${pageContext.request.contextPath}/web/_03_updateMember/controller/FindMemberServlet" /> --%>
<!-- 									<a href="/Demo/web/_03_updateMember/controller/FindMemberServlet"> -->
									
								</div>
							</div>
							
						</div>
					</div>
					
					<!-- 我的物資箱 -->
                    <div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 member_content" id="goodsCart">
							
							<!-- 我的物資箱title -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<h3 id="member_content_title">
										<b>我的物資箱</b>
									</h3>
									<hr id="member_content_hr">
								</div>
							</div>
							
							<!-- 我的物資箱內容 -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<jsp:include page="test/_04_productMaintain/GoodsMaintainList.jsp" />
								</div>
							</div>
							
						</div>
					</div>
					
					<!-- 我的站內信 -->
                    <div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 member_content" id="message">
							
							<!-- 我的站內信title -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<h3 id="member_content_title">
										<b>我的站內信</b>
									</h3>
									<hr id="member_content_hr">
								</div>
							</div>
							
							<!-- 我的站內信內容 -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<jsp:include page="test/_06_MSG/DisplayMSG.jsp" />
								</div>
							</div>
							
						</div>
					</div>
					
					<!-- 評價與紀錄 -->
                    <div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 member_content" id="feedback">
							
							<!-- 評價與紀錄title -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<h3 id="member_content_title">
										<b>評價與紀錄</b>
									</h3>
									<hr id="member_content_hr">
								</div>
							</div>
							
							<!-- 評價與紀錄內容 -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<jsp:include page="test/_05_deal/DisplayDeal.jsp" />
								</div>
							</div>
							
						</div>
					</div>									
					
				</article>			
			</div>
		</div>	
	</section>
	
	<footer>
		<jsp:include page="../fragment/footer.jsp" />
	</footer>

</body>

</html>