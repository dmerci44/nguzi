var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Rivshar_1 = new ol.format.GeoJSON();
var features_Rivshar_1 = format_Rivshar_1.readFeatures(json_Rivshar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivshar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivshar_1.addFeatures(features_Rivshar_1);
var lyr_Rivshar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivshar_1, 
                style: style_Rivshar_1,
                popuplayertitle: 'Riv shar',
                interactive: true,
                title: '<img src="styles/legend/Rivshar_1.png" /> Riv shar'
            });
var format_nguzipoly_2 = new ol.format.GeoJSON();
var features_nguzipoly_2 = format_nguzipoly_2.readFeatures(json_nguzipoly_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nguzipoly_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nguzipoly_2.addFeatures(features_nguzipoly_2);
var lyr_nguzipoly_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nguzipoly_2, 
                style: style_nguzipoly_2,
                popuplayertitle: 'nguzi poly',
                interactive: true,
                title: '<img src="styles/legend/nguzipoly_2.png" /> nguzi poly'
            });
var format_cheki3pol_3 = new ol.format.GeoJSON();
var features_cheki3pol_3 = format_cheki3pol_3.readFeatures(json_cheki3pol_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheki3pol_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheki3pol_3.addFeatures(features_cheki3pol_3);
var lyr_cheki3pol_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheki3pol_3, 
                style: style_cheki3pol_3,
                popuplayertitle: 'cheki 3 pol',
                interactive: true,
                title: '<img src="styles/legend/cheki3pol_3.png" /> cheki 3 pol'
            });
var format_cheki3num_4 = new ol.format.GeoJSON();
var features_cheki3num_4 = format_cheki3num_4.readFeatures(json_cheki3num_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheki3num_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheki3num_4.addFeatures(features_cheki3num_4);
var lyr_cheki3num_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheki3num_4, 
                style: style_cheki3num_4,
                popuplayertitle: 'cheki 3 num',
                interactive: true,
                title: '<img src="styles/legend/cheki3num_4.png" /> cheki 3 num'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Rivshar_1.setVisible(true);lyr_nguzipoly_2.setVisible(true);lyr_cheki3pol_3.setVisible(true);lyr_cheki3num_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Rivshar_1,lyr_nguzipoly_2,lyr_cheki3pol_3,lyr_cheki3num_4];
lyr_Rivshar_1.set('fieldAliases', {'rr': 'rr', });
lyr_nguzipoly_2.set('fieldAliases', {'ng': 'ng', });
lyr_cheki3pol_3.set('fieldAliases', {'h': 'h', });
lyr_cheki3num_4.set('fieldAliases', {'cf': 'cf', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Rivshar_1.set('fieldImages', {'rr': '', });
lyr_nguzipoly_2.set('fieldImages', {'ng': '', });
lyr_cheki3pol_3.set('fieldImages', {'h': '', });
lyr_cheki3num_4.set('fieldImages', {'cf': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Rivshar_1.set('fieldLabels', {'rr': 'no label', });
lyr_nguzipoly_2.set('fieldLabels', {'ng': 'no label', });
lyr_cheki3pol_3.set('fieldLabels', {'h': 'no label', });
lyr_cheki3num_4.set('fieldLabels', {'cf': 'no label', });
lyr_cheki3num_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});