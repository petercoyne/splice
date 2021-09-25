export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;
    console.log(slug);

    const res = await fetch('http://home.splice.ie:3000/stuff?_id=' + encodeURIComponent(slug));
    const data = await res.json();

    if (data) {
		return {
			body: {
				data
			}
		};
	}
}