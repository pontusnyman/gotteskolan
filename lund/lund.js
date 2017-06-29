
//jQuery( '#infowindow' ).hide();
function initMap(){

	//Information om skolorna
	var almbacken = {
		info: '<strong>Almbacken</strong><br>\
				<p>Skolområde: Fågelsång</p>\
				<p>Telefon: 046-3598026</p>',
		lat: 55.711003, 
		long: 13.342027
	};

    var annergarden = {
		info: '<strong>Annergården</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3599553</p>',
		lat: 55.729326, 
		long: 13.193158
	};

    var bjorkbacken = {
		info: '<strong>Björkbacken</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3599553</p>',
		lat: 55.719108, 
		long: 13.341204
	};

    var blaklinten = {
		info: '<strong>Blåklinten</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.712330, 
		long: 13.233771
	};

    var blatunga = {
		info: '<strong>Blåtunga</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.712251, 
		long: 13.233530
	};

    var dh = {
		info: '<strong>Djingis Khan</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.714660, 
		long: 13.231584
	};

    var enestugan = {
		info: '<strong>Enestugan</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.597316, 
		long: 13.396251
	};

    var fornborgen = {
		info: '<strong>Fornborgen</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.728055, 
		long: 13.164452
	};

    var forsbergsminne = {
		info: '<strong>Forsbergs minne</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.708346, 
		long: 13.184076
	};

    var fagelbla = {
		info: '<strong>Fågel Blå</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.707653, 
		long: 13.162745
	};

    var fagelsang = {
		info: '<strong>Fågelsång</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.708701, 
		long: 13.334515
	};

    var grynmalaregarden = {
		info: '<strong>Grynmalaregården</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.699651,
		long: 13.194173
	};

    var hagen = {
		info: '<strong>Hagen</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.671601,
		long: 13.339582
	};

    var hallonbacken = {
		info: '<strong>Hallonbacken</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.719853,
		long: 13.340805
	};

    var hansgreta = {
		info: '<strong>Hans och Greta</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.727108, 
		long: 13.199859
	};

    var hedenhos = {
		info: '<strong>Hedenhös</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.721178,
		long: 13.163750
	};

    var holken = {
		info: '<strong>Holken</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.709281, 
		long: 13.190305
	};

    var hyddan = {
		info: '<strong>Hyddan</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.731653, 
		long: 13.173427
	};

    var Hackeberga = {
		info: '<strong>Häckeberga</strong><br>\
				<p>Skolområde: Norra Fäladen</p>\
				<p>Telefon: 046-3596422</p>',
		lat: 55.601240,
		long: 13.406253
	};

	//Lunds Array
	var locations = [
		[almbacken.info, almbacken.lat, almbacken.long, 0],
        [annergarden.info, annergarden.lat, annergarden.long, 1],
        [bjorkbacken.info, bjorkbacken.lat, bjorkbacken.long, 2],
        [blaklinten.info, blaklinten.lat, blaklinten.long, 3],
        [blatunga.info, blatunga.lat, blatunga.long, 4],
        [dh.info, dh.lat, dh.long, 5],
        [enestugan.info, enestugan.lat, enestugan.long, 6],
        [fornborgen.info, fornborgen.lat, fornborgen.long, 7],
        [forsbergsminne.info, forsbergsminne.lat, forsbergsminne.long, 8],
        [fagelbla.info, fagelbla.lat, fagelbla.long, 9],
        [fagelsang.info, fagelsang.lat, fagelsang.long, 10],
        [grynmalaregarden.info, grynmalaregarden.lat, grynmalaregarden.long, 11],
        [hagen.info, hagen.lat, hagen.long, 12],
        [hallonbacken.info, hallonbacken.lat, hallonbacken.long, 13],
        [hansgreta.info, hansgreta.lat, hansgreta.long, 14],
        [hedenhos.info, hedenhos.lat, hedenhos.long, 15],
        [holken.info, holken.lat, holken.long, 16],
        [hyddan.info, hyddan.lat, hyddan.long, 17],
        [Hackeberga.info, Hackeberga.lat, Hackeberga.long, 18]     
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 12,
	center: new google.maps.LatLng(55.705947, 13.198245),
    disableDefaultUI: true,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				//var name = locations[i].getAttribute("info");
				//var show = "<b>" + name + "</b>";
				//infowindow.setContent(locations[i][0]);
				//infowindow.setContent(show);
				//infowindow.open(map, marker, show);
				jQuery( '#infowindow' ).css('visibility','visible');
        		jQuery( '#infowindow' ).empty();
        		jQuery( '#infowindow' ).append( locations[i][0] );	
			}
		})(marker, i));
	};

    function showError(error) {
      map.setCenter(new google.maps.LatLng(55.705947, 13.198245));
    }

};


