var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Data_1 = new ol.format.GeoJSON();
var features_Data_1 = format_Data_1.readFeatures(json_Data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_1.addFeatures(features_Data_1);
var lyr_Data_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_1, 
                style: style_Data_1,
                popuplayertitle: 'Data',
                interactive: false,
                title: '<img src="styles/legend/Data_1.png" /> Data'
            });
var format_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2 = new ol.format.GeoJSON();
var features_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2 = format_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2.readFeatures(json_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2.addFeatures(features_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2);
var lyr_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2, 
                style: style_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2,
                popuplayertitle: 'WIUP_Mineral Bukan Logam dan Batuan (telah bayar PNBP)',
                interactive: true,
                title: '<img src="styles/legend/WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2.png" /> WIUP_Mineral Bukan Logam dan Batuan (telah bayar PNBP)'
            });
var format_WIUP_WIUPKMineralLogamdanBatubara_3 = new ol.format.GeoJSON();
var features_WIUP_WIUPKMineralLogamdanBatubara_3 = format_WIUP_WIUPKMineralLogamdanBatubara_3.readFeatures(json_WIUP_WIUPKMineralLogamdanBatubara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_WIUPKMineralLogamdanBatubara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_WIUPKMineralLogamdanBatubara_3.addFeatures(features_WIUP_WIUPKMineralLogamdanBatubara_3);
var lyr_WIUP_WIUPKMineralLogamdanBatubara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_WIUPKMineralLogamdanBatubara_3, 
                style: style_WIUP_WIUPKMineralLogamdanBatubara_3,
                popuplayertitle: 'WIUP_WIUPK Mineral Logam dan Batubara',
                interactive: true,
                title: '<img src="styles/legend/WIUP_WIUPKMineralLogamdanBatubara_3.png" /> WIUP_WIUPK Mineral Logam dan Batubara'
            });
var format_WIUP_IUPMineralBukanLogam_4 = new ol.format.GeoJSON();
var features_WIUP_IUPMineralBukanLogam_4 = format_WIUP_IUPMineralBukanLogam_4.readFeatures(json_WIUP_IUPMineralBukanLogam_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_IUPMineralBukanLogam_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_IUPMineralBukanLogam_4.addFeatures(features_WIUP_IUPMineralBukanLogam_4);
var lyr_WIUP_IUPMineralBukanLogam_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_IUPMineralBukanLogam_4, 
                style: style_WIUP_IUPMineralBukanLogam_4,
                popuplayertitle: 'WIUP_IUP Mineral Bukan Logam',
                interactive: true,
                title: '<img src="styles/legend/WIUP_IUPMineralBukanLogam_4.png" /> WIUP_IUP Mineral Bukan Logam'
            });
var format_IPR_5 = new ol.format.GeoJSON();
var features_IPR_5 = format_IPR_5.readFeatures(json_IPR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPR_5.addFeatures(features_IPR_5);
var lyr_IPR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPR_5, 
                style: style_IPR_5,
                popuplayertitle: 'IPR',
                interactive: true,
                title: '<img src="styles/legend/IPR_5.png" /> IPR'
            });
var format_WIUP_IUPBatuan_6 = new ol.format.GeoJSON();
var features_WIUP_IUPBatuan_6 = format_WIUP_IUPBatuan_6.readFeatures(json_WIUP_IUPBatuan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_IUPBatuan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_IUPBatuan_6.addFeatures(features_WIUP_IUPBatuan_6);
var lyr_WIUP_IUPBatuan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_IUPBatuan_6, 
                style: style_WIUP_IUPBatuan_6,
                popuplayertitle: 'WIUP_IUP Batuan',
                interactive: true,
                title: '<img src="styles/legend/WIUP_IUPBatuan_6.png" /> WIUP_IUP Batuan'
            });
var format_WIUP_IUPKBatubara_7 = new ol.format.GeoJSON();
var features_WIUP_IUPKBatubara_7 = format_WIUP_IUPKBatubara_7.readFeatures(json_WIUP_IUPKBatubara_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_IUPKBatubara_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_IUPKBatubara_7.addFeatures(features_WIUP_IUPKBatubara_7);
var lyr_WIUP_IUPKBatubara_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_IUPKBatubara_7, 
                style: style_WIUP_IUPKBatubara_7,
                popuplayertitle: 'WIUP_IUPK Batubara',
                interactive: true,
                title: '<img src="styles/legend/WIUP_IUPKBatubara_7.png" /> WIUP_IUPK Batubara'
            });
