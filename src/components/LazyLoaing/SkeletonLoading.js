import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = () => {
  return (
    <>
      <div className="col-md-6">
        <SkeletonTheme baseColor="#F1EFF1" highlightColor="#efeeee">
          <p>
            <Skeleton count={4.5} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="col-md-6">
        <SkeletonTheme baseColor="#F1EFF1" highlightColor="#efeeee">
          <p>
            <Skeleton count={4.5} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="col-md-6">
        <SkeletonTheme baseColor="#F1EFF1" highlightColor="#efeeee">
          <p>
            <Skeleton count={4.5} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="col-md-6">
        <SkeletonTheme baseColor="#F1EFF1" highlightColor="#efeeee">
          <p>
            <Skeleton count={4.5} />
          </p>
        </SkeletonTheme>
      </div>
    </>
  );
};

export default SkeletonLoading;
