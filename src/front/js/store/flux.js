const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			name: [],
			country: [],
			city: [],
			base: [],
			locationsInput: [],
			coordinates: [],
			matrix: [],
			mapBoxToken: "pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGRucDQwMGliMm9rNnpuOG90MG9nIn0.5n3XuDKIqcxsIDs-1VGs7g",
			locations: [],
			resultObject: [],
			dataForMatrixFetch: [],
			tempRoute:[],
			bestRoute:[],
			teste: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				/*fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));*/
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
			getLocationsFromFrontOffice: (name,country, city, base, locationsInput) => {
				const store = getStore();
				setStore({name : name});
				setStore({country : country});
				setStore({city : city});
				setStore({base : base});
				setStore({locationsInput : locationsInput});

				if(store.locations != ""){
					store.locations = [];
				}

				store.locations[0] = base;
				
				for (let i = 0; i < locationsInput.length; i++){
					store.locations.push(locationsInput[i]);
				}
				


				//temp = [location1, location2, location3]

				//setStore({locations : locations});
				
				
			},
			fetchCoordinatesFromMapBox: () => {
				const store = getStore();

				let temp = [];

				let country = store.country.replace(/ /g , "%20");
				let city = store.city.replace(/ /g , "%20");

				let locations = store.locations;

				/*for(let i = 0; i < locations.length; i++){
					locations[i] = locations[i].replace(/ /g , "%20");
				}*/

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };

				for(let i = 0; i < store.locations.length; i++){
					fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + locations[i] + " " + city + ".json?country=" + country + "&limit=1&types=place%2Cpostcode%2Caddress%2Cpoi&access_token=" + store.mapBoxToken , requestOptions)
				.then(response => response.json())
				.then(result => temp.push(result))
				.catch(error => console.log('error', error));
				} 
				
				//console.log("store.locations", store.locations);
				setStore({resultObject : temp});
				console.log("store", store.resultObject);

				

				store.teste = "working";


			},
			createObject: () => {
				const store = getStore();

				let tempObj = []

				for(let i = 0; i < store.resultObject.length; i++){
					let temp = {"index" : i ,"Location" : store.resultObject[i].features[0].text,
					"Coordinates" : store.resultObject[i].features[0].geometry.coordinates};
					tempObj.push(temp);	
				}
				setStore({dataForMatrixFetch : tempObj});
				console.log("dataformatrix", store.dataForMatrixFetch);
			},
			fetchMatrixFromMapBox: () => {
				const store = getStore();

				let varForMatrix = [];

				for(let i = 0; i < store.dataForMatrixFetch.length; i++){
					varForMatrix.push(store.dataForMatrixFetch[i].Coordinates);
				}

				console.log("object with data",varForMatrix);

				let varForMatrixString = "";

				varForMatrixString = varForMatrix.join(";");
				
				console.log("string for fetch",varForMatrixString);

				let matrix = [];

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };

				
				fetch("https://api.mapbox.com/optimized-trips/v1/mapbox/walking/" + varForMatrixString + "?access_token=" + store.mapBoxToken , requestOptions)
				.then(response => response.json())
				.then(result => matrix.push(result))
				.catch(error => console.log('error', error));
				
				setStore({matrix : matrix});
				console.log("matrixFetched", matrix);

				
				

			},
			getBestRoute: () => {
				const store = getStore();

				let tempRoute = [];

				for(let i = 0; i < store.matrix.length; i++){
					for(let z = 0; z < store.matrix[i].waypoints.length; z++){
						tempRoute.push(store.matrix[i].waypoints[z].waypoint_index);
						console.log(tempRoute);
					}
				}

				setStore({tempRoute : tempRoute});
				console.log("storeMatrix", tempRoute);
			},
			showBestRoute: () => {
				const store = getStore()

				let temp = [];

				for(let i = 0;i < store.tempRoute.length; i++){
					temp.push(store.locations[store.tempRoute[i]])
				}

				console.log("temp",temp);
				setStore({bestRoute : temp});
			},
			removeItem: (i) => {
				const store = getStore();

				let temp = store.locations;

				console.log(temp);
		
				temp.splice(i, 1);
		
				setStore({locations : temp});
			}
		}
	};
};

export default getState;