var format_WIUP_IUPBatubara_8 = new ol.format.GeoJSON();
var features_WIUP_IUPBatubara_8 = format_WIUP_IUPBatubara_8.readFeatures(json_WIUP_IUPBatubara_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_IUPBatubara_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_IUPBatubara_8.addFeatures(features_WIUP_IUPBatubara_8);
var lyr_WIUP_IUPBatubara_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_IUPBatubara_8, 
                style: style_WIUP_IUPBatubara_8,
                popuplayertitle: 'WIUP_IUP Batubara',
                interactive: true,
                title: '<img src="styles/legend/WIUP_IUPBatubara_8.png" /> WIUP_IUP Batubara'
            });
var format_WIUP_IUPKMineralLogam_9 = new ol.format.GeoJSON();
var features_WIUP_IUPKMineralLogam_9 = format_WIUP_IUPKMineralLogam_9.readFeatures(json_WIUP_IUPKMineralLogam_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_IUPKMineralLogam_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_IUPKMineralLogam_9.addFeatures(features_WIUP_IUPKMineralLogam_9);
var lyr_WIUP_IUPKMineralLogam_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_IUPKMineralLogam_9, 
                style: style_WIUP_IUPKMineralLogam_9,
                popuplayertitle: 'WIUP_IUPK Mineral Logam',
                interactive: true,
                title: '<img src="styles/legend/WIUP_IUPKMineralLogam_9.png" /> WIUP_IUPK Mineral Logam'
            });
var format_WIUP_IUPMineralLogam_10 = new ol.format.GeoJSON();
var features_WIUP_IUPMineralLogam_10 = format_WIUP_IUPMineralLogam_10.readFeatures(json_WIUP_IUPMineralLogam_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_IUPMineralLogam_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_IUPMineralLogam_10.addFeatures(features_WIUP_IUPMineralLogam_10);
var lyr_WIUP_IUPMineralLogam_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_IUPMineralLogam_10, 
                style: style_WIUP_IUPMineralLogam_10,
                popuplayertitle: 'WIUP_IUP Mineral Logam',
                interactive: true,
                title: '<img src="styles/legend/WIUP_IUPMineralLogam_10.png" /> WIUP_IUP Mineral Logam'
            });
var format_WIUP_PKP2B_11 = new ol.format.GeoJSON();
var features_WIUP_PKP2B_11 = format_WIUP_PKP2B_11.readFeatures(json_WIUP_PKP2B_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_PKP2B_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_PKP2B_11.addFeatures(features_WIUP_PKP2B_11);
var lyr_WIUP_PKP2B_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_PKP2B_11, 
                style: style_WIUP_PKP2B_11,
                popuplayertitle: 'WIUP_PKP2B',
                interactive: true,
                title: '<img src="styles/legend/WIUP_PKP2B_11.png" /> WIUP_PKP2B'
            });
var format_WIUP_KontrakKarya_12 = new ol.format.GeoJSON();
var features_WIUP_KontrakKarya_12 = format_WIUP_KontrakKarya_12.readFeatures(json_WIUP_KontrakKarya_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_KontrakKarya_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_KontrakKarya_12.addFeatures(features_WIUP_KontrakKarya_12);
var lyr_WIUP_KontrakKarya_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_KontrakKarya_12, 
                style: style_WIUP_KontrakKarya_12,
                popuplayertitle: 'WIUP_Kontrak Karya',
                interactive: true,
                title: '<img src="styles/legend/WIUP_KontrakKarya_12.png" /> WIUP_Kontrak Karya'
            });
