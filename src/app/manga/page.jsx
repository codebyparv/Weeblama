import MangaSearchBox from "./components/inputContainer";

export const metadata = {
	title: "Weeblama Manga",
	description: "Manga/Manhwa page for Weeblama",
};

const MangaHomePage = async () => {
	return (
		<main className="flex h-[90dvh] w-full flex-col items-center">
			<div className="mt-2">
				<p className="text-center text-xl">
					Welcome to <br />
					<span className="text-3xl text-sky-400">
						Weeblama-Manga
					</span>
				</p>
			</div>
			<div className="mt-2 w-full lg:w-1/3">
				<MangaSearchBox />
			</div>
		</main>
	);
};

export default MangaHomePage;
