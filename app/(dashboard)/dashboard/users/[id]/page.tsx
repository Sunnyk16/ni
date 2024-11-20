export default function page({ params }: { params: { id: string } })
 {
  const {id}=params;
  return <div>user detail{id}</div>;
}
