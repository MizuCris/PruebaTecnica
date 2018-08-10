<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Gráfica Ventas</title>
	<link rel="stylesheet" href="css/estilo.css">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
<body>
	<header>
		<ul>
			<li>Prueba Técnica</li>
			<li>Agile</li>
		</ul>	
	</header>

	<div class="selects">
		<div class="selectGroup">
			<label>Categorias: </label> <select class="categorias"></select>
		</div>
		
		<div class="selectGroup">
			<label>Productos: </label> <select class="productos"></select>
		</div>
		
		<div class="selectGroup">
			<label>Marcas: </label> <select class="marcas"></select>
		</div>
	</div>

	<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

	<script type="text/javascript" src="js/main.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/data.js"></script>
	<script src="https://code.highcharts.com/modules/drilldown.js"></script>
</body>
</html>
