window.onload = function(){
	var categorias = new Array("Refrescos", "Jugos");
	var productos = new Array(
							new Array("Coca-Cola", "Pepsi"), 
							new Array("Quanty", "Jumex")
							);
	var marcas = new Array(
						new Array(
							new Array("Zero", "Vainilla"), 
							new Array("Light", "Lime")),
						new Array(
							new Array("Naranja", "Ponche"), 
							new Array("Mango", "Piña"))
						);

	var ventasMensuales = new Array(
							new Array(
								new Array(
									new Array(80, 98, 90, 78, 86), 
									new Array(36, 35, 65, 42, 20)
								), 
								new Array(
									new Array(65, 85, 85, 25, 12), 
									new Array(35, 16, 75, 30, 13)
								)
							),
							new Array(
								new Array(
									new Array(25, 80, 69, 65, 20), 
									new Array(28, 79, 82, 76, 65)
								), 
								new Array(
									new Array(20, 50, 60, 70, 80), 
									new Array(40, 25, 65, 20, 0)
								)
							)
						);

	function InCategorias(){
		var select = document.getElementsByClassName("categorias")[0];
		var newOption;
		for(categoria in categorias){
			newOption = document.createElement("option");
			newOption.innerHTML = categorias[categoria];
			select.appendChild(newOption);
		}
	}

	function InProductos(indiceCategoria){
		var select = document.getElementsByClassName("productos")[0];
		var newOption;
		for(producto in productos[indiceCategoria]){
			newOption = document.createElement("option");
			newOption.innerHTML = productos[indiceCategoria][producto];
			select.appendChild(newOption);
		}	
	}

	function InMarcas(indiceCategoria, indiceProducto){
		var select = document.getElementsByClassName("marcas")[0];
		var newOption;
		for(marca in marcas[indiceCategoria][indiceProducto]){
			newOption = document.createElement("option");
			newOption.innerHTML = marcas[indiceCategoria][indiceProducto][marca];
			select.appendChild(newOption);
		}	
	}

	function ventas(indiceCategoria, indiceProducto, indiceMarca){
		return ventasMensuales[indiceCategoria][indiceProducto][indiceMarca];
	}

	
	function changeProductos(){
		var indiceCategoria;
		var indiceProducto;
		for (var i = 0; i < categorias.length; i++) {
			if(categorias[i] == document.getElementsByClassName("categorias")[0].value){
				indiceCategoria = i;
				break;
			}
		}

		for (var i = 0; i < productos[indiceCategoria].length; i++) {
			if(productos[indiceCategoria][i] == document.getElementsByClassName("productos")[0].value){
				indiceProducto = i;
				break;
			}
		}		

		var selectMarcas = document.getElementsByClassName("marcas")[0];
		selectMarcas.innerHTML = "";
		InMarcas(indiceCategoria, indiceProducto);

		ventasValoresGrafica();
	}

	var selectProductos = document.getElementsByClassName("productos")[0];
	selectProductos.addEventListener("change", changeProductos);



	function changeCategorias(){
		var indiceCategoria;
		for (var i = 0; i < categorias.length; i++) {
			if(categorias[i] == this.value){
				indiceCategoria = i;
				break;
			}
		}

		var selectProductos = document.getElementsByClassName("productos")[0];
		selectProductos.innerHTML = "";
		InProductos(indiceCategoria);

		changeProductos();

	}

	var selectCategoria = document.getElementsByClassName("categorias")[0];
	selectCategoria.addEventListener("change", changeCategorias);


	function ventasValoresGrafica(){
		var indiceCategoria;
		var indiceProducto;
		var indiceMarca;

		for (var i = 0; i < categorias.length; i++) {
			if(categorias[i] == document.getElementsByClassName("categorias")[0].value){
				indiceCategoria = i;
				break;
			}
		}

		for (var i = 0; i < productos[indiceCategoria].length; i++) {
			if(productos[indiceCategoria][i] == document.getElementsByClassName("productos")[0].value){
				indiceProducto = i;
				break;
			}
		}

		for (var i = 0; i < marcas[indiceCategoria][indiceProducto].length; i++) {
			if(marcas[indiceCategoria][indiceProducto][i] == document.getElementsByClassName("marcas")[0].value){
				indiceMarca = i;
				break;
			}
		}

		var valoresVentas = ventas(indiceCategoria, indiceProducto, indiceMarca);


		// Create the chart
		Highcharts.chart('container', {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: 'Prueba Ventas'
		    },
		    xAxis: {
		        type: 'category'
		    },
		    yAxis: {
		        title: {
		            text: 'Ventas'
		        }

		    },
		    legend: {
		        enabled: false
		    },

		    tooltip: {
		        headerFormat: '<span style="font-size:10px">{series.name}</span><br>',
		        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> total<br/>'
		    },

		    series: [{
		        name: 'Brands',
		        colorByPoint: true,
		        data: [{
		            name: 'Enero',
		            y: valoresVentas[0],
		        }, {
		            name: 'Febrero',
		            y: valoresVentas[1],
		        }, {
		            name: 'Marzo',
		            y: valoresVentas[2],
		        }, {
		            name: 'Abril',
		            y: valoresVentas[3],
		        }, {
		            name: 'Mayo',
		            y: valoresVentas[4],
		        }]
		    }]
		});
		
	}

	var selectMarca = document.getElementsByClassName("marcas")[0];
	selectMarca.addEventListener("change", ventasValoresGrafica);

	InCategorias();
	InProductos(0);
	InMarcas(0, 0);
	ventasValoresGrafica();
}