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
      max_results: 50,
    });

  return (
    <section className="w-full h-fit columns-2 md:columns-3 2xl:columns-4 ">
      {images.map((image) => {
        return (
          <div className="relative" key={image.public_id}>
            <CldImageWrapper
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              sizes="100vw"
              className="object-cover shadow-lg rounded-xl my-1"
            />
            <ImageModal image={image} />
          </div>
        );
      })}
    </section>
  );
}
