import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  )
  console.log(error);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
    </div>
  );
}
