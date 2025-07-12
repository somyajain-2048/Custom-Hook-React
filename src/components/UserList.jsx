import useFetch from "../hooks/useFetch";

// function UserList() {
//   const { data, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   if (loading) return <p>Loading....</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <ul>
//       {data.map((user) => {
//         <li key={user.id}>{user.name}</li>;
//       })}
//     </ul>
//   );
// }
// export default UserList;

// import useFetch from "..hooks/useFetch";

function UsersList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
