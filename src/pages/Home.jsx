import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/index";
import { useEffect, useState } from "react";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch("https://6488e84b0e2469c038fe803a.mockapi.io/Pizza_list")
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setPizzas(arr);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
					: pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</>
	);
};

export default Home;
