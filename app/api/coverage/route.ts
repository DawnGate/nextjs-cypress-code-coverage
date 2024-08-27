export const GET = (request: Request) => {
  return Response.json({
    coverage: global.__coverage__ || null,
  });
};
