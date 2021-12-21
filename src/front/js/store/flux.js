const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			login: [{ username: "pepito", password: "1234" }]
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
			createUser: async data => {
				const response = await fetch("https://3001-chocolate-dog-a2eawcn9.ws-eu23.gitpod.io/api/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				});
				const resp = await response.json();
				return resp;
			},
			createSupplier: data => {
				const response = fetch(
					"https://3001-olive-swallow-mjq8hl9z.ws-eu23.gitpod.io" + "/api/register/supplier",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				).then(resp => resp.json());
				return response;
			},
			createClient: data => {
				const response = fetch(
					"https://3001-blue-anteater-g71sf0ld.ws-eu23.gitpod.io" + "/api/register/client",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				).then(resp => resp.json());
				return response;
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
			}
		}
	};
};

export default getState;
