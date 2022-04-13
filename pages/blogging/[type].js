import { useRouter } from "next/router";
function type() {
  const router = useRouter();
  const type = router.query.type;
  return <h1>Type of Blogging {type}</h1>;
}

export default type;
