import React, { useState, useEffect,useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../redux/features";

function Index() {
  const dispatch = useDispatch();
  const [lastFetched, setLastFetched] = useState(null);
  const { users, error, loading } = useSelector((state) => ({
    ...state,
  }));

  useEffect(() => {
    dispatch(fetchApi());
    setLastFetched(new Date());
  }, [dispatch]);

  const handleRefresh = useCallback(() => {
    const now = new Date();
    const diff = now - lastFetched;

    if (!lastFetched || diff > 10000) {
      dispatch(fetchApi());
      setLastFetched(now);
    } else {
      console.log("Less than 10 seconds — using cached data");
    }
  }, [dispatch, lastFetched]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>

      <button
        onClick={handleRefresh}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Refresh
      </button>

      <ol className="bg-white shadow-md rounded p-4 w-full max-w-md">
        {users && users.length > 0 ? (
          users[0]?.map((user) => (
            <li key={user.id} className="border-b py-2 last:border-none">
              {user.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No users available</p>
        )}
      </ol>
    </div>
  );
}

export default Index;
