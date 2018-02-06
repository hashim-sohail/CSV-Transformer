function buildTable(results){

	var markup = "<table class='table'>";
	var data = results.data;
	var new_csv = [];
	var str = '';
	var sku_string = '';
	sku_string+= "\"";
	var image_string = '';
	var image_name = '';
	var image_appenders = ['', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var file_type = document.getElementById('file_type').value;
	var brand = document.getElementById('brand_name').value;
	for(var i in data){
		var str = data[i][0];
		var result = str.replace(/"[^"]+"/g, function (match) {
    return match.replace(/,/g, '|');
	});
	data[i][0] = result;
	var row = data[i];
		var cells = row.join(",").split(",");
		for(var i in cells){
			cells[i] = cells[i].split('|').join(',');
		}
		if(cells.length > 1){
			if(cells[8] == image_name || cells[2] == ''){

			} else {
				image_string = '';
				image_string += "\"";
				image_name = cells[8];
				for(var i=0;i<cells[9];i++){
					image_string += image_name + image_appenders[i] + '.jpg';
					if(i < cells[9]-1){
						image_string += ',';
					}
				}
				image_string+= "\"";
			}

			if(file_type == 'simple'){
				var name = cells[3].toLowerCase();
				name = name.split(' ').join('-');
				var stringToPush = [cells[0], '', 'Default', 'simple', cells[4], 'pk', cells[3], cells[6], cells[5],  '1', '1', 'Taxable Goods', '"Catalog, Search"', cells[7],  '', '', '',cells[8].toLowerCase() + '-' + name ,  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', cells[1], '', '','',cells[10], '1', '1', '0', '0', '1', '1', '0', '0',  '1', '1', '', '1', '1', '1', '1', '1', '1', '0', '0', '1', '0', '1', 'no', 'no',  '', '', '', '', '', '', '', '', '', cells[11], cells[12], cells[8]+'.jpg', cells[8]+'.jpg', cells[8]+'.jpg', image_string, '' ,cells[12].toLowerCase(), cells[13]];
				new_csv.push(stringToPush);
			} else {
				if(cells[2] == ''){
					sku_string = sku_string.slice(0, -1);
					sku_string += "\"";
					var name = cells[3].toLowerCase();
					name = name.split(' ').join('-');
					var stringToPush = [cells[0], '', 'Default', 'configurable', cells[4], 'base', cells[3], cells[6], cells[5],  '1', '1', 'Taxable Goods', '"Catalog, Search"', cells[7],  '', '', '',cells[8].toLowerCase() + '-' + name ,  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', cells[1], '', '',sku_string, cells[10], '1', '1', '0', '0', '1', '1', '0', '0',  '1', '1', '', '1', '1', '1', '1', '1', '1', '0', '0', '1', '0', '1', 'no', 'no',  '', '', '', '', '', '', '', '', '', cells[11], cells[12], cells[8]+'.jpg', cells[8]+'.jpg', cells[8]+'.jpg', image_string, '' ,cells[12].toLowerCase(), ''];
					if(brand  == 'Zeen'){
						stringToPush[5] = 'pk';
						stringToPush.push(cells[13]);
					}
					new_csv.push(stringToPush);
					sku_string = '';
					sku_string+= "\"";
				} else {
					sku_string += 'sku=' + cells[0] + ',' + 'size=' + cells[2] + '|';
					var name = cells[3].toLowerCase();
					name = name.split(' ').join('-');
					var stringToPush = [cells[0], '' , 'Default', 'simple', cells[4], 'base', cells[3], cells[6], cells[5], '1', '1', 'Taxable Goods', 'Not Visible Individually', cells[7], '', '', '', cells[8].toLowerCase() + '-'  + name , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', cells[1], cells[2], '', '',  cells[10], '1', '1', '0', '0', '1', '1', '0', '0', '1', '1', '',  '1', '1', '1', '1', '1', '1', '0', '0', '1', '0', '1', 'no', 'no', '', '', '', '', '', '', '', '', '', cells[11], cells[12], cells[8]+'.jpg', cells[8]+'.jpg', cells[8]+'.jpg', image_string, '',cells[12].toLowerCase(), ''];
					if(brand  == 'Zeen'){
						stringToPush[5] = 'pk';
						stringToPush.push(cells[13]);
					}
					new_csv.push(stringToPush);
				}
			}
		}
	}

	if(brand == 'Zeen'){
		var header = 'sku,store_view_code,attribute_set_code,product_type,categories,product_websites,name,description,short_description,weight,product_online,tax_class_name,visibility,price,special_price,special_price_from_date,special_price_to_date,url_key,created_at,updated_at,new_from_date,new_to_date,display_product_options_in,map_price,msrp_price,map_enabled,gift_message_available,custom_design,custom_design_from,custom_design_to,custom_layout_update,page_layout,product_options_container,msrp_display_actual_price_type,country_of_manufacture,related_skus,color,size,additional_attributes,configurable_variations,qty,out_of_stock_qty,use_config_min_qty,is_qty_decimal,allow_backorders,use_config_backorders,min_cart_qty,use_config_min_sale_qty,max_cart_qty,use_config_max_sale_qty,is_in_stock,notify_on_stock_below,use_config_notify_stock_qty,manage_stock,use_config_manage_stock,use_config_qty_increments,qty_increments,use_config_enable_qty_inc,enable_qty_increments,is_decimal_divided,website_id,deferred_stock_update,use_config_deferred_stock_update,pre_order,pre_order_msg,upsell_skus,hide_from_product_page,custom_options,bundle_price_type,bundle_sku_type,bundle_price_view,bundle_weight_type,bundle_values,associated_skus,manufacturer_brand,mgs_brand,base_image,small_image,thumbnail_image,additional_images,product_colors_skus,size_chart_link,piece';
	} else if(brand == 'Servis'){
			var header = 'sku,store_view_code,attribute_set_code,product_type,categories,product_websites,name,description,short_description,weight,product_online,tax_class_name,visibility,price,special_price,special_price_from_date,special_price_to_date,url_key,created_at,updated_at,new_from_date,new_to_date,display_product_options_in,map_price,msrp_price,map_enabled,gift_message_available,custom_design,custom_design_from,custom_design_to,custom_layout_update,page_layout,product_options_container,msrp_display_actual_price_type,country_of_manufacture,related_skus,color,size,additional_attributes,configurable_variations,qty,out_of_stock_qty,use_config_min_qty,is_qty_decimal,allow_backorders,use_config_backorders,min_cart_qty,use_config_min_sale_qty,max_cart_qty,use_config_max_sale_qty,is_in_stock,notify_on_stock_below,use_config_notify_stock_qty,manage_stock,use_config_manage_stock,use_config_qty_increments,qty_increments,use_config_enable_qty_inc,enable_qty_increments,is_decimal_divided,website_id,deferred_stock_update,use_config_deferred_stock_update,pre_order,pre_order_msg,upsell_skus,hide_from_product_page,custom_options,bundle_price_type,bundle_sku_type,bundle_price_view,bundle_weight_type,bundle_values,associated_skus,manufacturer_brand,mgs_brand,base_image,small_image,thumbnail_image,additional_images,product_colors_skus,size_chart_link';
	}

	for(var i in new_csv){
		var string = '';
		string+= "\"";
		var lastIndex = new_csv[i][0].lastIndexOf('-');
		if(lastIndex != - 1){
			var code = new_csv[i][0].slice(0, lastIndex);
			var x = false;
			for(var j in new_csv){
				var subLastIndex  = new_csv[j][0].lastIndexOf('-');
				if(subLastIndex != -1){
					var sub_code = new_csv[j][0].slice(0,subLastIndex);
					if(code == sub_code){
						x = true;
						string+= new_csv[j][0];
						string += ',';
					}
				}
			}
			if(x){
				string = string.slice(0, -1);
				string += "\"";
				new_csv[i][80] = string;
			}
		}
	}


	var csv = header + '\n';
	new_csv.forEach(function(row) {
		csv += row.join(',');
		csv += '\n';
	});
	var parent = document.getElementById('download_csv');
	var hiddenElement = document.createElement('a');
	parent.appendChild(hiddenElement);
	hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
	hiddenElement.target = '_blank';
	hiddenElement.download = new Date().toUTCString()+'-Final Output.csv';
	hiddenElement.click();
	parent.removeChild(hiddenElement);
}


$(document).ready(function(){
	$('#submit').on("click",function(e){
		e.preventDefault();
		if (!$('#files')[0].files.length){
			alert("Please choose at least one file to read the data.");
		}

		$('#files').parse({
			config: {
				delimiter: ";",
				complete: buildTable,
			},
			before: function(file, inputElem)
			{
				//console.log("Parsing file...", file);
			},
			error: function(err, file)
			{
				console.log("ERROR:", err, file);
			},
			complete: function()
			{
				//console.log("Done with all files");
			}
		});
	});
});
