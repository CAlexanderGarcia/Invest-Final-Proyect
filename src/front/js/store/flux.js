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
			listProducts: [],
			listSuppliers: []
		},
		actions: {
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

			/*************************************PROVEEDORES**********************************/

			createSupplier: data => {
				const response = fetch(process.env.BACKEND_URL + "/supplier", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			changeSupplier: data => {
				console.log(data);
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/supplier", {
					method: "PUT",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			deleteSupplier: supplier => {
				const response = fetch(process.env.BACKEND_URL + "/supplier/" + supplier, {
					method: "DELETE",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data));
			},
			updateSupplier: data => {
				const response = fetch(process.env.BACKEND_URL + "/supplier/" + data.id, {
					method: "PUT",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			listSupplier: () => {
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/supplier", {
					method: "GET",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ listSuppliers: data }));
			},

			/*************************************CLIENTES**********************************/

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
			updateClient: data => {
				const response = fetch(process.env.BACKEND_URL + "/client/" + data.id, {
					method: "PUT",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
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

			/********************PRODUCTOS**********************/
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
				}).then(resp => resp.json());
				return response;
			},
			updateProduct: data => {
				const response = fetch(process.env.BACKEND_URL + "/product/" + data.id, {
					method: "PUT",
					headers: {
						//	Authorization: "Bearer " + store.accessToken,
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
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
					.then(data => setStore({ listProducts: data }));
			}
		}
	};
};

export default getState;
