import React from 'react';
import "./MenuComponent";
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Commentform from './CommentFormcomponent';
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform,Fade,Random } from "react-animation-components";

function rendercomment(c) {
	return (
		<Fade in>
			<div key={c.id}>
				<p>{c.comment}</p>
				<p>--{c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(c.date)))}</p>
			</div>
		</Fade>
	);
}


function Dishdetail(props) {
	
	if(props.isLoading){
		return(
			<div className="container">
				<div className="row">
					<Loading/>
				</div>
			</div>
		);
	}
	else if(props.errMess){
		return (
			<div className="container">
				<div className="row">
					<h4>{props.errMess}</h4>
				</div>
			</div>
		);
	}
	const dish = props.dish;
	const comments = props.comments;
	const dishId = dish.id;
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
							<FadeTransform in transformProps={{
								exitTransform: 'scale(0.5) translateY(-50%)'
							}}>
								<Card>
									<CardImg top src={baseUrl+dish.image} alt={dish.name} />
									<CardBody>
										<CardTitle>{dish.name}</CardTitle>
										<CardText>{dish.description}</CardText>
									</CardBody>
								</Card>
							</FadeTransform>
						</div>
						<div className="col-6">
							<h2>Comments</h2>
							<Random in>
								{comm}
							</Random>
							<Commentform dishId={dishId}  postComment={props.postComment}/>
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