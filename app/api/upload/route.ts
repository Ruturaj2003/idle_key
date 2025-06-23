export async function POST(request: Request) {
  const formData = await request.formData();
  console.log(formData);
  return Response.json({ message: "Files Uploaded" });
}
