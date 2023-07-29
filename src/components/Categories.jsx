import React, { useState } from "react";

const Categories = ({ value, onClickCategory }) => {
	const categories = [
		"Все",
		"Мясные",
		"Вегетарианские",
		"Гриль",
		"Острые",
		"Закрытые",
	];

	return (
		<div className="categories">
			<ul>
				{categories.map((catName, i) => (
					<li
						key={i}
						onClick={() => onClickCategory(i)}
						className={value == i ? "active" : ""}
					>
						{catName}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
