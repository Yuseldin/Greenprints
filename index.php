<?php //require($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
require('head.php');
//get_header(); ?>
<body>
	<div id="root" class="container">
		<div class="top text-center">
			<h3 style="color:#555">Greenprints</h3>
		</div>

		<div class="container-flex middle" style="height:100%">

			<div class="flex-1">
				<div class="panel-container" style="height:100%">
					
					<button id="panel-toggle" class="panel-toggle">
						<span></span>
					</button>
					
					<div id="panel-side" class="panel-side"> 
						<div class="row">
							<div class="col-10">
								<h5 class="ml-2 mr-2"></h5>
							</div>
						</div>
						<div id="controls">
							<ul>
							<li>
								<input type="checkbox" id="show-bioregions">
								<label for="bioregions">Always show bioregions</label>
							</li>
							<li >
								<input type="checkbox" id="show-subregions">
								<label for="subregions">Always show sub-bioregions</label>
							</li>	
							<li>
								<input type="checkbox" id="hide-bioregions">
								<label for="bioregions">Hide bioregions</label>
							</li>
							<li >
								<input type="checkbox" id="hide-subregions">
								<label for="subregions">Hide sub-bioregions</label>
							</li>						 
							</ul>
						</div>
					</div>

					<div id="mapid"></div>
				</div>
				
			</div>
			<div class="flex-2">
				<div class="card information-display">
					<div class="card-body" id="subregion-detail">
					
					</div>
				</div>
			</div>
		</div>

		<div class="bottom">

		</div>
	</div>

	<div class="modal fade" id="region-detail-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h3 id="region-detail-title"></h3>
					<button id="modal-close-button" type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div id="region-detail-body" class="modal-body">
				
					<div id="accordion" role="tablist" aria-multiselectable="true">
						
					</div>
					<div id="region-loading">
						<div class="spinner"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript" src="./dist/bundle.js"></script>
</body>
<?php //get_footer(); ?>