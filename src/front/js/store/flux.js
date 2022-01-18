const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			listClients: [],
			listProducts: [],
			listSuppliers: [],
			tokenUser: {},
			listBills: []
		},
		actions: {
			createUser: data => {
				const response = fetch(process.env.BACKEND_URL + "/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(resp => resp.json())
					.catch(error => console.log("User can not be created", error));
				console.log(response);
				return response;
			},
			/*************************************LOGIN**********************************/
			login: async data => {
				let resp = {};
				try {
					const response = await fetch(process.env.BACKEND_URL + "/token", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					});
					resp = await response.json();
				} catch (error) {
					console.log(error);
				}
				if (resp.token) {
					setStore({ tokenUser: resp });
					localStorage.setItem("tokenUser", resp.token); //guarda el token en el local Store("base de datos" del navegador)
					return true;
				} else {
					return false;
				}
			},
			/*************************************TOKEN**********************************/
			getToken: () => {
				const token = localStorage.getItem("tokenUser"); //Busca en la local store un elemento en este caso el token
				return token ? token : null;
			},
			removeToken: () => {
				localStorage.clear();
				setStore({ tokenUser: null });
			},

			/*************************************PROVEEDORES**********************************/

			createSupplier: data => {
				const response = fetch(process.env.BACKEND_URL + "/supplier", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getActions().getToken()
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
						Authorization: "Bearer " + getActions().getToken(),
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
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					}
				}).then(resp => resp.json());
				return response;
			},
			updateSupplier: data => {
				const response = fetch(process.env.BACKEND_URL + "/supplier/" + data.id, {
					method: "PUT",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
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
						Authorization: "Bearer " + getActions().getToken(),
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
				console.log(store.tokenUser);
				const response = fetch(process.env.BACKEND_URL + "/client", {
					method: "POST",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
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
						Authorization: "Bearer " + getActions().getToken(),
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
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					}
				}).then(resp => resp.json());
				return response;
			},
			updateClient: data => {
				const response = fetch(process.env.BACKEND_URL + "/client/" + data.id, {
					method: "PUT",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			listClient: () => {
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/clients", {
					method: "GET",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ listClients: data.clients }));
			},

			/********************PRODUCTOS**********************/
			createProduct: data => {
				console.log(data);
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/product", {
					method: "POST",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
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
						Authorization: "Bearer " + getActions().getToken(),
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
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					}
				}).then(resp => resp.json());
				return response;
			},
			updateProduct: data => {
				const response = fetch(process.env.BACKEND_URL + "/product/" + data.id, {
					method: "PUT",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(resp => resp.json());
				return response;
			},
			listProduct: () => {
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/products", {
					method: "GET",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ listProducts: data.products }));
			},
			/********************FACTURAS**********************/

			listBill: () => {
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/bills", {
					method: "GET",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ listBills: data.bills }));
			},
			createBill: async data => {
				const response = await fetch(process.env.BACKEND_URL + "/bills", {
					method: "POST",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(data => {
					setStore({ listBills: data.bills });
					return data;
				});
				return response.ok;
			},
			detailBill: id => {
				const store = getStore();
				const response = fetch(process.env.BACKEND_URL + "/bills/" + id, {
					method: "GET",
					headers: {
						Authorization: "Bearer " + getActions().getToken(),
						"Content-Type": "application/json"
					}
				}).then(resp => resp.json());
				return response;
			}
		}
	};
};

export default getState;
