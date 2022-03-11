const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			country: [],
			city: [],
			base: [],
			location1: [],
			location2: [],
			location3: [],
			coordinates: [],
			matrix: [],
			mapBoxToken: "pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGRucDQwMGliMm9rNnpuOG90MG9nIn0.5n3XuDKIqcxsIDs-1VGs7g",
			testeVar: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getLocationsFromFrontOffice: (country, city, base, location1, location2, location3) => {
				const store = getStore();

				setStore({country : country});
				setStore({city : city});
				setStore({base : base});
				setStore({location1 : location1});
				setStore({location2 : location2});
				setStore({location3 : location3});
				
				
			},
			fetchCoordinatesFromMapBox: () => {
				const store = getStore();

				temp = store.location1;

				store.testeVar = "baguinho"

				//setStore({testeVar : temp});
				/*var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };

				for(let i = 0; i < location.length; i++){
					fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + location[i] + ".json?country=" + country + "&city=" + city + "&access_token=" + mapBoxToken , requestOptions)
				.then(response => response.json())
				.then(result => {resultObject.push(result); console.log(resultObject)} )
				.catch(error => console.log('error', error));
				}  */
			},
			fetchMatrixFromMapBox: () => {
				const store = getStore();
			}
		}
	};
};

export default getState;
