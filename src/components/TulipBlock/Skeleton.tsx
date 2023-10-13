import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={470}
        viewBox="0 0 280 470"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="280" height="173" />
        <rect x="0" y="187" rx="10" ry="10" width="280" height="27" />
        <rect x="1" y="230" rx="10" ry="10" width="280" height="88" />
        <rect x="1" y="336" rx="10" ry="10" width="78" height="27" />
        <rect x="122" y="328" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton
