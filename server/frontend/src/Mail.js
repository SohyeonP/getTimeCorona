import React from 'react';
import ReactContactForm from 'react-mail-form';
import './css/Mail.css';

class Mail extends React.Component {	

	render() {
		return (
			<div className="contact">
				<h1>CONTACT</h1>
			<ReactContactForm className="form" to="rladkfka0419@gmail.com"
				titleMaxLength={500}
				contentsMaxLength={10000}
				titlePlaceholder="답변 받을 이메일을 입력해주세요"
				contentsPlaceholder="내용을 입력해주세요"
				buttonText="보내기"
			/>
			</div>
		)
	}
}
export default Mail;