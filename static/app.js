const banner = document.getElementById('banner');

let base_img = "https://res.cloudinary.com/demo/image/upload/f_png,w_934,h_282,r_10,g_north_west,c_thumb,x_0,y_0/sample.png";

//banner.src = base_img;

function generateLink(img, opacity, color, accent, user) {
	let prefix = "https://res.cloudinary.com/demo/image/fetch";

	// Default parameters. Const because they don't change
	const d_img = "https://i.imgur.com/0l0ZBCm.png";
	const d_opacity = 50;
	const d_color = "BACE55";
	const d_accent = "FFFFFF";
	const d_user = "username";

	// Ternary operator. Basically "one-line" if blocks.
	// if isitmuted is equal to true, then return on otherwise off
	//properties['Value'] = (IsItMuted === true) ? 'On' : 'Off';
	// IMPORTANT NOTE: undefined is the JavaScript's "None"

	// Parameters (conditional later, default for now)
	let p_img = (img === "" || img === undefined) ? d_img : img;
	let p_opacity = (opacity === "" || opacity === undefined) ? d_opacity : opacity;
	let p_color = (color === "" || color === undefined) ? d_color : color.replace('#', '');
	let p_accent = (accent === "" || accent === undefined) ? d_accent : accent.replace('#', '');
	let p_user = encodeURIComponent((user === "" || user === undefined) ? d_user : user).replace('%25', '%252F');

	// Transformations into variables
	// Base background
	var t_base = `f_png,w_934,h_282,r_10,g_north_west,c_thumb,x_0,y_0`;
	// Shapes
	var t_box =  `l_one_pixel,w_894,h_242,r_25,e_colorize,co_black,o_${p_opacity}`;
	var t_avatar = `l_one_pixel,c_fill,r_max,w_200,h_200,g_west,x_62,bo_5px_solid_rgb:${p_color},e_colorize,co_rgb:1A1630`;
	var t_sepline = `l_one_pixel,w_557,h_2,x_117,e_colorize,co_rgb:${p_accent}`;
	
	// Text on image
	var t_user = `l_text:Montserrat_52:${p_user},co_rgb:${p_accent},g_west,x_305,y_-40`;
	var t_rank = `l_text:Lato_32_right:Rank%20%231,co_rgb:${p_accent},g_east,x_70,y_-40`;
	var t_level = `l_text:Lato_32:Level%2029,co_rgb:${p_accent},g_west,x_305,y_30`;
	var t_xpoutof = `l_text:Lato_24_right:2%2E1k%252F5%2E8k,co_rgb:${p_accent},g_east,x_70,y_30`;

	// XP Bar
	var t_xpbg = `l_one_pixel,w_557,h_36,g_south,x_117,y_41,e_colorize,co_rgb:1A1630,r_7,bo_2px_solid_rgb:${p_accent}`;
	var t_xpprefix = `l_one_pixel,w_22,h_36,g_west,x_306,y_80,e_colorize,co_rgb:${p_color},r_6`;
	var t_xpfill = `l_one_pixel,w_188,h_36,g_west,x_320,y_80,e_colorize,co_rgb:${p_color}`;
	var t_xppercent = `l_text:Lato_30:36%25,co_white,g_south,x_117,y_50`;


	var url = `${prefix}/${t_base}/${t_box}/${t_avatar}/${t_sepline}/${t_user}/${t_rank}/${t_level}/${t_xpoutof}/${t_xpbg}/${t_xpprefix}/${t_xpfill}/${t_xppercent}/${p_img}`;
	var final_url = url;

	/*let paramDict = {
		opacity: def_opacity,
		color: def_color,
		accent: def_accent,
		image: def_img
	};

	final_url = prefix
	for (const item in paramDict) {
		final_url += item + "/"
	}*/

	banner.src = final_url
	console.log(final_url)


	/*for (const [key, value] of Object.entries(object1)) {
		console.log(`${key}: ${value}`);
	  }*/
}

generateLink();

function submitted() {
	var txt = document.getElementById('testing');
	txt.innerText = 'Yes it did.';
	var paramForm = document.getElementById("paramform");
	var paramArray = [];
	for (var i = 0; i < paramForm.length; i++) {
		  //txt = txt + x.elements[i].value + "<br>";
		  paramArray.push(paramForm[i].value)
	}
	generateLink(...paramArray);
	//for (var i = 0; i < paramArray.length; i++) {	
	//}
	console.log("Form submitted!")
	console.log(paramArray)
}