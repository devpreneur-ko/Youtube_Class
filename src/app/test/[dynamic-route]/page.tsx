type PropsType = Promise<{ id: string }>;

export default async function DynamicRoutePage({ params }: { params: PropsType }) {
  const { id } = await params;
  alert(id);

  return <div>동적 라우팅 페이지</div>;
}
