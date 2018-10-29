$(function() {
	$("#first-choice").change(function() {
		var $dropdown = $(this);
		$.getJSON("/wordpress/subregions_json.json", function(data) {	
			var key = $dropdown.val();
			var vals = [];							
			switch(key) {
				case 'Arnhem Coast':
					vals = data.ArnhemCoast.split(",");
					break;
				case 'Arnhem Plateau':
					vals = data.ArnhemPlateau.split(",");
					break;
				case 'Australian Alps':
					vals = data.AustralianAlps.split(",");
					break;
				case 'Avon Wheatbelt':
					vals = data.AvonWheatbelt.split(",");
					break;
				case 'Brigalow Belt North':
					vals = data.BrigalowBeltNorth.split(",");
					break;
				case 'Brigalow Belt South':
					vals = data.BrigalowBeltSouth.split(",");
					break;
				case 'Ben Lomond':
					vals = data.BenLomond.split(",");
					break;
				case 'Broken Hill Complex':
					vals = data.BrokenHillComplex.split(",");
					break;
				case 'Burt Plain':
					vals = data.BurtPlain.split(",");
					break;
				case 'Carnarvon':
					vals = data.Carnarvon.split(",");
					break;
				case 'Central Arnhem':
					vals = data.CentralArnhem.split(",");
					break;
				case 'Central Kimberley':
					vals = data.CentralKimberley.split(",");
					break;
				case 'Central Ranges':
					vals = data.CentralRanges.split(",");
					break;
				case 'Channel Country':
					vals = data.ChannelCountry.split(",");
					break;
				case 'Central Mackay Coast':
					vals = data.CentralMackayCoast.split(",");
					break;
				case 'Coolgardie':
					vals = data.Coolgardie.split(",");
					break;
				case 'Cobar Peneplain':
					vals = data.CobarPeneplain.split(",");
					break;
				case 'Coral Sea':
					vals = data.CoralSea.split(",");
					break;
				case 'Cape York Peninsula':
					vals = data.CapeYorkPeninsula.split(",");
					break;
				case 'Daly Basin':
					vals = data.DalyBasin.split(",");
					break;
				case 'Darwin Coastal':
					vals = data.DarwinCoastal.split(",");
					break;
				case 'Dampierland':
					vals = data.Dampierland.split(",");
					break;
				case 'Desert Uplands':
					vals = data.DesertUplands.split(",");
					break;
				case 'Davenport Murchison Ranges':
					vals = data.DavenportMurchisonRanges.split(",");
					break;
				case 'Darling Riverine Plains':
					vals = data.DarlingRiverinePlains.split(",");
					break;
				case 'Einasleigh Uplands':
					vals = data.EinasleighUplands.split(",");
					break;
				case 'Esperance Plains':
					vals = data.EsperancePlains.split(",");
					break;
				case 'Eyre Yorke Block':
					vals = data.EyreYorkeBlock.split(",");
					break;
				case 'Finke':
					vals = data.Finke.split(",");
					break;
				case 'Flinders Lofty Block':
					vals = data.FlindersLoftyBlock.split(",");
					break;
				case 'Furneaux':
					vals = data.Furneaux.split(",");
					break;
				case 'Gascoyne':
					vals = data.Gascoyne.split(",");
					break;
				case 'Gawler':
					vals = data.Gawler.split(",");
					break;
				case 'Geraldton Sandplains':
					vals = data.GeraldtonSandplains.split(",");
					break;
				case 'Gulf Fall and Uplands':
					vals = data.GulfFallandUplands.split(",");
					break;
				case 'Gibson Desert':
					vals = data.GibsonDesert.split(",");
					break;
				case 'Great Sandy Desert':
					vals = data.GreatSandyDesert.split(",");
					break;
				case 'Gulf Coastal':
					vals = data.GulfCoastal.split(",");
					break;
				case 'Gulf Plains':
					vals = data.GulfPlains.split(",");
					break;
				case 'Great Victoria Desert':
					vals = data.GreatVictoriaDesert.split(",");
					break;
				case 'Hampton':
					vals = data.Hampton.split(",");
					break;
				case 'Indian Tropical Islands':
					vals = data.IndianTropicalIslands.split(",");
					break;
				case 'Jarrah Forest':
					vals = data.JarrahForest.split(",");
					break;
				case 'Kanmantoo':
					vals = data.Kanmantoo.split(",");
					break;
				case 'King':
					vals = data.King.split(",");
					break;
				case 'Little Sandy Desert':
					vals = data.LittleSandyDesert.split(",");
					break;
				case 'MacDonnell Ranges':
					vals = data.MacDonnellRanges.split(",");
					break;
				case 'Mallee':
					vals = data.Mallee.split(",");
					break;
				case 'Murray Darling Depression':
					vals = data.MurrayDarlingDepression.split(",");
					break;
				case 'Mitchell Grass Downs':
					vals = data.MitchellGrassDowns.split(",");
					break;
				case 'Mount Isa Inlier':
					vals = data.MountIsaInlier.split(",");
					break;
				case 'Mulga Lands':
					vals = data.MulgaLands.split(",");
					break;
				case 'Murchison':
					vals = data.Murchison.split(",");
					break;
				case 'Nandewar':
					vals = data.Nandewar.split(",");
					break;
				case 'Naracoorte Coastal Plain':
					vals = data.NaracoorteCoastalPlain.split(",");
					break;
				case 'New England Tablelands':
					vals = data.NewEnglandTablelands.split(",");
					break;
				case 'NSW North Coast':
					vals = data.NSWNorthCoast.split(",");
					break;
				case 'Northern Kimberley':
					vals = data.NorthernKimberley.split(",");
					break;
				case 'NSW South Western Slopes':
					vals = data.NSWSouthWesternSlopes.split(",");
					break;
				case 'Nullarbor':
					vals = data.Nullarbor.split(",");
					break;
				case 'Ord Victoria Plain':
					vals = data.OrdVictoriaPlain.split(",");
					break;
				case 'Pine Creek':
					vals = data.PineCreek.split(",");
					break;
				case 'Pilbara':
					vals = data.Pilbara.split(",");
					break;
				case 'Pacific Subtropical Islands':
					vals = data.PacificSubtropicalIslands.split(",");
					break;
				case 'Riverina':
					vals = data.Riverina.split(",");
					break;
				case 'Subantarctic Islands':
					vals = data.SubantarcticIslands.split(",");
					break;
				case 'South East Coastal Plain':
					vals = data.SouthEastCoastalPlain.split(",");
					break;
				case 'South East Corner':
					vals = data.SouthEastCorner.split(",");
					break;
				case 'South Eastern Highlands':
					vals = data.SouthEasternHighlands.split(",");
					break;
				case 'South Eastern Queensland':
					vals = data.SouthEasternQueensland.split(",");
					break;
				case 'Simpson Strzelecki Dunefields':
					vals = data.SimpsonStrzeleckiDunefields.split(",");
					break;
				case 'Stony Plains':
					vals = data.StonyPlains.split(",");
					break;
				case 'Sturt Plateau':
					vals = data.SturtPlateau.split(",");
					break;
				case 'Southern Volcanic Plain':
					vals = data.SouthernVolcanicPlain.split(",");
					break;
				case 'Swan Coastal Plain':
					vals = data.SwanCoastalPlain.split(",");
					break;
				case 'Sydney Basin':
					vals = data.SydneyBasin.split(",");
					break;
				case 'Tanami':
					vals = data.Tanami.split(",");
					break;
				case 'Tasmanian Central Highlands':
					vals = data.TasmanianCentralHighlands.split(",");
					break;
				case 'Tiwi Cobourg':
					vals = data.TiwiCobourg.split(",");
					break;
				case 'Tasmanian Northern Midlands':
					vals = data.TasmanianNorthernMidlands.split(",");
					break;
				case 'Tasmanian Northern Slopes':
					vals = data.TasmanianNorthernSlopes.split(",");
					break;
				case 'Tasmanian South East':
					vals = data.TasmanianSouthEast.split(",");
					break;
				case 'Tasmanian Southern Ranges':
					vals = data.TasmanianSouthernRanges.split(",");
					break;
				case 'Tasmanian West':
					vals = data.TasmanianWest.split(",");
					break;
				case 'Victoria Bonaparte':
					vals = data.VictoriaBonaparte.split(",");
					break;
				case 'Victorian Midlands':
					vals = data.VictorianMidlands.split(",");
					break;
				case 'Warren':
					vals = data.Warren.split(",");
					break;
				case 'Wet Tropics':
					vals = data.WetTropics.split(",");
					break;
				case 'Yalgoo':
					vals = data.Yalgoo.split(",");
					break;
			}		
			var $secondChoice = $("#second-choice");
			$secondChoice.empty();
			$.each(vals, function(index, value) {
				$secondChoice.append("<option>" + value + "</option>");
			});
		});
	});
});