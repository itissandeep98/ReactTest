import React from 'react';
import "./MenuComponent";
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';



function rendercomment(c) {
	return (
		<div key={c.id}>
			<p>{c.comment}</p>
			<p>--{c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(c.date))) }</p>
		</div>
	);
}

function Dishdetail({dish}) {
	if (dish != null) {
		const comm = dish.comments.map((c) => {
			return rendercomment(c);
		});
		return (
			<div className="container">
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
			</div>
		);
	}
	else {
		return (
			<div></div>
		);
	}
}
export default Dishdetail;