import React from 'react';
import "./MenuComponent";
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Commentform from './CommentFormcomponent';



function rendercomment(c) {
	return (
		<div key={c.id}>
			<p>{c.comment}</p>
			<p>--{c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(c.date)))}</p>
		</div>
	);
}


function Dishdetail(props) {
	const dish=props.dish;
	const comments=props.comments;
	const addComment=props.addComment;
	const dishId=dish.id;
	if (dish != null) {
		const comm = comments.map((c) => {
			return rendercomment(c);
		});
		return (
			<div className="container">
				<div className="row" >
					<Breadcrumb>
						<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{dish.name}</h3>
						<hr />
					</div>
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
							<Commentform dishId={dishId}  addComment={addComment}/>
						</div>
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