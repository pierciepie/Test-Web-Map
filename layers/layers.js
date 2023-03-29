var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_D_West_Wards_1 = new ol.format.GeoJSON();
var features_D_West_Wards_1 = format_D_West_Wards_1.readFeatures(json_D_West_Wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_West_Wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_West_Wards_1.addFeatures(features_D_West_Wards_1);
var lyr_D_West_Wards_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_D_West_Wards_1, 
                style: style_D_West_Wards_1,
                interactive: true,
                title: '<img src="styles/legend/D_West_Wards_1.png" /> D_West_Wards'
            });
var format_Dublin_West_2 = new ol.format.GeoJSON();
var features_Dublin_West_2 = format_Dublin_West_2.readFeatures(json_Dublin_West_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dublin_West_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dublin_West_2.addFeatures(features_Dublin_West_2);
var lyr_Dublin_West_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dublin_West_2, 
                style: style_Dublin_West_2,
                interactive: true,
                title: '<img src="styles/legend/Dublin_West_2.png" /> Dublin_West'
            });

lyr_OSMStandard_0.setVisible(true);lyr_D_West_Wards_1.setVisible(true);lyr_Dublin_West_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_D_West_Wards_1,lyr_Dublin_West_2];
lyr_D_West_Wards_1.set('fieldAliases', {'ED_ID': 'ED_ID', 'ENGLISH': 'ENGLISH', 'GAEILGE': 'GAEILGE', 'CONTAE': 'CONTAE', 'COUNTY': 'COUNTY', 'PROVINCE': 'PROVINCE', 'GUID': 'GUID', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'AREA': 'AREA', 'ESRI_OID': 'ESRI_OID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Dublin_West_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'GUID': 'GUID', 'CON_SEAT_': 'CON_SEAT_', 'CON_ID': 'CON_ID', 'OBJECTID': 'OBJECTID', 'InPoly_FID': 'InPoly_FID', 'SimPgnFlag': 'SimPgnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_D_West_Wards_1.set('fieldImages', {'ED_ID': 'TextEdit', 'ENGLISH': 'TextEdit', 'GAEILGE': 'TextEdit', 'CONTAE': 'TextEdit', 'COUNTY': 'TextEdit', 'PROVINCE': 'TextEdit', 'GUID': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'AREA': 'TextEdit', 'ESRI_OID': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Dublin_West_2.set('fieldImages', {'OBJECTID_1': 'Range', 'GUID': 'TextEdit', 'CON_SEAT_': 'TextEdit', 'CON_ID': 'TextEdit', 'OBJECTID': 'TextEdit', 'InPoly_FID': 'Range', 'SimPgnFlag': 'Range', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_D_West_Wards_1.set('fieldLabels', {'ED_ID': 'no label', 'ENGLISH': 'no label', 'GAEILGE': 'no label', 'CONTAE': 'no label', 'COUNTY': 'no label', 'PROVINCE': 'no label', 'GUID': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'AREA': 'no label', 'ESRI_OID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Dublin_West_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'GUID': 'no label', 'CON_SEAT_': 'no label', 'CON_ID': 'no label', 'OBJECTID': 'no label', 'InPoly_FID': 'no label', 'SimPgnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Dublin_West_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});