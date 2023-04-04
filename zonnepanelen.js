<!DOCTYPE html>
<html>
<head>
	<title>Zonnepanelen calculator</title>
</head>
<body>
	<h1>Zonnepanelen calculator</h1>

	<p>Type dak:</p>
	<select id="dakType">
		<option value="plat">Plat dak</option>
		<option value="schuin">Schuin dak</option>
	</select>

	<p>Oriëntatie van het dak:</p>
	<select id="dakOrientatie">
		<option value="zuid">Zuid</option>
		<option value="noord">Noord</option>
		<option value="oost">Oost</option>
		<option value="west">West</option>
	</select>

	<p>Oppervlakte van het dak (in vierkante meters):</p>
	<input type="number" id="dakOppervlakte">

	<button onclick="berekenPanelen()">Bereken aantal panelen</button>

	<p>Aantal benodigde zonnepanelen:</p>
	<p id="panelenAantal"></p>

	<script>
		function berekenPanelen() {
			// Input gegevens
			const dakType = document.getElementById("dakType").value;
			const dakOrientatie = document.getElementById("dakOrientatie").value;
			const dakOppervlakte = document.getElementById("dakOppervlakte").value;

			// Berekening
			let panelenAantal = 0;

			if (dakType === "plat") {
			  // Berekening voor plat dak
			  panelenAantal = dakOppervlakte / 1.5; // Elke zonnepaneel neemt 1.5 vierkante meter in beslag
			} else if (dakType === "schuin") {
			  // Berekening voor schuin dak
			  if (dakOrientatie === "zuid") {
			    // Berekening voor zuidelijk georiënteerd dak
			    panelenAantal = dakOppervlakte / 1.8; // Elke zonnepaneel neemt 1.8 vierkante meter in beslag
			  } else {
			    // Berekening voor niet-zuidelijk georiënteerd dak
			    panelenAantal = dakOppervlakte / 2; // Elke zonnepaneel neemt 2 vierkante meter in beslag
			  }
			}

			// Output
			document.getElementById("panelenAantal").innerHTML = Math.ceil(panelenAantal); // Het aantal panelen wordt afgerond naar boven
		}
	</script>
</body>
</html>
