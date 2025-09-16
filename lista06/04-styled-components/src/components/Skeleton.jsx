import styled, { keyframes } from "styled-components"

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`

const SkeletonBox = styled.div`
  height: ${({ height }) => height || "20px"};
  width: ${({ width }) => width || "100%"};
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`

export default function Skeleton({ width, height }) {
  return <SkeletonBox width={width} height={height} />
}
