var day_btn = document.getElementById("day-btn");
var week_btn = document.getElementById("week-btn");
var month_btn = document.getElementById("month-btn");
var year_btn = document.getElementById("year-btn");
var term_name = document.getElementById("hidden");

day_btn.addEventListener("click",selectDay);
week_btn.addEventListener("click",selectWeek);
month_btn.addEventListener("click",selectMonth);
year_btn.addEventListener("click",selectYear);

var display_form = document.getElementById("display-form");
var term_class = document.getElementById("term-class");

function selectDay(){
	display_form.style.display = "block";
	term_class.innerHTML = "";
	term_class.innerHTML = "일";
	term_name.value = "일";
}

function selectWeek(){
	display_form.style.display = "block";
	term_class.innerHTML = "";
	term_class.innerHTML = "주";
	term_name.value = "주";
}

function selectMonth(){
	display_form.style.display = "block";
	term_class.innerHTML = "";
	term_class.innerHTML = "월";
	term_name.value = "월";
}

function selectYear(){
	display_form.style.display = "block";
	term_class.innerHTML = "";
	term_class.innerHTML = "년";
	term_name.value="년";
}

function check_input()
{
	if(!document.form1.term.value) {
		alert("기간을 입력하세요!");
		document.form1.id.focus();
		return;
	}

	if(!document.form1.type.value) {
		alert("유형을 입력하세요!");
		document.form1.id.focus();
		return;
	}

	if(!document.form1.time.value) {
		alert("시간을 입력하세요!");
		document.form1.id.focus();
		return;
	}

	if(!document.form1.money.value) {
		alert("금액을 입력하세요!");
		document.form1.id.focus();
		return;
	}

	document.form1.submit();
}