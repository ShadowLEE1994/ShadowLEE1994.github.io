<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>挂号平台</title>
	<link rel="stylesheet" type="text/css" href="css/layout.css">
	<link rel="stylesheet" type="text/css" href="css/base.css">
	<link rel="stylesheet" type="text/css" href="css/ui.css">
	<script type="text/javascript" src="https://cdn.bootcss.com/jquery/1.12.4/jquery.js"></script>
</head>
<body>
	<div class="top" id="top">
		<div class="wrap">
			<p class="call">010-114/116114电话预约</p>
			<p class="welcome">
				欢迎来到城市医院预约挂号统一平台&nbsp;
				请&nbsp;
				<a href="#">登录</a>
				<a href="#">注册</a>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#">帮助中心</a>
			</p>
		</div>
	</div>
	<div class="header" id="header">
		<div class="wrap clearfix">
			<a href="#" class="logo"><img src="img/logo.png"></a>
			<div class="search ui-search">
				<div class="ui-search-selected">医院</div>
				<div class="ui-search-select-list">
					<a href="">科室</a>
					<a href="">疾病</a>
					<a href="">医院</a>
				</div>
				<input type="text" name="search-content" class="ui-search-input" placeholder="请输入搜索内容">
				<a href="#" class="ui-search-submit">&nbsp;</a>
			</div>
		</div>
	</div>
	<div class="nav" id="nav">
		<div class="wrap">
			<div class="link menu">全部科室
				<div class="menu-list"></div>
			</div>

			<a href="#" class="link">按医院挂号</a>
			<a href="#" class="link">按科室挂号</a>
			<a href="#" class="link">按疾病挂号</a>
			<a href="#" class="link">最新公告</a>
			<a href="#" class="link right">社会知名医院</a>

		</div>
	</div>
	<div class="banner" id="banner">
		<div class="banner-slider ui-slider">
			<div class="ui-slider-wrap">
				<a href="#0" class="item"><img src="img/banner_1.jpg" alt="banner-1"></a>
				<a href="#0" class="item"><img src="img/banner_2.jpg" alt="banner-2"></a>
				<a href="#0" class="item"><img src="img/banner_3.jpg" alt="banner-3"></a>
			</div>
			<div class="ui-slider-arrow">
				<a href="#l" class="item left">&nbsp;</a>
				<a href="#r" class="item right">&nbsp;</a>
			</div>
			<div class="ui-slider-process">
				<a href="#0" class="item item_focus">&nbsp;</a>
				<a href="#0" class="item">&nbsp;</a>
				<a href="#0" class="item">&nbsp;</a>
			</div>
		</div>
		<div class="banner-search">
			<div class="caption"><span class="text">快速预约</span></div>
			<div class="form ui-cascading">
				<div class="line"><select name="area" data-search="getDistinctArea" data-where=""><option>医院地区</option></select></div>
				<div class="line"><select name="level" data-search="getLeveByArea" data-where=""><option>医院等级</option></select></div>
				<div class="line"><select name="name" data-search="getNameByAreaAndLevel" data-where=""><option>医院名称</option></select></div>
				<div class="line"><select name="department" data-search="getDepartmentArrByHospitalName" data-where=""><option>医院科室</option></select></div>
			</div>
			<div class="submit">
				<input type="button" name="button" class="button" value="快速查询">
			</div>
		</div>
		<div class="banner-help">
			<div class="caption"><span class="text">帮助中心</span></div>
			<div class="list">
				<a href="#" class="link">账号指南</a>
				<a href="#" class="link">预约指南</a>
				<a href="#" class="link">账号找回</a>
				<a href="#" class="link">常见问题</a>
			</div>
		</div>
	</div>
	<div class="content" id="content">
		 <div class="wrap clearfix">
			<div class="content-tab">
				
				<div class="caption">
					<a href="#8" class="item item_focus">医院</a>
					<a href="#8" class="item">科室</a>
				</div>
				<div class="block">
					<div class="item">
						<div class="block-caption">
							
							<a href="#1" class="block-caption-item block-caption-item_focus" >全部</a>
							<a href="#1" class="block-caption-item">东城区</a>
							<a href="#1" class="block-caption-item">西城区</a>
							<a href="#1" class="block-caption-item">朝阳区</a>
							<a href="#1" class="block-caption-item">丰台区</a>
							<a href="#1" class="block-caption-item">石景山区</a>
							<a href="#1" class="block-caption-item">海淀区</a>
							<a href="#1" class="block-caption-item">门头沟区</a>
							<a href="#1" class="block-caption-item">房山区</a>
							<a href="#1" class="block-caption-item">其他</a>
						
						</div>
						<div class="block-content">
							<div class="block-wrap">
								<div class="block-list clearfix">
									<div class="item">
										<img src="img/hospital-1.jpg" alt="xx医院" />
										<div class="item-name">北京协和医院<span class="item-level">【三级甲等】</span></div>
										<div class="item-phone">电话：东院咨询台：010-69155564..</div>
										<div class="item-address"> [东院]北京市东城区帅府园一号 [西院]北京市西城区大木仓...</div>
									</div>
									<div class="item">
										<img src="img/hospital-1.jpg" alt="xx医院" />
										<div class="item-name">北京协和医院<span class="item-level">【三级甲等】</span></div>
										<div class="item-phone">电话：东院咨询台：010-69155564..</div>
										<div class="item-address"> [东院]北京市东城区帅府园一号 [西院]北京市西城区大木仓...</div>	
									</div>
									<div class="item">
										<img src="img/hospital-1.jpg" alt="xx医院" />
										<div class="item-name">北京协和医院<span class="item-level">【三级甲等】</span></div>
										<div class="item-phone">电话：东院咨询台：010-69155564..</div>
										<div class="item-address"> [东院]北京市东城区帅府园一号 [西院]北京市西城区大木仓...</div>
									</div>
									<div class="item">
										<img src="img/hospital-1.jpg" alt="xx医院" />
										<div class="item-name">北京协和医院<span class="item-level">【三级甲等】</span></div>
										<div class="item-phone">电话：东院咨询台：010-69155564..</div>
										<div class="item-address"> [东院]北京市东城区帅府园一号 [西院]北京市西城区大木仓...</div>
									</div>
								</div>
								<div class="block-text-list clearfix">
									<a href="#" class="item">首都儿科研究所附属儿童医院<span class="level">【三级甲等】</span></a>
									<a href="#" class="item">首都儿科研究所附属儿童医院<span class="level">【三级甲等】</span></a>
									<a href="#" class="item">首都儿科研究所附属儿童医院<span class="level">【三级甲等】</span></a>
									<a href="#" class="item">首都儿科研究所附属儿童医院<span class="level">【三级甲等】</span></a>
									<a href="#" class="item">首都儿科研究所附属儿童医院<span class="level">【三级甲等】</span></a>
									<a href="#" class="item">首都儿科研究所附属儿童医院<span class="level">【三级甲等】</span></a>
								</div>
								<a href="#" class="block-more">更多医院</a>
							</div>
							<div class="block-wrap" style="display:none;">其他城区内容</div>	
						</div>
				</div>
					<div class="item" style="display:none;">
						科室内容
					</div>
				</div>
			</div>
			<div class="content-news">
				<div class="caption">最新公告 <a href="#8" class="more">|更多</a></div>
				<div class="list">
					
					<a href="#9" class="link">阜外医院特需门诊暂停更新号源通..</a>
					<a href="#9" class="link">中国联合网络通信有限公司北京市..</a>
					<a href="#9" class="link">防护策略升级通知</a>
					<a href="#9" class="link">首都儿科研究所附属儿童医院暂停..</a>
					<a href="#9" class="link">首都医科大学附属复兴医院门诊..</a>
					<a href="#9" class="link">北京燕化医院暂停更新号源通知</a>

				</div>
			</div>
			<div class="content-close">
				
				<div class="caption">停诊公告 <a href="#8" class="more">|更多</a></div>
				<div class="list">
					<a href="#9" class="link">阜外医院特需门诊暂停更新号源通..</a>
					<a href="#9" class="link">中国联合网络通信有限公司北京市..</a>
					<a href="#9" class="link">防护策略升级通知</a>
					<a href="#9" class="link">首都儿科研究所附属儿童医院暂停..</a>
					<a href="#9" class="link">首都医科大学附属复兴医院门诊..</a>
					<a href="#9" class="link">北京燕化医院暂停更新号源通知</a>
				
				</div>
			</div>
		</div>
	</div>
	<div class="footer" id="footer">
		Copyright &copy 2017慕课网版权所有
	</div>
<!-- js引用 -->
<script type="text/javascript" src="js/ui.js"></script>
<script type="text/javascript" src="js/data.js"></script>
</body>
</html>
