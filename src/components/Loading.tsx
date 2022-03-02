export default function Loading() {
  console.log("loading");
  return (
    <div className="loading" data-testid="loading">
      <img src="/images/loading.gif" alt="" className="loading-img" />
    </div>
  );
}
