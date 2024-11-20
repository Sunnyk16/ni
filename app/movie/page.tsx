async function movie() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error("Failed to fetch data");
    const albums: { id: number, title: string }[] = await response.json();
    return (
        <div className="grid-cols-1 sm:grid-cols-2">
            {albums.map((album) => (
                <div key={album.id} className="shadow-md rounded-lg p-4 transition">
                    <h3 className="font-bold">ID: {album.id}</h3>
                    <p>Title: {album.title}</p>
                </div>
            ))}
        </div>
    );
}

export default movie;