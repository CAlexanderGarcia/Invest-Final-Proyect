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
			listClients: [],
			listProduct: []
		},
		actions: {
			// Use getActions to call a function within a fuction
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
				console.log(data);
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/client", {
					method: "POST",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			changeClient: data => {
				console.log(data);
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/client", {
					method: "PUT",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			deleteClient: client => {
				const response = fetch(process.env.BACKEND_URL + "/client/" + client, {
					method: "DELETE",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data));
			},
			listClient: () => {
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/client", {
					method: "GET",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ listClients: data }));
			},
			createProduct: data => {
				console.log(data);
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/product", {
					method: "POST",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			changeProduct: data => {
				console.log(data);
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/product", {
					method: "PUT",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			deleteProduct: product => {
				const response = fetch(process.env.BACKEND_URL + "/product/" + product, {
					method: "DELETE",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data));
			},
			listProduct: () => {
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/product", {
					method: "GET",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ listProduct: data }));
			}
		}
	};
};

export default getState;
