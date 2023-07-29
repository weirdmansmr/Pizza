import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/index";
import { useEffect, useState } from "react";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [categoryId, setCategoryId] = useState(0);
	const [sortId, setSortId] = useState({
		name: "популярности",
		sort: "rating",
	});

	useEffect(() => {
		setIsLoading(true);

		const sortBy = sortId.sort.replace('-', '')
		const order = sortId.sort.includes('-') ? 'desc' : 'asc';
		const category = categoryId > 0 ? `category=${categoryId}` : ''

		fetch(`https://6488e84b0e2469c038fe803a.mockapi.io/Pizza_list?${category}&sortBy=${sortBy}&order=${order}`)
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setPizzas(arr);
				setIsLoading(false);
			});
			window.scrollTo(0, 0)
	}, [categoryId, sortId]);

	return (
		<>
			<div className="content__top">
				<Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
				<Sort value={sortId} onClickSort={(id) => setSortId(id)} />
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