var group_WIUP = new ol.layer.Group({
                                layers: [lyr_Data_1,lyr_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2,lyr_WIUP_WIUPKMineralLogamdanBatubara_3,lyr_WIUP_IUPMineralBukanLogam_4,lyr_IPR_5,lyr_WIUP_IUPBatuan_6,lyr_WIUP_IUPKBatubara_7,lyr_WIUP_IUPBatubara_8,lyr_WIUP_IUPKMineralLogam_9,lyr_WIUP_IUPMineralLogam_10,lyr_WIUP_PKP2B_11,lyr_WIUP_KontrakKarya_12,],
                                fold: 'open',
                                title: 'WIUP'});

lyr_Google_0.setVisible(true);lyr_Data_1.setVisible(true);lyr_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2.setVisible(true);lyr_WIUP_WIUPKMineralLogamdanBatubara_3.setVisible(true);lyr_WIUP_IUPMineralBukanLogam_4.setVisible(true);lyr_IPR_5.setVisible(true);lyr_WIUP_IUPBatuan_6.setVisible(true);lyr_WIUP_IUPKBatubara_7.setVisible(true);lyr_WIUP_IUPBatubara_8.setVisible(true);lyr_WIUP_IUPKMineralLogam_9.setVisible(true);lyr_WIUP_IUPMineralLogam_10.setVisible(true);lyr_WIUP_PKP2B_11.setVisible(true);lyr_WIUP_KontrakKarya_12.setVisible(true);
var layersList = [lyr_Google_0,group_WIUP];
lyr_Data_1.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'layer': 'layer', 'path': 'path', });
lyr_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'layer': 'layer', 'path': 'path', });
lyr_WIUP_WIUPKMineralLogamdanBatubara_3.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'layer': 'layer', 'path': 'path', });
lyr_WIUP_IUPMineralBukanLogam_4.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'layer': 'layer', 'path': 'path', });
lyr_IPR_5.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'layer': 'layer', 'path': 'path', });
lyr_WIUP_IUPBatuan_6.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_WIUP_IUPKBatubara_7.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_WIUP_IUPBatubara_8.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_WIUP_IUPKMineralLogam_9.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_WIUP_IUPMineralLogam_10.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_WIUP_PKP2B_11.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_WIUP_KontrakKarya_12.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'layer': 'layer', 'path': 'path', });
lyr_Data_1.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WIUP_WIUPKMineralLogamdanBatubara_3.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WIUP_IUPMineralBukanLogam_4.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_IPR_5.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WIUP_IUPBatuan_6.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_WIUP_IUPKBatubara_7.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_WIUP_IUPBatubara_8.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_WIUP_IUPKMineralLogam_9.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_WIUP_IUPMineralLogam_10.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_WIUP_PKP2B_11.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_WIUP_KontrakKarya_12.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Data_1.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_WIUP_MineralBukanLogamdanBatuantelahbayarPNBP_2.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_WIUP_WIUPKMineralLogamdanBatubara_3.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_WIUP_IUPMineralBukanLogam_4.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_IPR_5.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_WIUP_IUPBatuan_6.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', });
lyr_WIUP_IUPKBatubara_7.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', });
lyr_WIUP_IUPBatubara_8.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', });
lyr_WIUP_IUPKMineralLogam_9.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', });
lyr_WIUP_IUPMineralLogam_10.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', });
lyr_WIUP_PKP2B_11.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', });
lyr_WIUP_KontrakKarya_12.set('fieldLabels', {'objectid': 'inline label - always visible', 'pulau': 'inline label - always visible', 'pejabat': 'inline label - always visible', 'id_prov': 'inline label - always visible', 'nama_prov': 'inline label - always visible', 'id_kab': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'jenis_izin': 'inline label - always visible', 'badan_usah': 'inline label - always visible', 'nama_usaha': 'inline label - always visible', 'kode_wiup': 'inline label - always visible', 'sk_iup': 'inline label - always visible', 'tgl_berlak': 'inline label - always visible', 'tgl_akhir': 'inline label - always visible', 'kegiatan': 'inline label - always visible', 'luas_sk': 'inline label - always visible', 'komoditas': 'inline label - always visible', 'kode_golon': 'inline label - always visible', 'kode_jnsko': 'inline label - always visible', 'cnc': 'inline label - always visible', 'generasi': 'inline label - always visible', 'kode_wil': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_WIUP_KontrakKarya_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});