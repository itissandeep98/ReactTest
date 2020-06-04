import React, { Component } from "react";
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Modal, ModalHeader, ModalBody, Button, Row, Label, Col } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class Commentform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};
		this.toggleModal = this.toggleModal.bind(this);

	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
		alert("current state is:" + JSON.stringify(values))

	}

	render() {
		return (
			<div className="row">
				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-pencil"></span> Submit Comment
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating" md={2}>Rating </Label>
								<Col md={10}>
									<Control.select model=".rating" className="form-check-input" name="rating">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>

								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="name" md={4}>Your Name</Label>
								<Col md={12}>
									<Control.text model=".name" className="form-control" name="name"
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(15)
										}} />
									<Errors
										className="text-danger"
										model=".name"
										show="touched"
										messages={{
											required: 'Required',
											minLength: ' must be greater than 2',
											maxLength: ' must be less than 15'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment" md={4}>Comment</Label>
								<Col md={12}>
									<Control.textarea model=".comment" className="form-control" name="comment" />
								</Col>

							</Row>
							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Submit
								</Button>
								</Col>
							</Row>
						</LocalForm>

					</ModalBody>
				</Modal>
			</div>
		);
	}

}
export default Commentform;