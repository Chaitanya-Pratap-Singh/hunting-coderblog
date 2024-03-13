/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}>
			<Image
				src="/404.svg"
				alt="404 Not Found"
				width="100"
				height="100"
				style={{
					width: "50vw",
					height: "50vh",
					margin: "3.5rem",
				}}
			/>

			<div>
				<button className="button" role="button">
					<Link href="/" style={{ textDecoration: "none", color: "white" }}>
						{" "}
						Go to Homepage
					</Link>
				</button>
				<button className="button" role="button">
					<Link href="/blog" style={{ textDecoration: "none", color: "white" }}>
						{" "}
						View all our blogs
					</Link>
				</button>
			</div>

			{/* CSS styles */}
			<style jsx>{`
				.button {
					background-image: linear-gradient(
						92.88deg,
						#455eb5 9.16%,
						#5643cc 43.89%,
						#673fd7 64.72%
					);
					border-radius: 8px;
					border-style: none;
					box-sizing: border-box;
					color: #ffffff;
					cursor: pointer;
					flex-shrink: 0;
					font-family: "Inter UI", "SF Pro Display", -apple-system,
						BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
						"Open Sans", "Helvetica Neue", sans-serif;
					font-size: 16px;
					font-weight: 500;
					height: 4rem;
					padding: 0 1.6rem;
					text-align: center;
					text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
					margin: 3.5rem;
				}
			`}</style>
		</div>
	);
};

export default NotFound;
