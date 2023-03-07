
'use strict';

// 初期状態の問題
let answer = [{ "01": "僕の" }, { "02": "お父さんは" }, { "03": "犬の" }, { "04": "散歩に" }, { "05": "行ったきり" }, { "06": "帰ってこなかった。" }, { "07": "残念！" }];

// 配列をランダムに並べ替えるファンクション
function Shuffle(array) {
	for (let i = (array.length - 1); 0 < i; i--) {
		// 0〜(i+1)の範囲で値を取得
		let r = Math.floor(Math.random() * (i + 1));
		// 要素の並び替えを実行
		let tmp = array[i];
		array[i] = array[r];
		array[r] = tmp;
	}
	return array;
}

$(function () {
	answer = Shuffle(answer);
	// console.log(answer.length);
	for (let i = 0; i < answer.length; i++) {
		for (let key in answer[i]) {
			$("#sortable").append('<div id ="' + key + '">' + answer[i][key]);
		}
	}
	let count = 0;   //試行回数を数えるカウンター変数を用意

	$('.tab').click(function () {
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		// $('.is-show').removeClass('is-show');
		$("#sortable").empty();

		const index = $(this).index();
		// $('.panel').eq(index).addClass('is-show');
		switch (index) {
			case 0:
				answer = [{ "01": "僕の" }, { "02": "お父さんは" }, { "03": "犬の" }, { "04": "散歩に" }, { "05": "行ったきり" }, { "06": "帰ってこなかった。" }, { "07": "残念!" }];
				break;
			case 1:
				answer = [{ "01": "私の" }, { "02": "お母さんは" }, { "03": "夕飯の" }, { "04": "買い物に" }, { "05": "行ったきり" }, { "06": "帰ってこなかった。" }, { "07": "残念!!" }];
				break;
			case 2:
				answer = [{ "01": "僕たちの" }, { "02": "両親は" }, { "03": "クリスマスの" }, { "04": "夜に" }, { "05": "突然" }, { "06": "帰ってきた。" }, { "07": "訳わからん!!!" }];
				break;
		}
		answer = Shuffle(answer);
		// console.log(answer);
		for (let i = 0; i < answer.length; i++) {
			for (let key in answer[i]) {
				$("#sortable").append('<div id ="' + key + '">' + answer[i][key]);
			}
		}
		count = 0;  //クリックでカウンターをリセット
		$("#hantei").text(''); //判定結果をクリア
	});

	// ソート
	$("#sortable").sortable({

		update: function (event, ui) {
			let updateRows = $(this).sortable('toArray').join(',');
			$("p").find('.toarray_text').text(updateRows);
			console.log(updateRows);
			count++;
			// var updatedInfo =  $('#sortable').sortable("toArray", { attribute: 'value' }).join(",");
			// console.log(updatedInfo + ": 何の値？")
			const answer = "01,02,03,04,05,06,07";
			//$('#judge_btn').on('click', function(){
			// for (let i = 0; i < answer.length; i++) {
			if (updateRows === answer) {
				console.log('CORRECT! ' + count + '回で正解！')
				$("#hantei").text('CORRECT! ' + count + '回で正解！');
			} else {
				console.log('LOSE')
				// }
			}

			//})
		}

	});



	// $('#judge_btn').on('click', function(){
	//   if(JSON.stringify(updateRows) === JSON.stringify(answer)){
	//     console.log('WIN')
	//   }else{
	//     console.log('LOSE')
	//   }
	// })
});
