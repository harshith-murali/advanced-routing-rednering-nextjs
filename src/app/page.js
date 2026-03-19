export default async function Page() {
  const res = await fetch("https://api.github.com/users/harshith-murali", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("User not found");
  }

  const data = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[350px] text-center">
        
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
        />

        {/* Username */}
        <h1 className="text-2xl font-bold">{data.login}</h1>
        <p className="text-gray-500 text-sm mb-2">{data.name}</p>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-4">
          {data.bio || "No bio available"}
        </p>

        {/* Stats */}
        <div className="flex justify-between text-sm bg-gray-50 rounded-lg p-3 mb-4">
          <div>
            <p className="font-bold">{data.public_repos}</p>
            <p className="text-gray-500">Repos</p>
          </div>
          <div>
            <p className="font-bold">{data.followers}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div>
            <p className="font-bold">{data.following}</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-4">
          📍 {data.location || "Unknown"}
        </p>

        {/* Button */}
        <a
          href={data.html_url}
          target="_blank"
          className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View Profile
        </a>
      </div>

    </div>
  );
}