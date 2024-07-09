const base_url_one = "https://dramacool-scraper.vercel.app";
const base_url_two = "https://consumet-jade.vercel.app/movies/dramacool";
const base_url_three =
	"https://api-consumet-org-ukw6.onrender.com/movies/dramacool";
const proxy_url = "https://sup-proxy.zephex0-f6c.workers.dev/api-json?url=";

export const popular_dramas_url = `${proxy_url}${base_url_one}/popular`;

export const recent_drama_url = `${proxy_url}${base_url_one}/recent`;

export const search_drama_url = (title) =>
	`${proxy_url}${base_url_two}/${title}`;

export const drama_info_url = (id) =>
	`${proxy_url}${base_url_two}/info?id=${id}`;

export const videoURL = (episodeId, mediaId) => {
	return `${proxy_url}${base_url_three}/watch?episodeId=${episodeId}&mediaId=${mediaId}`;
};
