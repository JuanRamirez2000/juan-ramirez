import cloudinary from "cloudinary";
import { ResourceApiResponse } from "cloudinary";
import CldImageWrapper from "../components/CldImageWrapper";
import ImageModal from "./ImageModal";

export default async function Page() {
  const { resources: images }: { resources: ResourceApiResponse["resources"] } =
    await cloudinary.v2.api.resources({
      resource_type: "image",
      prefix: "Juan/",
      type: "upload",
      max_results: 25,
    });

  return (
    <section className="w-[90%] h-fit columns-2 md:columns-3 2xl:columns-4 first:mt-0 ">
      {images.map((image) => {
        return (
          <div className="relative" key={image.public_id}>
            <CldImageWrapper
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              sizes="100vw"
              className="object-cover shadow-lg rounded-xl  first:mt-0 my-1"
            />
            <ImageModal image={image} />
          </div>
        );
      })}
    </section>
  );
}

{
  /* <ImageModal imageUrl={image.url} />*/
}
