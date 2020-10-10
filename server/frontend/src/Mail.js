import React from 'react';
import './css/Mail.css';
import { Link } from "react-router-dom";
import $ from 'jquery';

$(document).ready(function() {
  $(".send").click(function() {
			$(".title").css("display","none");
    })
  })



class Mail extends React.Component {
	render() {
		return (
			<div id="contact">
				<h1 className="title">CONTACT</h1>
				<form className="gform" method="POST"
					action="https://script.google.com/macros/s/AKfycbyr-kxuOE7g4I73tF_m9zBHZDtiKMXpluCyswyUTgiU_7N1-ybL/exec"
				>
					{<div className="form-elements">
						<input type="email"
							placeholder="답변 받을 메일 주소를 입력해주세요."
							name="email"
						/>
						<textarea type="text"
							placeholder="내용을 입력해주세요"
							name="message"
						/>
						<button className="send">보내기</button>
					</div>}
					<div className="thankyou_message"
						style={{ display: 'none' }}
					>
						<h2>메일을 발송하였습니다.<br />빠른 시일내에 답변 드리겠습니다.</h2>
						<Link to="/">Home</Link>
					</div>
				</form>
			</div>
		)
	}
}
export default Mail;