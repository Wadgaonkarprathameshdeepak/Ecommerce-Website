//App.js

import React, { useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';

function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'Roadster  Sweatshirt', 
		price: 499, 
		image: 
'https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger-with-sapce-your-test_460848-14315.jpg?size=626&ext=jpg&ga=GA1.1.1021492782.1712124589&semt=sph'		},
		{ id: 2, 
		name: 'H&M  Shirt', 
		price: 699, 
		image: 
'https://img.freepik.com/premium-photo/blue-shirt-is-hanging-black-pole-front-blue-wall_811902-266.jpg?size=626&ext=jpg&ga=GA1.1.1021492782.1712124589&semt=sph'		},
		{ id: 3, 
		name: 'Anouk Shirt', 
		price: 799, 
		image: 
'https://img.freepik.com/free-psd/stylish-blue-plaid-shirt-men-isolated-transparent-background_191095-23042.jpg?size=626&ext=jpg&ga=GA1.1.1021492782.1712124589&semt=sph'
		},

    { id: 3, 
      name: 'Collar Shirt', 
      price: 799, 
      image: 
'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/t/i/d/-original-imagz8h9zykz73gc.jpeg?q=70'      },

      { id: 4, 
        name: 'Formal shirt', 
        price: 799, 
        image: 
'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/c/y/x/m-fbrml-r-fibermill-original-imagyafqcup8qu4d.jpeg?q=70'        }
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
