<?php
	$name = $_POST["term_name"]; // 일, 월, 년, 일을 의미합니다.
	$term = $_POST["term"]; // 입력한 기간
	$type = $_POST["type"]; // 유형
	$time = $_POST["time"]; // 시간
	$money = $_POST["money"]; // 금액에 대한 변수입니다.
?>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<link href="common.css" rel="stylesheet">
<link href="style2.css" rel="stylesheet">
</head>
<body>
	<div id="container">
		<header>
			<div id="title">
				생활 계산기
			</div>
			<div id="sub-title">
				소비한 시간과 돈을 계산합니다.<br>
			</div>
		</header>
		<div id="content">
			이 곳에 내용을 넣어서 시작하면 됩니다.<br>
			내용을 넣을 수록 칸이 자동적으로 길어집니다.<br>
			////// 넘어온 값들 //////<br>
			<?php echo "$term $name<br>" ?> <!-- php echo로 변수를 보여줍니다. -->
			<?php echo "$type <br>" ?>		<!-- 변수를 사용할때는 $변수이름 으로 사용하면 됩니다. -->
			<?php echo "$time <br>" ?>		
			<?php echo "$money <br>" ?>
			<br>
			<br>
		</div>
		<footer>
		캡스톤디자인3 15조
		</footer>
	</div>
	<script></script>
</body>
</html>