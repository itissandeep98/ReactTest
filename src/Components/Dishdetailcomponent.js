import React, { Component } from 'react';
import "./MenuComponent";
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';


class Dishdetailcomp extends Component {
	rendercomment(c) {
		return (
			<div key={c.id}>
				<p>{c.comment}</p>
				<p>--{c.author}, {c.date}</p>
			</div>
		);

	}
	render() {
		const dish = this.props.dish;
		if (dish != null) {
			const comm = dish.comments.map((c) => {
				return this.rendercomment(c)
					;
			});
			return (
				<div className="row" >
					<div className="col-12 col-md-4" >
						<Card>
							<CardImg top src={dish.image} alt={dish.name} />
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-6">
						<h2>Comments</h2>
						{comm}
					</div>

				</div>
			);
		}
		else {
			return (
				<div></div>
			);
		}
	}
}
export default Dishdetailcomp;