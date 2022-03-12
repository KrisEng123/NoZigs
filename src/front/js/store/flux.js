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
			resultObject: []
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

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };

				for(let i = 0; i < store.locations.length; i++){
					fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + store.locations[i] + ".json?country=" + store.country + "&city=" + store.city + "&access_token=" + store.mapBoxToken , requestOptions)
				.then(response => response.json())
				.then(result => {temp.push(result);console.log("temp", temp)} )
				.catch(error => console.log('error', error));
				} 
				
				setStore({resultObject : temp});
				console.log("store", store.resultObject)

			},
			fetchMatrixFromMapBox: () => {
				const store = getStore();
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
