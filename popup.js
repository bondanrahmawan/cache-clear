document.getElementById("clearCacheButton").addEventListener("click", () => {
	chrome.browsingData.remove(
		{
			since: 0, // Clear from the beginning of time
		},
		{
			cache: true, // Clear the cache
			history: true, // Clear the history
		},
		() => {
			alert("Cleared!");
		}
	);
});
