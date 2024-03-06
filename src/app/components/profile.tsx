import Image from "next/image";

export default function Profile() {
    return (
      <Image
        src="https://beta.dopple.ai/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FLBWXYQ-XnKSYxbZ-NuYGqQ%2F4eadfbdf-ab6c-4ed6-13c7-39cc50213400%2Favatarhd&w=256&q=75"
        alt="Lucifer Morningstar"
        width={100}
        height={100}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "13px"
        }}
      />
    );
  }