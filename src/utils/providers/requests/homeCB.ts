

//CLIENT CALLS
export async function getCMSData(): Promise<> {
  const response = await fetch("/api/customCMS");
  return response.json();
}/* 
export async function getCommentsData(id: string): Promise<[]> {
  const response = await fetch(`/api/blog/comments/${id}`);
  return response.json();
}

//SERVER CALLS
export async function getBlogCMSData(): Promise<> {
  const response = await fetch(
    process.env.VERCEL_URL_CORS + "/api/blog/blogData"
  );
  return response.json();
}

export async function getPostsData(): Promise<[]> {
  const response = await fetch(process.env.VERCEL_URL_CORS + "/api/blog/posts");
  return response.json();
}

export async function getPostByIdData(id: string): Promise<> {
  const response = await fetch(
    `${process.env.VERCEL_URL_CORS}/api/blog/posts/${id}`
  );
  return response.json();
}
export async function fetchProject(id: any): Promise<> {
  const res = await fetch(`${process.env.VERCEL_URL_CORS}/api/projects/${id}`);
  return res.json();
}
export async function getInBoxData() {
  const res = await fetch(process.env.VERCEL_URL_CORS + "/api/contactMe");
  return res.json();
}
 */